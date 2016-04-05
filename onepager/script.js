$(document).ready(function(){

  // Hide div 2 by default
  $('#div_2').hide();
  $('#div_3').hide();
  $('#div_4').hide();

  $('#homebt').click(function(){ 
      
      
	  $('#div_2').hide();
	  $('#div_3').hide();
	  $('#div_4').hide();
	  $('#div_1').show();
  }); 
  
  $('#lebenslaufbt').click(function(){ 
      $('#div_1').hide();
	  $('#div_3').hide();
	  $('#div_4').hide();
	  $('#div_2').show();
  });

  
  
  $('#hobbysbt').click(function(){ 
      
      $('#div_1').hide();
	  $('#div_2').hide();
	  $('#div_4').hide();
	  $('#div_3').show();
  }); 
  
  $('#skillsbt').click(function(){ 
      
      $('#div_1').hide();
	  $('#div_2').hide();
	  $('#div_3').hide();
	  $('#div_4').show();
  }); 
  
	$('#barrel1').click(function() {
    $('body').addClass('roll');
	});
	
	$('#barrel2').click(function() {
	$('body').removeClass('roll');
	});
});