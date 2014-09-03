# -*- coding: utf-8 -*-
import os, ConfigParser
import base64
try:
    import simplejson as json
except ImportError:
    import json

#获取发送邮件的接口
def getSendEmailUrl():
    return 'http://10.6.198.88:8001/hudson/email/sendemail'