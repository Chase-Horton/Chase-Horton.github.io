$(window).on('load', () =>{
    $('a[href*="' + location.pathname.substring(location.pathname.lastIndexOf('/') + 1) + '"]').addClass('current')
});