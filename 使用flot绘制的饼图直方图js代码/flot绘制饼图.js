<!--flot��ͼ-->
<script language="javascript" type="text/javascript" src="/djproject/media/js/flot/jquery.flot.js"></script>
<script language="javascript" type="text/javascript" src="/djproject/media/js/flot/jquery.flot.pie.js"></script>

<style type="text/css">
b.rtop, b.rbottom{/*Բ�Ǿ��ζ����͵ײ����ÿ�״��ʾ����ҳ������ɫ*/
	display:block;
	background: transparent;
}
b.rtop b, b.rbottom b{/*���ö����͵ײ����Բ�ǵĸ�Ԫ�ؿ�״��ʾ�͸߶�Ϊ1����,����ɫ,overflowΪ����ӦIE6*/
	display:block;
	height: 1px;
	overflow: hidden;
	background: #e3edf9;
}
b.r1{margin: 0 5px;}/*��ϸ�������Բ��Ԫ�س��Ȳ�ֵ,�γ�Բ���Ӿ�Ч��*/
b.r2{margin: 0 3px;}
b.r3{margin: 0 2px}
b.rtop b.r4, b.rbottom b.r4{margin:0 1px;height: 2px}/*Բ���ϰ벿�ֵ�����Ԫ�غ��°벿�ֵ�����Ԫ��,�Ӹ�һ����Ϊ��ƽ����Ե*/


body{
    width:950px;
	margin:0 auto;
    font-size:13px;
}
</style>


<script type="text/javascript" src="/djproject/media/js/google-chart/jsapi.js"></script>
<script type="text/javascript">
//��ͼ
//Ĭ�ϵĻ�ͼ
function drawChart(jobname){
    $.post(
		   "/hudson/statistics/getJobCiData",
		   {'jobname':jobname},
	       function(result){//�������˷��ص��ղ����������
	           //alert(result.data)
               var jsonobj = $.parseJSON(result.data)
                var data = [
                    { label: "�ɹ���",  data: jsonobj.SUCCESS},
                    { label: "ʧ����",  data: jsonobj.FAILURE},
                    { label: "Abort��",  data: jsonobj.ABORTED},
                    { label: "������",  data: jsonobj.BUILDING}
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
 
//���û��л���ʱ����ʾ���ɳɹ���
//���û�ѡ��ͬ�ļ�����������ʱ����ʾ��ͬ�ļ��������ͳ�Ʒ���
function displayChart(){
    var jobname=$('#jobname_select_id option:selected').text()
    drawChart(jobname);
}
  
//�û��ύ���ݲ鿴һ��ʱ��������ĳ����������ļ��ɳɹ���
function displayChartDuretion(){
        var jobname=$('#jobname_select_id option:selected').text()
        $.post(
		   "/hudson/statistics/getJobCiData",
		   {'jobname':jobname},
	       function(result){//�������˷��ص��ղ����������
	           //alert(result.data)
               var jsonobj = $.parseJSON(result.data)
                var data = [
                    { label: "�ɹ���",  data: jsonobj.SUCCESS},
                    { label: "ʧ����",  data: jsonobj.FAILURE},
                    { label: "Abort��",  data: jsonobj.ABORTED},
                    { label: "������",  data: jsonobj.BUILDING}
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

//Ĭ�ϵĻ�ͼ
$(function(){
    var job_name=$('#default_job_name_id').val()
    $.post(
		   "/hudson/statistics/getJobCiData",
		   {'jobname':job_name},
	       function(result){//�������˷��ص��ղ����������
	           //alert(result.data)
               var jsonobj = $.parseJSON(result.data)
                var data = [
                    { label: "�ɹ���",  data: jsonobj.SUCCESS},
                    { label: "ʧ����",  data: jsonobj.FAILURE},
                    { label: "Abort��",  data: jsonobj.ABORTED},
                    { label: "������",  data: jsonobj.BUILDING}
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
