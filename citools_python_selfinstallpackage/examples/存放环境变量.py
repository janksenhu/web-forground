from mysqlenvvar import envvar
envDic=envvar.getEnvvar()
envDic['path']="c:\\test"
envvar.setEnvDic(envDic)
envvar.setEnvDic('ark78912',envDic)
