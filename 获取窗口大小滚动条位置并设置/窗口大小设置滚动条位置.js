 //��������
    /*function cacheData(comms){
       var commline="";
       for( i=1;i<(parseInt(comms)+1);i++){
            commline+=$("#command_"+i)[0].value+"@"
       }
	   $.post(
		   "/hudson/exist/cachedata",
		   {'description':$("#descrip_id")[0].value,'TimerTrigger':$("#trigger_id")[0].value,'customWorkspace':$("#work_id")[0].value,'SourcePool':$('#source_id')[0].value,'commline':commline},
	       function(result){//�������˷��ص��ղ����������
			  // �����κβ���
              //alert(result)
	      }
	   );
   }*/

    //��ȡ���ڵĴ�С
    /*function GetPageSize() {
      var scrW, scrH;
      if(window.innerHeight && window.scrollMaxY) {
        // Mozilla
        scrW = window.innerWidth + window.scrollMaxX;
        scrH = window.innerHeight + window.scrollMaxY;
      } else if(document.body.scrollHeight > document.body.offsetHeight){
        // all but IE Mac
        scrW = document.body.scrollWidth;
        scrH = document.body.scrollHeight;
      } else if(document.body) { // IE Mac
        scrW = document.body.offsetWidth;
        scrH = document.body.offsetHeight;
      }

      var winW, winH;
      if(window.innerHeight) { // all except IE
        winW = window.innerWidth;
        winH = window.innerHeight;
      } else if (document.documentElement
        && document.documentElement.clientHeight) {
        // IE 6 Strict Mode
        winW = document.documentElement.clientWidth;
        winH = document.documentElement.clientHeight;
      } else if (document.body) { // other
        winW = document.body.clientWidth;
        winH = document.body.clientHeight;
      }

      // for small pages with total size less then the viewport
      var pageW = (scrW<winW) ? winW : scrW;
      var pageH = (scrH<winH) ? winH : scrH;

      return {PageW:pageW, PageH:pageH, WinW:winW, WinH:winH};
    }*/

    //��ȡ��������λ��
    /*function GetPageScroll() {
      var x, y;
      if(window.pageYOffset) {
        // all except IE
        y = window.pageYOffset;
        x = window.pageXOffset;
      } else if(document.documentElement
        && document.documentElement.scrollTop) {
        // IE 6 Strict
        y = document.documentElement.scrollTop;
        x = document.documentElement.scrollLeft;
      } else if(document.body) {
        // all other IE
        y = document.body.scrollTop;
        x = document.body.scrollLeft;
      }
      return {X:x, Y:y};
    }*/



   //���Ӳ���
   /*function addStep(type,para,commnum){
       cacheData(commnum);
       $.post(
		   "/hudson/exist/add",
		   {'type':type,'stepnum':para},
	       function(result){//�������˷��ص��ղ����������
	           //alert(result.addok);
               if(result.addok == 'ok' ){
			     location.replace("/hudson/exist/display");
               }else{
                 alert(result.addok);
               }
			  // location.reload("/hudson/template/display");
	      }
	   );
   }*/

    //���ô������¼��ص�ʱ���λ��
    /*$(function(){
        var wt = GetPageSize();
        window.scrollTo(wt.PageW, wt.PageH);
        //alert('set')
    })*/

   //ɾ������
   /*function deleteStep(para){
	   $.ajax({
		      type:"POST",
		      url:"/hudson/exist/delete",
		      data : {'stepnum':para}, //��ʽ����Ҫ����ʱ��noneûȡ�����ݣ�������ύ�ĸ�ʽ����ȷ
		      success: function(result){//�������˷��ص��ղ����������
		           //alert(result.deleteok);
				   location.replace("/hudson/exist/display");
				   // location.reload("/hudson/template/display");
		      },
		    dataType : 'json',
		    contentType : 'application/json'
		    });
   }*/