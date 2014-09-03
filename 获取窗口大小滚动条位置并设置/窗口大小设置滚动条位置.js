 //缓存数据
    /*function cacheData(comms){
       var commline="";
       for( i=1;i<(parseInt(comms)+1);i++){
            commline+=$("#command_"+i)[0].value+"@"
       }
	   $.post(
		   "/hudson/exist/cachedata",
		   {'description':$("#descrip_id")[0].value,'TimerTrigger':$("#trigger_id")[0].value,'customWorkspace':$("#work_id")[0].value,'SourcePool':$('#source_id')[0].value,'commline':commline},
	       function(result){//服务器端返回到刚才请求的数据
			  // 不做任何操作
              //alert(result)
	      }
	   );
   }*/

    //获取窗口的大小
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

    //获取滚动条的位置
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



   //增加步骤
   /*function addStep(type,para,commnum){
       cacheData(commnum);
       $.post(
		   "/hudson/exist/add",
		   {'type':type,'stepnum':para},
	       function(result){//服务器端返回到刚才请求的数据
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

    //设置窗体重新加载的时候的位置
    /*$(function(){
        var wt = GetPageSize();
        window.scrollTo(wt.PageW, wt.PageH);
        //alert('set')
    })*/

   //删除步骤
   /*function deleteStep(para){
	   $.ajax({
		      type:"POST",
		      url:"/hudson/exist/delete",
		      data : {'stepnum':para}, //格式很重要，有时候报none没取到数据，差不多是提交的格式不正确
		      success: function(result){//服务器端返回到刚才请求的数据
		           //alert(result.deleteok);
				   location.replace("/hudson/exist/display");
				   // location.reload("/hudson/template/display");
		      },
		    dataType : 'json',
		    contentType : 'application/json'
		    });
   }*/