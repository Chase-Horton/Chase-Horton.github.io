//function to getCookie from https://www.w3schools.com/js/js_cookies.asp
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
$(window).on('load', () =>{
    $('a[href*="' + location.pathname.substring(location.pathname.lastIndexOf('/') + 1) + '"]').addClass('current');
    if(getCookie('animation') == 'false'){
        console.log('Already Animated')
        $('div.navBar div').removeAttr('id');
        $('header').attr('id', 'navBar');
    }
});