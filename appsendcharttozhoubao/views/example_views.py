'''
Created on 2011-9-8

@author: janksenhu
'''
from django.shortcuts import render_to_response #@UnresolvedImport
def index(request):
    return render_to_response('example.html',{'name':'I am a test'})
