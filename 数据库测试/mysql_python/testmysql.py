import os,ConfigParser,MySQLdb,time
confFile="Y:\ci_source\djproject_source\djproject_source\djproject_two\djproject\hudson\config\db.cfg"
confPar=ConfigParser.ConfigParser()
with open(confFile,'r+') as config:
    confPar.readfp(config)
    host=confPar.get('db', 'host')
    user=confPar.get('db','user')
    db=confPar.get('db', 'db')
    passwd= confPar.get('db', 'pass')

conn=MySQLdb.connect(host=host,user=user,passwd=passwd,db=db)
cursor=conn.cursor()
T=[]
tem=time.time()
for i in range(0,100000):
    tem_tuple=(None,'Steven Stander','male')
    T.append(tem_tuple)
    #sql="insert into testci.new_ci_env_var values(null,'"+proj_name.strip()+"','"+proj_name.strip()+'#'+option.strip()+"','"+value.strip()+"');commit;"
    #datanum=cursor.execute(sql)
data=cursor.executemany("insert into testci.testmysql (id,name,sex) values (%s,%s,%s)",T)
tem2=time.time()
print tem2-tem
conn.commit()
cursor.close()
conn.close()