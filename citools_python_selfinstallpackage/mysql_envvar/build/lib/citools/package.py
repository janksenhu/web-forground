#-*- coding:utf-8 -*-
import urllib2,sys,os

reload(sys)
sys.setdefaultencoding('utf-8')#系统默认编码方式


#通过url设置安装包的位置
def setInstallPackagePath(installpackagepath):
    try:
        env_tem = os.environ
        jobname=env_tem['JOB_NAME']
        buildnumber=env_tem['BUILD_NUMBER']
        url="http://10.6.193.28/ci/installpackage/setinstallpackagepath?jobname="+jobname+"&number="+buildnumber+"&path="+urllib2.quote(installpackagepath)+""
        return urllib2.urlopen(url).read()
    except:
        return 'wrong'

#通过url获取安装包的位置
def getInstallPackagePath():
    try:
        env_tem = os.environ
        jobname=env_tem['JOB_NAME']
        buildnumber=env_tem['BUILD_NUMBER']
        url="http://10.6.193.28/ci/installpackage/getinstallpackagepath?jobname="+jobname+"&number="+buildnumber+""
        return urllib2.unquote(urllib2.urlopen(url).read()).decode('utf-8').encode('GBK')
    except:
        return 'wrong'