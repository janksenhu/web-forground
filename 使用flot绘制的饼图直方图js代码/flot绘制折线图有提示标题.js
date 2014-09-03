<script type="text/javascript" src="/djproject/media/js/jquery-ui-1.8.16/js/jquery-1.6.2.min.js" charset="utf-8"></script>

<!--flot画图-->
<script language="javascript" type="text/javascript" src="/djproject/media/js/flot/jquery.flot.js"></script>
<script language="javascript" type="text/javascript" src="/djproject/media/js/flot/jquery.flot.pie.js"></script>


<script type="text/javascript">

	//当用户选择不同的集成任务名的时候显示不同的集成任务的统计分析
    function displayChart(){
        var jobname=$('#jobname_select_id option:selected').text()
        drawChart(jobname);
    }

  //绘图
  function drawChart(jobname) {
  		var options = {
        lines: { show: true },
        points: { show: true },
        xaxis: { tickDecimals: 0, tickSize: 1 },
        grid: { hoverable: true, clickable: true }, // 是否可以悬浮，是否可以点击  
        //yaxis: { min: 0, }, // Y 轴 的最大值和最小值  
        //xaxis: { min: 1, }      // X 轴 的最大值和最小值  ,如果有这一选项X轴变成浮点数
    };
    var data1 = [];
    var placeholder = $("#chart_div");
    $.plot(placeholder, data1, options);
    var jsonobj=$.ajax({
        	      type:"POST",
        	      url:"/hudson/statistics/timetrenddata",
        	      data : {'jobname':jobname}, //格式很重要，有时候报none没取到数据，差不多是提交的格式不正确
        	      success: function(result){//服务器端返回到刚才请求的数据
                       // alert(result.data)
                 

                      if(result.data!='wrong'){
                        var dataObj=eval("("+result.data+")");//转换为json对象
                        //alert(dataObj.num_time.length);//输出root的子对象数量

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
						$.plot(placeholder,[{ data:data1, label: "耗时"}], options);
                      }
        	      },
        	    dataType : 'json',
        	    contentType : 'application/json'
             });
             
    var previousPoint = null;  
    // 邦定事件  
    $("#chart_div").bind("plothover", function (event, pos, item) {       
        if (item) {  
            if (previousPoint != item.dataIndex) {  
                previousPoint = item.dataIndex;                      
                $("#tooltip").remove();  
                var x = item.datapoint[0].toFixed(2),  
                    y = item.datapoint[1].toFixed(2);                      
                showTooltip(item.pageX, item.pageY,"第"+x+"次集成耗时 "+y+"min");// 悬浮点时提示的内容    
            }  
        }else {  
            $("#tooltip").remove();  
            previousPoint = null;  
        }            
    }); 
    
    // 悬浮点时进行提示  
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
  
 

//我们使用折线图
$(function () {
    var options = {
        lines: { show: true },
        points: { show: true },
        xaxis: { tickDecimals: 0, tickSize: 1 },
        grid: { hoverable: true, clickable: true }, // 是否可以悬浮，是否可以点击  
        //yaxis: { min: 0, }, // Y 轴 的最大值和最小值  
        //xaxis: { min: 1, }      // X 轴 的最大值和最小值  ,如果有这一选项X轴变成浮点数
    };
    var data1 = [];
    var placeholder = $("#chart_div");
    $.plot(placeholder, data1, options);
    var jsonobj=$.ajax({
        	      type:"POST",
        	      url:"/hudson/statistics/timetrenddata",
        	      data : {'jobname':$('#default_job_name_id').val()}, //格式很重要，有时候报none没取到数据，差不多是提交的格式不正确
        	      success: function(result){//服务器端返回到刚才请求的数据
                       // alert(result.data)
                 

                      if(result.data!='wrong'){
                        var dataObj=eval("("+result.data+")");//转换为json对象
                        //alert(dataObj.num_time.length);//输出root的子对象数量

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
						$.plot(placeholder,[{ data:data1, label: "耗时"}], options);
                      }
        	      },
        	    dataType : 'json',
        	    contentType : 'application/json'
             });
             
    var previousPoint = null;  
    // 邦定事件  
    $("#chart_div").bind("plothover", function (event, pos, item) {       
        if (item) {  
            if (previousPoint != item.dataIndex) {  
                previousPoint = item.dataIndex;                      
                $("#tooltip").remove();  
                var x = item.datapoint[0].toFixed(2),  
                    y = item.datapoint[1].toFixed(2);                      
                showTooltip(item.pageX, item.pageY,"第"+x+"次集成耗时 "+y+"min");// 悬浮点时提示的内容    
            }  
        }else {  
            $("#tooltip").remove();  
            previousPoint = null;  
        }            
    }); 
    
    // 悬浮点时进行提示  
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
