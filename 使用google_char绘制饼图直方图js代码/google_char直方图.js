	// Load the Visualization API and the piechart package.
	google.load('visualization', '1.0', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.setOnLoadCallback(drawChart);

    //google chart��ͼ
  function drawChart(jobname) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', '���ɺ�');
    data.addColumn('number', '���ɺ�ʱ(min)');

    //ʹ��jquery��ȥhudson��ĳ�����ɵĳɹ���
    var jsonobj=$.ajax({
	      type:"POST",
	      url:"/hudson/statistics/timetrenddata",
	      data : {'jobname':jobname}, //��ʽ����Ҫ����ʱ��noneûȡ�����ݣ�������ύ�ĸ�ʽ����ȷ
	      success: function(result){//�������˷��ص��ղ����������
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
                        data.addRow([num_tem,time_tem])
                        //alert(i)
                }


                var options = {
                  'title': jobname+'���ɺ�ʱ����',
                  'hAxis': {title: '���ɺ�', titleTextStyle: {color: 'black',fontSize:'11px',fontStyle:'normal'}},
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

    //���û�ѡ��ͬ�ļ�����������ʱ����ʾ��ͬ�ļ��������ͳ�Ʒ���
    function displayChart(){
        var jobname=$('#jobname_select_id option:selected').text()
        drawChart(jobname);
    }

    

	
	 //��ʾҳ��ʱĬ�ϵļ����ʵ���ʾ
  $(function(){
            //ʹ��jquery��ȥhudson��ĳ�����ɵĳɹ���
            var jsonobj=$.ajax({
        	      type:"POST",
        	      url:"/hudson/statistics/timetrenddata",
        	      data : {'jobname':$('#default_job_name_id').val()}, //��ʽ����Ҫ����ʱ��noneûȡ�����ݣ�������ύ�ĸ�ʽ����ȷ
        	      success: function(result){//�������˷��ص��ղ����������
                        //alert(result.data)
                        var data = new google.visualization.DataTable();
                        data.addColumn('string', '���ɺ�');
                        data.addColumn('number', '���ɺ�ʱ(min)');

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
                                data.addRow([num_tem,time_tem])
                                //alert(i)
                        }

                        var options = {
                          title: $('#default_job_name_id').val()+'���ɺ�ʱ����',
                          hAxis: {title: '���ɺ�', titleTextStyle: {color: 'black',fontSize:'11px',fontStyle:'normal'}},
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