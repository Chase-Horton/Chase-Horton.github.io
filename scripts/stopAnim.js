function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
$(window).on('load', function(){
    if(getCookie('animation') != 'false'){
        let date = new Date();
        let min = 1;
        date.setTime(date.getTime()+(min*60*1000));
        document.cookie = "animation=false; expires=" + date + '; path=/';
    }

})