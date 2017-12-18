//**************** navbar color will change after the scroll ***************

		$(window).scroll(function(){
	            if($(window).scrollTop() >100 /*or $(window).height()*/){
	                $(".navbar-fixed-top").addClass('past-main');   
	            }
	        else{     
	          $(".navbar-fixed-top").removeClass('past-main');
        	  }
        });

