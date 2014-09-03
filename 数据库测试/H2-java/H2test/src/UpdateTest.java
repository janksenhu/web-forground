
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class UpdateTest { 

    public void runInsertDelete() {
        try {
            String sourceURL = "jdbc:h2:~/test"; // H2 database
            String user = "sa";
            String key = "";
            try {
                Class.forName("org.h2.Driver"); // H2 Driver
            } catch (Exception e) {
                e.printStackTrace();
            }
            Connection conn = DriverManager.getConnection(sourceURL, user, key);
            Statement stmt = conn.createStatement();
//            stmt.execute("CREATE TABLE mytable(name VARCHAR(100),sex VARCHAR(10))");
            long begintime=System.currentTimeMillis();
            for(int i=0;i<10000000;i++){
            	stmt.executeUpdate("INSERT INTO mytable VALUES('Steven Stander','male')");
            }
            long endtime=System.currentTimeMillis();
            System.out.println("time is "+(endtime-begintime));
//            stmt.executeUpdate("INSERT INTO mytable VALUES('Elizabeth Eames','female')");
            //stmt.executeUpdate("DELETE FROM mytable WHERE sex='male'");
            stmt.close();
            conn.close();
            System.out.println("update");
        } catch (SQLException sqle) {
            System.err.println(sqle);
        }
    }
    
    public void query(String sql){
        try {
            String sourceURL = "jdbc:h2:~/test"; // H2 database
            String user = "sa";
            String key = "";
            try {
                Class.forName("org.h2.Driver"); // H2 Driver
            } catch (Exception e) {
                e.printStackTrace();
            }
            Connection conn = DriverManager.getConnection(sourceURL, user, key);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                System.out.println("sssssssss :" + rs.getString("name"));
            }
            stmt.close();
            conn.close();
            System.out.println("query");
        } catch (SQLException sqle) {
            System.err.println(sqle);
        }
    }

    public static void main(String args[]) {
        new UpdateTest().runInsertDelete();
        //new UpdateTest().query("select * from mytable");
    }
}
