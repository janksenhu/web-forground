# -*- coding: utf-8 -*-
import os, ConfigParser
import base64
try:
    import simplejson as json
except ImportError:
    import json

#返回cgi调用接口
def getPieInnerUrl():
    return 'http://10.6.198.88:8025/cichart/getpieinner'

#调用cgi接口
def getPieOuterUrl():
    return 'http://10.6.198.88:8001/cichart/getpieouter'

#调用cgi接口
def getLineChartUrl():
    return 'http://10.6.198.88:8001/cichart/getlinechart'
