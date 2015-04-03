(function(){
  var carbonad_script = document.createElement("script");
  carbonad_script.type = 'text/javascript';
  carbonad_script.async = true;
  carbonad_script.id = "_carbonads_js";
  carbonad_script.src = "//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=callmenickcom";
  document.body.appendChild(carbonad_script);

  var ad;

  var interval = window.setInterval( function() {
    ad = document.getElementById("carbonads");
    if ( ad !== null ) {
      clearInterval(interval);
      adClose();
    }
  }, 100 );

  function adClose() {
    var close = document.createElement("a");
    close.className = "carbonad__close";
    close.innerHTML = "x close";
    close.setAttribute("href", "#");
    ad.appendChild(close);

    close.addEventListener( "click", function(e) {
      e.preventDefault();
      ad.parentNode.removeChild(ad);
    })
  }

})();