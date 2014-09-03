from django.conf.urls.defaults import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('appsendcharttozhoubao.views',
##    (r'^$','example_views.index'),
    (r'^/sendpieinner$','sendchart_view.sendPieInner'),
    (r'^/sendpieouter$','sendchart_view.sendPieOuter'),
    (r'^/sendlinechart$','sendchart_view.sendLineChart'),
)
