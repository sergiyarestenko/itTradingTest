addGradientClass();

function getInternetExplorerVersion()
{
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    else if (navigator.appName == 'Netscape')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    return rv;
}

function addGradientClass() {
    var gradientSpan = $('.gradient');
    if (getInternetExplorerVersion() !== -1) {
        $(gradientSpan).addClass('gradient-ie');

    }else{
        $(gradientSpan).addClass('gradient-other');
    }
}


$('.agreement').on('click',function(){
   $('.container-all').hide(0);

$('.docs-agreement').show('fast');
})
$('.risks').on('click',function(){
   $('.container-all').hide(0);

$('.docs-risks').show('fast');
})
$('.confidentiality').on('click',function(){
   $('.container-all').hide(0);

$('.docs-confidentiality').show('fast');
})
$('.docs-button').on('click',function(){
   $('.container-all').show(0);
   $('.docs').hide('slow');
})
$('#form1-button').on('click',function(){
  $mail = $('#form1-email');
  $mail.parent().removeClass('incorrect');
  if(!(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm.test($mail.val()))||($.trim($mail.val()) == "")){
    $mail.parent().addClass('incorrect');
  }else{
    console.log("$('#form1').submit()");//предполягаю, что пароль проверяется на сервере
  }
})
$('#form1-email').on('mouseover',function(){
  $('#form1-email').parent().removeClass('incorrect');
})
