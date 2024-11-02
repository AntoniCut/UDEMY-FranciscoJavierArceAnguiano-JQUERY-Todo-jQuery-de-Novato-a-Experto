function termina(){
		$("#abajo, #arriba").hide();
		$("#responsive").fadeOut(1000).fadeIn(1000);
		//
		$('#diseno, #desarrollo, #marqueting, #decoracion, #impresion, #feis, #twitter, #google').hover(function() {
			$(this).css('cursor','pointer');
		}, function() {
			$(this).fadeTo(500,1.0);
		});
		$("#feis").click(function(){
			//window.open("#", '_blank');
			return false;	
		});
		$("#twitter").click(function(){
			//window.open("#", '_blank');
			return false;	
		});	
		$("#google").click(function(){
			//window.open("#", '_blank');
			return false;	
		});
		$("#diseno").click(function(){
			//window.open("#", '_self');
			return false;	
		});
		$("#desarrollo").click(function(){
			//window.open("#", '_self');
			return false;	
		});
		$("#marqueting").click(function(){
			//window.open("#l", '_self');
			return false;	
		});
		$("#decoracion").click(function(){
			//window.open("#", '_self');
			return false;	
		});
		$("#impresion").click(function(){
			//window.open("#", '_self');
			return false;	
		});
	}