	// Load the Visualization API and the piechart package.
  google.load('visualization', '1.0', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.setOnLoadCallback(drawChart);

    //google chart��ͼ
  function drawChart(jobname) {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');

    //ʹ��jquery��ȥhudson��ĳ�����ɵĳɹ���
    var jsonobj=$.ajax({
	      type:"POST",
	      url:"/hudson/statistics/getJobCiData",
	      data : {'jobname':jobname}, //��ʽ����Ҫ����ʱ��noneûȡ�����ݣ�������ύ�ĸ�ʽ����ȷ
	      success: function(result){//�������˷��ص��ղ����������
              if(result.data!='wrong'){
                var jsonobj = $.parseJSON(result.data)
                data.addRows([
                  ['�ɹ���', jsonobj.SUCCESS],
                  ['ʧ����', jsonobj.FAILURE],
                  ['Abort��', jsonobj.ABORTED]
                ]);
                var options = {'backgroundColor':'transparent','title':jobname+"���񼯳ɳɹ���ͳ��ͼ",'titleTextStyle':{color: 'black',textAlign:'center',fontSize:'13'},'width':400,'height':300};

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

    //���û�ѡ��ͬ�ļ�����������ʱ����ʾ��ͬ�ļ��������ͳ�Ʒ���
    function displayChart(){
        var jobname=$('#jobname_select_id option:selected').text()
        drawChart(jobname);
    }

    //�û��ύ���ݲ鿴һ��ʱ��������ĳ����������ļ��ɳɹ���
    function displayChartDuretion(){
            var jobname=$('#jobname_select_id option:selected').text()
             // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');

            //ʹ��jquery��ȥhudson��ĳ�����ɵĳɹ���
            var jsonobj=$.ajax({
        	      type:"POST",
        	      url:"/hudson/statistics/getJobCiDataDuretion",
        	      data : {'jobname':jobname,'begintime':$('#input_begin_time_id').val(),'endtime':$('#input_end_time_id').val()}, //��ʽ����Ҫ����ʱ��noneûȡ�����ݣ�������ύ�ĸ�ʽ����ȷ
        	      success: function(result){//�������˷��ص��ղ����������
                      if(result.data!='wrong'){
                        var jsonobj = $.parseJSON(result.data)
                        data.addRows([
                          ['�ɹ���', jsonobj.SUCCESS],
                          ['ʧ����', jsonobj.FAILURE],
                          ['Abort��', jsonobj.ABORTED]
                        ]);
                        var options = {'backgroundColor':'transparent','title':jobname+"���񼯳ɳɹ���ͳ��ͼ",'titleTextStyle':{color: 'black',textAlign:'center',fontSize:'13'},'width':400,'height':300};

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

	//��ʾҳ��ʱĬ�ϵļ����ʵ���ʾ
  $(function(){
            //alert($('#default_job_name_id').val());
            var jobname=$('#default_job_name_id').val();
           // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');

            //ʹ��jquery��ȥhudson��ĳ�����ɵĳɹ���
            var jsonobj=$.ajax({
        	      type:"POST",
        	      url:"/hudson/statistics/getJobCiData",
        	      data : {'jobname':jobname}, //��ʽ����Ҫ����ʱ��noneûȡ�����ݣ�������ύ�ĸ�ʽ����ȷ
        	      success: function(result){//�������˷��ص��ղ����������
                      //alert(result.data)
                      if(result.data!='wrong'){

                        var jsonobj = $.parseJSON(result.data)
                        data.addRows([
                          ['�ɹ���', jsonobj.SUCCESS],
                          ['ʧ����', jsonobj.FAILURE],
                          ['Abort��', jsonobj.ABORTED]
                        ]);
                        var options = {'backgroundColor':'transparent','title':jobname+"���񼯳ɳɹ���ͳ��ͼ",'titleTextStyle':{color: 'black',textAlign:'center',fontSize:'13'},'width':400,'height':300};

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