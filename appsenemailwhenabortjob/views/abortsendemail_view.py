# -*- coding: utf-8 -*-
import ConfigParser

from django.http import HttpResponse
from django.shortcuts import render_to_response,render
from django.utils.log import logger

import httplib, urllib2,urllib
#导入json
try:
    import simplejson as json
except ImportError:
    import json

#用户abort的时候发送邮件
def abortSendEmail(request):
    from djproject.appsenemailwhenabortjob.views.utils import getSendEmailUrl
    url=getSendEmailUrl()
    request = urllib2.Request(url)
    connection = httplib.HTTPConnection(request.get_host())
	#base64string = base64.encodestring('%s:%s' % ("admin", "admin")).replace('\n', '')

    contentType='text/json; charset=utf-8'
    data = urllib.urlencode({'sender': 'janksenhu@tencent.com', 'receiver': 'janksenhu@tencent.com', 'title': 'test','msg':'<img src="http://127.0.0.1:8000/hudson/sendchart/sendpieinner" /><img src="http://127.0.0.1:8000/hudson/sendchart/sendlinechart">'})
    connection.request('POST', request.get_selector(),data,{'content-type': contentType})
    response=connection.getresponse()

    print response.status, response.reason
    data = response.read()
    return HttpResponse('发送成功')