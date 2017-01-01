$(document).ready(function($) {
  // General accordion click toggle
  $('#accordion').find('.accordion-head').click(function(){

    //Expand or collapse this panel
    $(this).next().slideToggle('medium');

    //Hide the other panels
    $(".accordion-content").not($(this).next()).slideUp('medium');

  });
  
  // Check for location hash
  if(location.hash) {
    
    // Just checking
    console.log(location.hash);
    
    // Remove the first '#' character
    var hash = location.hash.substr(1);
    
    // Expand element 
    if($('#'+hash).length) {
      $('#'+hash)
        .next()
          .slideDown()
          .end()
        .siblings('h4')
          .next()
          .slideUp();
    }
  }
});