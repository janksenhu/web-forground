<!--flot画图-->
<script language="javascript" type="text/javascript" src="/djproject/media/js/flot/jquery.flot.js"></script>
<script language="javascript" type="text/javascript" src="/djproject/media/js/flot/jquery.flot.pie.js"></script>

<style type="text/css">
b.rtop, b.rbottom{/*圆角矩形顶部和底部设置块状显示及网页背景颜色*/
	display:block;
	background: transparent;
}
b.rtop b, b.rbottom b{/*设置顶部和底部组成圆角的各元素块状显示和高度为1像素,及颜色,overflow为了适应IE6*/
	display:block;
	height: 1px;
	overflow: hidden;
	background: #e3edf9;
}
b.r1{margin: 0 5px;}/*详细设置组成圆角元素长度差值,形成圆角视觉效果*/
b.r2{margin: 0 3px;}
b.r3{margin: 0 2px}
b.rtop b.r4, b.rbottom b.r4{margin:0 1px;height: 2px}/*圆角上半部分的最下元素和下半部分的最上元素,加高一像素为了平滑边缘*/


body{
    width:950px;
	margin:0 auto;
    font-size:13px;
}
</style>


<script type="text/javascript" src="/djproject/media/js/google-chart/jsapi.js"></script>
<script type="text/javascript">
//画图
//默认的画图
function drawChart(jobname){
    $.post(
		   "/hudson/statistics/getJobCiData",
		   {'jobname':jobname},
	       function(result){//服务器端返回到刚才请求的数据
	           //alert(result.data)
               var jsonobj = $.parseJSON(result.data)
                var data = [
                    { label: "成功率",  data: jsonobj.SUCCESS},
                    { label: "失败率",  data: jsonobj.FAILURE},
                    { label: "Abort率",  data: jsonobj.ABORTED},
                    { label: "运行中",  data: jsonobj.BUILDING}
                ];
                $.plot($("#chart_div"), data,
                {
                    series: {
                        pie: {
                                show: true,
                                radius: 0.7,
                                label: {
                                    show: true,
                                    radius: 2/4,
                                    formatter: function(label, series){
                                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
                                    },
                                    background: { opacity: 0.5 }
                                }
                            }
                            }
                });

	      }
    );
}
 
//当用户切换的时候，显示集成成功率
//当用户选择不同的集成任务名的时候显示不同的集成任务的统计分析
function displayChart(){
    var jobname=$('#jobname_select_id option:selected').text()
    drawChart(jobname);
}
  
//用户提交数据查看一个时间段里面的某个集成任务的集成成功率
function displayChartDuretion(){
        var jobname=$('#jobname_select_id option:selected').text()
        $.post(
		   "/hudson/statistics/getJobCiData",
		   {'jobname':jobname},
	       function(result){//服务器端返回到刚才请求的数据
	           //alert(result.data)
               var jsonobj = $.parseJSON(result.data)
                var data = [
                    { label: "成功率",  data: jsonobj.SUCCESS},
                    { label: "失败率",  data: jsonobj.FAILURE},
                    { label: "Abort率",  data: jsonobj.ABORTED},
                    { label: "运行中",  data: jsonobj.BUILDING}
                ];
                $.plot($("#chart_div"), data,
                {
                    series: {
                        pie: {
                                show: true,
                                radius: 0.7,
                                label: {
                                    show: true,
                                    radius: 2/4,
                                    formatter: function(label, series){
                                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
                                    },
                                    background: { opacity: 0.5 }
                                }
                            }
                            }
                });

	      }
    );
} 

//默认的画图
$(function(){
    var job_name=$('#default_job_name_id').val()
    $.post(
		   "/hudson/statistics/getJobCiData",
		   {'jobname':job_name},
	       function(result){//服务器端返回到刚才请求的数据
	           //alert(result.data)
               var jsonobj = $.parseJSON(result.data)
                var data = [
                    { label: "成功率",  data: jsonobj.SUCCESS},
                    { label: "失败率",  data: jsonobj.FAILURE},
                    { label: "Abort率",  data: jsonobj.ABORTED},
                    { label: "运行中",  data: jsonobj.BUILDING}
                ];
                $.plot($("#chart_div"), data,
                {
                    series: {
                        pie: {
                                show: true,
                                radius: 0.7,
                                label: {
                                    show: true,
                                    radius: 2/4,
                                    formatter: function(label, series){
                                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
                                    },
                                    background: { opacity: 0.5 }
                                }
                            }
                            }
                });

	      }
    );
})

</script>
