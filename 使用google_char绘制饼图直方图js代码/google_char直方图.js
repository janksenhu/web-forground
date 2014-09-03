	// Load the Visualization API and the piechart package.
	google.load('visualization', '1.0', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.setOnLoadCallback(drawChart);

    //google chart绘图
  function drawChart(jobname) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', '集成号');
    data.addColumn('number', '集成耗时(min)');

    //使用jquery拉去hudson的某个集成的成功率
    var jsonobj=$.ajax({
	      type:"POST",
	      url:"/hudson/statistics/timetrenddata",
	      data : {'jobname':jobname}, //格式很重要，有时候报none没取到数据，差不多是提交的格式不正确
	      success: function(result){//服务器端返回到刚才请求的数据
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
                        data.addRow([num_tem,time_tem])
                        //alert(i)
                }


                var options = {
                  'title': jobname+'集成耗时趋势',
                  'hAxis': {title: '集成号', titleTextStyle: {color: 'black',fontSize:'11px',fontStyle:'normal'}},
                  'backgroundColor':'transparent'
                };

                var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
                chart.draw(data, options);

              }else{
                ;
              }
	      },
	    dataType : 'json',
	    contentType : 'application/json'
     });
  }

    //当用户选择不同的集成任务名的时候显示不同的集成任务的统计分析
    function displayChart(){
        var jobname=$('#jobname_select_id option:selected').text()
        drawChart(jobname);
    }

    

	
	 //显示页面时默认的集成率的显示
  $(function(){
            //使用jquery拉去hudson的某个集成的成功率
            var jsonobj=$.ajax({
        	      type:"POST",
        	      url:"/hudson/statistics/timetrenddata",
        	      data : {'jobname':$('#default_job_name_id').val()}, //格式很重要，有时候报none没取到数据，差不多是提交的格式不正确
        	      success: function(result){//服务器端返回到刚才请求的数据
                        //alert(result.data)
                        var data = new google.visualization.DataTable();
                        data.addColumn('string', '集成号');
                        data.addColumn('number', '集成耗时(min)');

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
                                data.addRow([num_tem,time_tem])
                                //alert(i)
                        }

                        var options = {
                          title: $('#default_job_name_id').val()+'集成耗时趋势',
                          hAxis: {title: '集成号', titleTextStyle: {color: 'black',fontSize:'11px',fontStyle:'normal'}},
                          'backgroundColor':'transparent'
                        };

                        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
                        chart.draw(data, options);

                      }else{
                        ;
                      }
        	      },
        	    dataType : 'json',
        	    contentType : 'application/json'
             });
  })