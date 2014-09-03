#!/usr/bin/env python
#-*- coding:utf-8 -*-

from setuptools import setup,find_packages

setup(
        name = "citools",
        version="0.1.1",
        packages=find_packages('citools', exclude=['examples*', 'test*']),#打包的文件
        zip_safe = False,

        description = "use this package to set get install package path , and get the environment value",
        long_description = "use this package to connect to set get install package path , and get the environment value,then in the hudson steps could use this value",
        author = "janksenhu",
        author_email = "janksenhu@tencent.com",

        license = "GPL",
        keywords = ("citools", "egg"),
        platforms = "Independant",
        url = "",#下载地址
        py_modules=['citools'],

)