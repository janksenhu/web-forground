#-*- coding:utf-8 -*-
import MySQLdb
import os,time,subprocess,codecs,smtplib,ConfigParser

##this is a install package test method
##@params
##  none
##@return
##  none
def test():
    print "Hello, I'm Janksenhu"


##获取环境变量的字典
##参数:集成项目名
##返回值:集成项目的环境变量的字典
def getEnvDic(jobname):
    envDic={}
    if jobname==None or len(jobname)==0:
        return envDic
    try:
        conn=MySQLdb.connect(host='testing.imd.com',user='root',passwd='',db='testci')
        cursor=conn.cursor()
        sql="SELECT envname,envvalue FROM testci.new_ci_env_var where jobname='"+jobname+"';commit;"
        datanum=cursor.execute(sql)
        if datanum>0:
            dataset=cursor.fetchall()
            for data in dataset:
                start_posi=data[0].find('#')+1
                env_key=data[0][start_posi:len(data[0])]
                envDic[env_key]=data[1]
        cursor.close()
        conn.close()
        if(len(envDic.keys())>0):
            return envDic
        else:
            return None
    except:
        return None

##获取环境变量的时候自动通过jobname获取
##参数：无
##返回值：环境变量的字典
def getEnvDicWithOutName():
    jobname=None
    try:
        env_tem = os.environ
        jobname=env_tem['JOB_NAME']
    except:
        return False
    if jobname!=None:
        envDic={}
        try:
            conn=MySQLdb.connect(host='testing.imd.com',user='root',passwd='',db='testci')
            cursor=conn.cursor()
            sql="SELECT envname,envvalue FROM testci.new_ci_env_var where jobname='"+jobname+"';commit;"
            datanum=cursor.execute(sql)
            if datanum>0:
                dataset=cursor.fetchall()
                for data in dataset:
                    start_posi=data[0].find('#')+1
                    env_key=data[0][start_posi:len(data[0])]
                    envDic[env_key]=data[1]
            cursor.close()
            conn.close()
            if(len(envDic.keys())>0):
                return envDic
            else:
                return None
        except:
            return None
    else:
        return None


##环境变量入库操作
##参数:集成项目名，该集成项目的环境变量字典
##返回值:更新数据成功返回true，更新失败返回false
def setEnvDic(jobname,envDic):
    if jobname==None or len(jobname)==0:
        return False
    conn=MySQLdb.connect(host='testing.imd.com',user='root',passwd='',db='testci')
    cursor=conn.cursor()
    sql="DELETE FROM testci.new_ci_env_var where jobname='"+jobname+"';commit;"
    datanum=cursor.execute(sql)
    cursor.close()
    T=[]
    for key in envDic.keys():
        tem_tuple=(jobname,jobname+'#'+key.strip(),envDic[key].strip())
        T.append(tem_tuple)
    try:
        cursor=conn.cursor()
        data=cursor.executemany('insert into testci.new_ci_env_var (jobname,envname,envvalue) values (%s,%s,%s)',T)
        print 'update save envVar num: ',data
        conn.commit()
        cursor.close()
        conn.close()
        return True
    except:
        cursor.close()
        conn.close()
        return False

##环境变量入库操作，不需要提供job_name
##参数：环境变量字典
##返回值：存入陈功：tre
##存入失败返回false
def setEnvDicWithOutName(envDic):
    jobname=None
    try:
        env_tem = os.environ
        jobname=env_tem['JOB_NAME']
    except:
        return False
    if jobname!=None:
        conn=MySQLdb.connect(host='testing.imd.com',user='root',passwd='',db='testci')
        cursor=conn.cursor()
        sql="DELETE FROM testci.new_ci_env_var where jobname='"+jobname+"';commit;"
        datanum=cursor.execute(sql)
        cursor.close()
        T=[]
        for key in envDic.keys():
            tem_tuple=(jobname,jobname+'#'+key.strip(),envDic[key].strip())
            T.append(tem_tuple)
        try:
            cursor=conn.cursor()
            data=cursor.executemany('insert into testci.new_ci_env_var (jobname,envname,envvalue) values (%s,%s,%s)',T)
            print 'update save envVar num: ',data
            conn.commit()
            cursor.close()
            conn.close()
            return True
        except:
            cursor.close()
            conn.close()
            return False
    else:
        return False




