from django.conf.urls.defaults import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('appsenemailwhenabortjob.views',
    (r'^$','example_views.index'),
    (r'^/abortemail$','abortsendemail_view.abortSendEmail'),
)
