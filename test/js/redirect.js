
function mobile_detect(mobile,tablet,mobile_redirect,tablet_redirect) {
 var ismobile = (/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase()));
 var istablet = (/ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase()));

 if (ismobile && mobile==true) {
 window.location.href = 'https://lrylander.github.io/linnearylander/mobile/'
 } else if (istablet && tablet==true) {
 window.location.href = 'https://lrylander.github.io/linnearylander/mobile/'
 }
}