import com.xixibase.cache.CacheClient;
import com.xixibase.cache.CacheClientManager;

public class Xixitest  {

        public static void main(String[] args) {
                String servers = "localhost:7788";
                if (args.length >= 1) {
                        servers = args[0];
                }

                String[] serverlist = servers.split(",");

                CacheClientManager manager = CacheClientManager.getInstance("example");
                manager.initialize(serverlist);
                
                CacheClient cc = manager.createClient();
                long begintime=System.currentTimeMillis();
                for(int i=0;i<100000;i++){
                	cc.add("key", "value1");	
                }
                long endtime=System.currentTimeMillis();
                System.out.println("time is "+(endtime-begintime));
                cc.flush();
                
                
                manager.shutdown();
        }
}
