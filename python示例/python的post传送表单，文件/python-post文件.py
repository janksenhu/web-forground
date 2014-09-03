# coding:utf8
#-------------------------------------------------------------------------------
# Name:        模块2
# Purpose:
#
# Author:      janksenhu
#
# Created:     16/08/2012
# Copyright:   (c) janksenhu 2012
# Licence:     <your licence>
#-------------------------------------------------------------------------------
import httplib,urllib2, mimetypes

def post_multipart(fields, files):
    content_type, body = encode_multipart_formdata(fields, files)
    #与网站构建一个连接
    request = urllib2.Request("http://newtonzhang-pc0.tencent.com:8080/ddms/index.php/stage/addattach/")
    h = httplib.HTTPConnection(request.get_host())
    h.putrequest('POST', request.get_selector())
    h.putheader('content-type', content_type)
    h.putheader('content-length', str(len(body)))
    h.endheaders()
    h.send(body)
    response = h.getresponse()
    return response.read()

def encode_multipart_formdata(fields, files):
    """
    fields是由(name, value)平常的form表单元素组成的串.
    files是由(name, filename, value) 上传文件html元素组成的串
    返回httplib.HTTP实例
    """
    BOUNDARY = '----------ThIs_Is_tHe_bouNdaRY_$'
    CRLF = '\r\n'
    L = []
    for (key, value) in fields:
        L.append('--' + BOUNDARY)
        L.append('Content-Disposition: form-data; name="%s"' % key.encode("utf8"))
        L.append('')
        L.append(value.encode("utf8"))
    for (key, filename, value) in files:
        L.append('--' + BOUNDARY)
        L.append('Content-Disposition: form-data; name="%s"; filename="%s"' % (key, filename))
        L.append('Content-Type: %s' % get_content_type(filename))
        L.append('')
        L.append(value)
    L.append('--' + BOUNDARY + '--')
    L.append('')
    body = CRLF.join(L)
    content_type = 'multipart/form-data; boundary=%s' % BOUNDARY
    return content_type, body

def get_content_type(filename):
    return mimetypes.guess_type(filename)[0] or 'application/octet-stream'

def main():
    key = "sattach" #html中form表单中元素的name属性值
    fileObj = open('C:\\Users\\janksenhu\\Desktop\\email.doc','r')
    if fileObj.__sizeof__() > 10 * 1024 * 1024:
        raise Exception("file too large")
    fileName = fileObj.name.encode("utf8")
    response = post_multipart([('Stage[id]','3')],[(key, fileName, fileObj.read())])
    print response

if __name__ == '__main__':
    main()
