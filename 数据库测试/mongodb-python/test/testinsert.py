from pymongo import Connection #导入模块
con = Connection()
db = con.test #连接test数据库
posts = db.post #连接test中的post集合，相当于MySQL中的表
import time
tem=time.time()
for i in range(0,10000):
    posts.insert({'name':'Steven Stander','sex':'male'})
tem2=time.time()
print tem2-tem