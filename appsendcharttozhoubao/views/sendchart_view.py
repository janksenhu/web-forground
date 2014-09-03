# -*- coding: utf-8 -*-
import ConfigParser

from django.http import HttpResponse
from django.shortcuts import render_to_response,render
from django.utils.log import logger

import httplib, urllib2,urllib,base64
#导入json
try:
    import simplejson as json
except ImportError:
    import json

#饼状图
def sendPieInner(request):
    from djproject.appsendcharttozhoubao.views.utils import getPieInnerUrl
    url=getPieInnerUrl()
    request = urllib2.Request(url)
    connection = httplib.HTTPConnection(request.get_host())

    contentType='text/json; charset=utf-8'
    data = urllib.urlencode({'data': '45,56,78', 'labels': 'success,fail,abort', 'colors': '0x66ff66,0xff6666,0xffff00'})
    connection.request('POST', request.get_selector(),data,{'content-type': contentType})
    response=connection.getresponse()

    print response.status, response.reason
    data = response.read()
    str_tem=base64.b64encode(data)
    return HttpResponse(str_tem)

#图标在外面
def sendPieOuter(request):
    from djproject.appsendcharttozhoubao.views.utils import getPieOuterUrl
    url=getPieOuterUrl()
    request = urllib2.Request(url)
    connection = httplib.HTTPConnection(request.get_host())

    contentType='text/json; charset=utf-8'
    data = urllib.urlencode({'data': '45,56,78', 'labels': 'success,fail,abort', 'colors': '0x66ff66,0xff6666,0xffff00'})
    connection.request('POST', request.get_selector(),data,{'content-type': contentType})
    response=connection.getresponse()

    print response.status, response.reason
    data = response.read()
    return HttpResponse(data,"image/png")

#发送折线图
def sendLineChart(request):
    from djproject.appsendcharttozhoubao.views.utils import getLineChartUrl
    url=getLineChartUrl()
    request = urllib2.Request(url)
    connection = httplib.HTTPConnection(request.get_host())

    contentType='text/json; charset=utf-8'
    data = urllib.urlencode({'data': '45,56,78', 'labels': '1,2,3'})
    connection.request('POST', request.get_selector(),data,{'content-type': contentType})
    response=connection.getresponse()

    print response.status, response.reason
    data = response.read()
    return HttpResponse(data,"image/png")
