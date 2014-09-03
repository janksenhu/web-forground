# -*- coding: utf-8 -*-
#!/usr/bin/python
import httplib,urllib,urllib2;  #加载模块


#定义需要进行发送的数据
params = urllib.urlencode({'Stage[cuid]':'03fb13d74fff783cc4e02571c1d65ab1',
                           'Stage[sname]':'标题-Test39875'.encode('utf-8'),
                           'Stage[scontent]':'好哦斯蒂芬森分 '.encode('utf-8'),
                           'Stage[sattch]':'来源'.encode('utf-8')});
#定义一些文件头
headers = {"Content-Type":"application/x-www-form-urlencoded",
           "Accept": "text/plain",'Accept-Language': 'zh-CN'};
#与网站构建一个连接
request = urllib2.Request("http://10.6.198.79/ddms/index.php/stage/create/")
connection = httplib.HTTPConnection(request.get_host())
print connection
#开始进行数据提交   同时也可以使用get进行
connection.request("POST",request.get_selector(),params,headers);
#返回处理后的数据
response = connection.getresponse();
#判断是否提交成功
if response.status == 302:
    print "发布成功";
else:
    print "发布失败";
#关闭连接
print response.status, response.reason,response.read()
connection.close();


