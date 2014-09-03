	// Load the Visualization API and the piechart package.
  google.load('visualization', '1.0', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.setOnLoadCallback(drawChart);

    //google chart绘图
  function drawChart(jobname) {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');

    //使用jquery拉去hudson的某个集成的成功率
    var jsonobj=$.ajax({
	      type:"POST",
	      url:"/hudson/statistics/getJobCiData",
	      data : {'jobname':jobname}, //格式很重要，有时候报none没取到数据，差不多是提交的格式不正确
	      success: function(result){//服务器端返回到刚才请求的数据
              if(result.data!='wrong'){
                var jsonobj = $.parseJSON(result.data)
                data.addRows([
                  ['成功率', jsonobj.SUCCESS],
                  ['失败率', jsonobj.FAILURE],
                  ['Abort率', jsonobj.ABORTED]
                ]);
                var options = {'backgroundColor':'transparent','title':jobname+"任务集成成功率统计图",'titleTextStyle':{color: 'black',textAlign:'center',fontSize:'13'},'width':400,'height':300};

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
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

    //用户提交数据查看一个时间段里面的某个集成任务的集成成功率
    function displayChartDuretion(){
            var jobname=$('#jobname_select_id option:selected').text()
             // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');

            //使用jquery拉去hudson的某个集成的成功率
            var jsonobj=$.ajax({
        	      type:"POST",
        	      url:"/hudson/statistics/getJobCiDataDuretion",
        	      data : {'jobname':jobname,'begintime':$('#input_begin_time_id').val(),'endtime':$('#input_end_time_id').val()}, //格式很重要，有时候报none没取到数据，差不多是提交的格式不正确
        	      success: function(result){//服务器端返回到刚才请求的数据
                      if(result.data!='wrong'){
                        var jsonobj = $.parseJSON(result.data)
                        data.addRows([
                          ['成功率', jsonobj.SUCCESS],
                          ['失败率', jsonobj.FAILURE],
                          ['Abort率', jsonobj.ABORTED]
                        ]);
                        var options = {'backgroundColor':'transparent','title':jobname+"任务集成成功率统计图",'titleTextStyle':{color: 'black',textAlign:'center',fontSize:'13'},'width':400,'height':300};

                        // Instantiate and draw our chart, passing in some options.
                        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
                        chart.draw(data, options);
                      }else{
                        ;
                      }
        	      },
        	    dataType : 'json',
        	    contentType : 'application/json'
             });
    }

	//显示页面时默认的集成率的显示
  $(function(){
            //alert($('#default_job_name_id').val());
            var jobname=$('#default_job_name_id').val();
           // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');

            //使用jquery拉去hudson的某个集成的成功率
            var jsonobj=$.ajax({
        	      type:"POST",
        	      url:"/hudson/statistics/getJobCiData",
        	      data : {'jobname':jobname}, //格式很重要，有时候报none没取到数据，差不多是提交的格式不正确
        	      success: function(result){//服务器端返回到刚才请求的数据
                      //alert(result.data)
                      if(result.data!='wrong'){

                        var jsonobj = $.parseJSON(result.data)
                        data.addRows([
                          ['成功率', jsonobj.SUCCESS],
                          ['失败率', jsonobj.FAILURE],
                          ['Abort率', jsonobj.ABORTED]
                        ]);
                        var options = {'backgroundColor':'transparent','title':jobname+"任务集成成功率统计图",'titleTextStyle':{color: 'black',textAlign:'center',fontSize:'13'},'width':400,'height':300};

                        // Instantiate and draw our chart, passing in some options.
                        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
                        chart.draw(data, options);
                      }else{
                        ;
                      }
        	      },
        	    dataType : 'json',
        	    contentType : 'application/json'
             });
  })