<script type="text/javascript" src="/djproject/media/js/jquery-ui-1.8.16/js/jquery-1.6.2.min.js" charset="utf-8"></script>

<!--flot��ͼ-->
<script language="javascript" type="text/javascript" src="/djproject/media/js/flot/jquery.flot.js"></script>
<script language="javascript" type="text/javascript" src="/djproject/media/js/flot/jquery.flot.pie.js"></script>


<script type="text/javascript">

	//���û�ѡ��ͬ�ļ�����������ʱ����ʾ��ͬ�ļ��������ͳ�Ʒ���
    function displayChart(){
        var jobname=$('#jobname_select_id option:selected').text()
        drawChart(jobname);
    }

  //��ͼ
  function drawChart(jobname) {
  		var options = {
        lines: { show: true },
        points: { show: true },
        xaxis: { tickDecimals: 0, tickSize: 1 },
        grid: { hoverable: true, clickable: true }, // �Ƿ�����������Ƿ���Ե��  
        //yaxis: { min: 0, }, // Y �� �����ֵ����Сֵ  
        //xaxis: { min: 1, }      // X �� �����ֵ����Сֵ  ,�������һѡ��X���ɸ�����
    };
    var data1 = [];
    var placeholder = $("#chart_div");
    $.plot(placeholder, data1, options);
    var jsonobj=$.ajax({
        	      type:"POST",
        	      url:"/hudson/statistics/timetrenddata",
        	      data : {'jobname':jobname}, //��ʽ����Ҫ����ʱ��noneûȡ�����ݣ�������ύ�ĸ�ʽ����ȷ
        	      success: function(result){//�������˷��ص��ղ����������
                       // alert(result.data)
                 

                      if(result.data!='wrong'){
                        var dataObj=eval("("+result.data+")");//ת��Ϊjson����
                        //alert(dataObj.num_time.length);//���root���Ӷ�������

                        for(i=0;i<dataObj.num_time.length;i++){
                                //alert((dataObj.num_time[i]).num)
                                var num_tem=(dataObj.num_time[i]).num
                                num_tem=num_tem.toString()
                                var time_tem=(dataObj.num_time[i]).time
                                time_tem=parseFloat(time_tem)
                                //alert(time_tem)
                                data1.push([num_tem,time_tem])
                                //alert(i)
                        }
						$.plot(placeholder,[{ data:data1, label: "��ʱ"}], options);
                      }
        	      },
        	    dataType : 'json',
        	    contentType : 'application/json'
             });
             
    var previousPoint = null;  
    // ��¼�  
    $("#chart_div").bind("plothover", function (event, pos, item) {       
        if (item) {  
            if (previousPoint != item.dataIndex) {  
                previousPoint = item.dataIndex;                      
                $("#tooltip").remove();  
                var x = item.datapoint[0].toFixed(2),  
                    y = item.datapoint[1].toFixed(2);                      
                showTooltip(item.pageX, item.pageY,"��"+x+"�μ��ɺ�ʱ "+y+"min");// ������ʱ��ʾ������    
            }  
        }else {  
            $("#tooltip").remove();  
            previousPoint = null;  
        }            
    }); 
    
    // ������ʱ������ʾ  
    function showTooltip(x, y, contents) {  
        $('<div id="tooltip">' + contents + '</div>').css( {  
            position: 'absolute',  
            display: 'none',  
            top: y + 5,  
            left: x + 5,  
            border: '1px solid #fdd',  
            padding: '2px',  
            'background-color': '#fee',  
            opacity: 0.80
        }).appendTo("body").fadeIn(200);  
    }  
}
  
 

//����ʹ������ͼ
$(function () {
    var options = {
        lines: { show: true },
        points: { show: true },
        xaxis: { tickDecimals: 0, tickSize: 1 },
        grid: { hoverable: true, clickable: true }, // �Ƿ�����������Ƿ���Ե��  
        //yaxis: { min: 0, }, // Y �� �����ֵ����Сֵ  
        //xaxis: { min: 1, }      // X �� �����ֵ����Сֵ  ,�������һѡ��X���ɸ�����
    };
    var data1 = [];
    var placeholder = $("#chart_div");
    $.plot(placeholder, data1, options);
    var jsonobj=$.ajax({
        	      type:"POST",
        	      url:"/hudson/statistics/timetrenddata",
        	      data : {'jobname':$('#default_job_name_id').val()}, //��ʽ����Ҫ����ʱ��noneûȡ�����ݣ�������ύ�ĸ�ʽ����ȷ
        	      success: function(result){//�������˷��ص��ղ����������
                       // alert(result.data)
                 

                      if(result.data!='wrong'){
                        var dataObj=eval("("+result.data+")");//ת��Ϊjson����
                        //alert(dataObj.num_time.length);//���root���Ӷ�������

                        for(i=0;i<dataObj.num_time.length;i++){
                                //alert((dataObj.num_time[i]).num)
                                var num_tem=(dataObj.num_time[i]).num
                                num_tem=num_tem.toString()
                                var time_tem=(dataObj.num_time[i]).time
                                time_tem=parseFloat(time_tem)
                                //alert(time_tem)
                                data1.push([num_tem,time_tem])
                                //alert(i)
                        }
						$.plot(placeholder,[{ data:data1, label: "��ʱ"}], options);
                      }
        	      },
        	    dataType : 'json',
        	    contentType : 'application/json'
             });
             
    var previousPoint = null;  
    // ��¼�  
    $("#chart_div").bind("plothover", function (event, pos, item) {       
        if (item) {  
            if (previousPoint != item.dataIndex) {  
                previousPoint = item.dataIndex;                      
                $("#tooltip").remove();  
                var x = item.datapoint[0].toFixed(2),  
                    y = item.datapoint[1].toFixed(2);                      
                showTooltip(item.pageX, item.pageY,"��"+x+"�μ��ɺ�ʱ "+y+"min");// ������ʱ��ʾ������    
            }  
        }else {  
            $("#tooltip").remove();  
            previousPoint = null;  
        }            
    }); 
    
    // ������ʱ������ʾ  
    function showTooltip(x, y, contents) {  
        $('<div id="tooltip">' + contents + '</div>').css( {  
            position: 'absolute',  
            display: 'none',  
            top: y + 5,  
            left: x + 5,  
            border: '1px solid #fdd',  
            padding: '2px',  
            'background-color': '#fee',  
            opacity: 0.80
        }).appendTo("body").fadeIn(200);  
    }  
     
})


</script>
