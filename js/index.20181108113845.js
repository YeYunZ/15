(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/xilogo-472.png' : 'images/xilogo-236.png');
$('.js-2').attr('src', (dpi>1) ? 'images/xi-qing-huo-dong-128.png' : 'images/xi-qing-huo-dong-64.png');
$('.js-3').attr('src', (dpi>1) ? 'images/xiao-qing-zhu-zhan-136.png' : 'images/xiao-qing-zhu-zhan-68.png');
$('.js-4').attr('src', (dpi>1) ? 'images/xi-wang-shou-ye-128.png' : 'images/xi-wang-shou-ye-64.png');
$('.js-5').attr('src', (dpi>1) ? 'images/shi-wu-zhou-nian-730.png' : 'images/shi-wu-zhou-nian-365.png');
$('.js-6').attr('src', (dpi>1) ? 'images/03-18-186.png' : 'images/03-18-93.png');
$('.js-7').attr('src', (dpi>1) ? 'images/yi-shu-she-ji-xi15zhou-nian-qing-huo-dong-an-pai-778.png' : 'images/yi-shu-she-ji-xi15zhou-nian-qing-huo-dong-an-pai-389.png');
$('.js-8').attr('src', (dpi>1) ? 'images/15zhou-nian-cheng-guo-zhan-1320.png' : 'images/15zhou-nian-cheng-guo-zhan-660.png');
$('.js-9').attr('src', (dpi>1) ? 'images/wen-jian-38.png' : 'images/wen-jian-19.png');
$('.js-10').attr('src', (dpi>1) ? 'images/de-zhi-38.png' : 'images/de-zhi-19.png');
$('.js-11').attr('src', (dpi>1) ? 'images/shi-jian-32.png' : 'images/shi-jian-16.png');
$('.js-12').attr('src', (dpi>1) ? 'images/jia-yi-bei-7-404.png' : 'images/jia-yi-bei-7-202.png');
$('.js-13').attr('src', (dpi>1) ? 'images/xiao-you-fan-xiao-396.jpg' : 'images/xiao-you-fan-xiao-198.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/xiao-qi-he-zuo-404.jpg' : 'images/xiao-qi-he-zuo-202.jpg');
$('.js-15').attr('src', (dpi>1) ? 'images/yi-chu-hao-xi-404.png' : 'images/yi-chu-hao-xi-202.png');
$('.js-16').attr('src', (dpi>1) ? 'images/xi-you-fen-xiang-hui-396.png' : 'images/xi-you-fen-xiang-hui-198.png');
$('.js-17').attr('src', (dpi>1) ? 'images/jiao-shi-zuo-pin-zhan-404.png' : 'images/jiao-shi-zuo-pin-zhan-202.png');
$('.js-18').attr('src', (dpi>1) ? 'images/shi-wu-nian-you-ni-496.png' : 'images/shi-wu-nian-you-ni-248.png');
$('.js-19').attr('src', (dpi>1) ? 'images/1-418.jpg' : 'images/1-209.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/2-418.jpg' : 'images/2-209.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/3-418.jpg' : 'images/3-209.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/-4-418.jpg' : 'images/-4-209.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/5-418.jpg' : 'images/5-209.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/6-418.jpg' : 'images/6-209.jpg');
$('.js-25').attr('src', (dpi>1) ? 'images/7-418.jpg' : 'images/7-209.jpg');
$('.js-26').attr('src', (dpi>1) ? 'images/8-418.jpg' : 'images/8-209.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/9-418.jpg' : 'images/9-209.jpg');
$('.js-28').attr('src', (dpi>1) ? 'images/10-418.jpg' : 'images/10-209.jpg');
$('.js-29').attr('src', (dpi>1) ? 'images/11-418.jpg' : 'images/11-209.jpg');
$('.js-30').attr('src', (dpi>1) ? 'images/12-418.jpg' : 'images/12-209.jpg');
$('.js-31').attr('src', (dpi>1) ? 'images/13-418.jpg' : 'images/13-209.jpg');
$('.js-32').attr('src', (dpi>1) ? 'images/14-418.jpg' : 'images/14-209.jpg');
$('.js-33').attr('src', (dpi>1) ? 'images/15-418.jpg' : 'images/15-209.jpg');
$('.js-34').attr('src', (dpi>1) ? 'images/16-418.jpg' : 'images/16-209.jpg');
$('.js-35').attr('src', (dpi>1) ? 'images/17-418.jpg' : 'images/17-209.jpg');
$('.js-36').attr('src', (dpi>1) ? 'images/18-418.jpg' : 'images/18-209.jpg');
$('.js-37').attr('src', (dpi>1) ? 'images/19-418.jpg' : 'images/19-209.jpg');
$('.js-38').attr('src', (dpi>1) ? 'images/20-418.jpg' : 'images/20-209.jpg');
$('.js-39').attr('src', (dpi>1) ? 'images/21-418.jpg' : 'images/21-209.jpg');
$('.js-40').attr('src', (dpi>1) ? 'images/22-418.jpg' : 'images/22-209.jpg');
$('.js-41').attr('src', (dpi>1) ? 'images/23-418.jpg' : 'images/23-209.jpg');
$('.js-42').attr('src', (dpi>1) ? 'images/24-418.jpg' : 'images/24-209.jpg');}else{$('.js').attr('src', (dpi>1) ? 'images/xilogo-252.png' : 'images/xilogo-126.png');
$('.js-2').attr('src', (dpi>1) ? 'images/xi-qing-huo-dong-80.png' : 'images/xi-qing-huo-dong-40.png');
$('.js-3').attr('src', (dpi>1) ? 'images/xiao-qing-zhu-zhan-78.png' : 'images/xiao-qing-zhu-zhan-39.png');
$('.js-4').attr('src', (dpi>1) ? 'images/xi-wang-shou-ye-76.png' : 'images/xi-wang-shou-ye-38.png');
$('.js-5').attr('src', (dpi>1) ? 'images/shi-wu-zhou-nian-290.png' : 'images/shi-wu-zhou-nian-145.png');
$('.js-6').attr('src', (dpi>1) ? 'images/03-18-134.png' : 'images/03-18-67.png');
$('.js-7').attr('src', (dpi>1) ? 'images/yi-shu-she-ji-xi15zhou-nian-qing-huo-dong-an-pai-324.png' : 'images/yi-shu-she-ji-xi15zhou-nian-qing-huo-dong-an-pai-162.png');
$('.js-8').attr('src', (dpi>1) ? 'images/15zhou-nian-cheng-guo-zhan-440.png' : 'images/15zhou-nian-cheng-guo-zhan-220.png');
$('.js-9').attr('src', (dpi>1) ? 'images/wen-jian-14.png' : 'images/wen-jian-7.png');
$('.js-10').attr('src', (dpi>1) ? 'images/de-zhi-28.png' : 'images/de-zhi-14.png');
$('.js-11').attr('src', (dpi>1) ? 'images/shi-jian-24.png' : 'images/shi-jian-12.png');
$('.js-12').attr('src', (dpi>1) ? 'images/jia-yi-bei-7-326.png' : 'images/jia-yi-bei-7-163.png');
$('.js-13').attr('src', (dpi>1) ? 'images/xiao-you-fan-xiao-320.jpg' : 'images/xiao-you-fan-xiao-160.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/xiao-qi-he-zuo-312.jpg' : 'images/xiao-qi-he-zuo-156.jpg');
$('.js-15').attr('src', (dpi>1) ? 'images/yi-chu-hao-xi-334.png' : 'images/yi-chu-hao-xi-167.png');
$('.js-16').attr('src', (dpi>1) ? 'images/xi-you-fen-xiang-hui-314.png' : 'images/xi-you-fen-xiang-hui-157.png');
$('.js-17').attr('src', (dpi>1) ? 'images/jiao-shi-zuo-pin-zhan-334.png' : 'images/jiao-shi-zuo-pin-zhan-167.png');
$('.js-18').attr('src', (dpi>1) ? 'images/shi-wu-nian-you-ni-348.png' : 'images/shi-wu-nian-you-ni-174.png');
$('.js-19').attr('src', (dpi>1) ? 'images/1-220.jpg' : 'images/1-110.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/2-216.jpg' : 'images/2-108.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/3-220.jpg' : 'images/3-110.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/-4-218.jpg' : 'images/-4-109.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/5-220.jpg' : 'images/5-110.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/6-224.jpg' : 'images/6-112.jpg');
$('.js-25').attr('src', (dpi>1) ? 'images/7-218.jpg' : 'images/7-109.jpg');
$('.js-26').attr('src', (dpi>1) ? 'images/8-218.jpg' : 'images/8-109.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/9-220.jpg' : 'images/9-110.jpg');
$('.js-28').attr('src', (dpi>1) ? 'images/10-214.jpg' : 'images/10-107.jpg');
$('.js-29').attr('src', (dpi>1) ? 'images/11-220.jpg' : 'images/11-110.jpg');
$('.js-30').attr('src', (dpi>1) ? 'images/12-214.jpg' : 'images/12-107.jpg');
$('.js-31').attr('src', (dpi>1) ? 'images/13-220.jpg' : 'images/13-110.jpg');
$('.js-32').attr('src', (dpi>1) ? 'images/14-222.jpg' : 'images/14-111.jpg');
$('.js-33').attr('src', (dpi>1) ? 'images/15-220.jpg' : 'images/15-110.jpg');
$('.js-34').attr('src', (dpi>1) ? 'images/16-218.jpg' : 'images/16-109.jpg');
$('.js-35').attr('src', (dpi>1) ? 'images/17-220.jpg' : 'images/17-110.jpg');
$('.js-36').attr('src', (dpi>1) ? 'images/18-224.jpg' : 'images/18-112.jpg');
$('.js-37').attr('src', (dpi>1) ? 'images/19-220.jpg' : 'images/19-110.jpg');
$('.js-38').attr('src', (dpi>1) ? 'images/20-222.jpg' : 'images/20-111.jpg');
$('.js-39').attr('src', (dpi>1) ? 'images/21-220.jpg' : 'images/21-110.jpg');
$('.js-40').attr('src', (dpi>1) ? 'images/22-222.jpg' : 'images/22-111.jpg');
$('.js-41').attr('src', (dpi>1) ? 'images/23-220.jpg' : 'images/23-110.jpg');
$('.js-42').attr('src', (dpi>1) ? 'images/24-224.jpg' : 'images/24-112.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-85').mouseenter(function() { $.loadImages('images/1-2272.jpg', function() { }) });
$('.js-85').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-85-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/1-2272.jpg'; } } });
$('.js-86').mouseenter(function() { $.loadImages('images/2-1000.jpg', function() { }) });
$('.js-86').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-86-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2-1000.jpg'; } } });
$('.js-87').mouseenter(function() { $.loadImages('images/3-1296.jpg', function() { }) });
$('.js-87').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-87-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/3-1296.jpg'; } } });
$('.js-88').mouseenter(function() { $.loadImages('images/-4-1584.jpg', function() { }) });
$('.js-88').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-88-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/-4-1584.jpg'; } } });
$('.js-89').mouseenter(function() { $.loadImages('images/5-1584.jpg', function() { }) });
$('.js-89').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-89-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/5-1584.jpg'; } } });
$('.js-90').mouseenter(function() { $.loadImages('images/6-1296.jpg', function() { }) });
$('.js-90').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-90-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/6-1296.jpg'; } } });
$('.js-91').mouseenter(function() { $.loadImages('images/7-1584.jpg', function() { }) });
$('.js-91').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-91-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/7-1584.jpg'; } } });
$('.js-92').mouseenter(function() { $.loadImages('images/8-1296.jpg', function() { }) });
$('.js-92').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-92-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/8-1296.jpg'; } } });
$('.js-93').mouseenter(function() { $.loadImages('images/9-1584.jpg', function() { }) });
$('.js-93').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-93-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/9-1584.jpg'; } } });
$('.js-94').mouseenter(function() { $.loadImages('images/10-1296.jpg', function() { }) });
$('.js-94').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-94-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/10-1296.jpg'; } } });
$('.js-95').mouseenter(function() { $.loadImages('images/11-1701.jpg', function() { }) });
$('.js-95').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-95-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/11-1701.jpg'; } } });
$('.js-96').mouseenter(function() { $.loadImages('images/12-1191.jpg', function() { }) });
$('.js-96').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-96-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/12-1191.jpg'; } } });
$('.js-97').mouseenter(function() { $.loadImages('images/13-1701.jpg', function() { }) });
$('.js-97').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-97-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/13-1701.jpg'; } } });
$('.js-98').mouseenter(function() { $.loadImages('images/14-1176.jpg', function() { }) });
$('.js-98').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-98-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/14-1176.jpg'; } } });
$('.js-99').mouseenter(function() { $.loadImages('images/15-1984.jpg', function() { }) });
$('.js-99').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-99-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/15-1984.jpg'; } } });
$('.js-100').mouseenter(function() { $.loadImages('images/16-1162.jpg', function() { }) });
$('.js-100').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-100-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/16-1162.jpg'; } } });
$('.js-101').mouseenter(function() { $.loadImages('images/17-2000.jpg', function() { }) });
$('.js-101').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-101-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/17-2000.jpg'; } } });
$('.js-102').mouseenter(function() { $.loadImages('images/18-2000.jpg', function() { }) });
$('.js-102').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-102-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/18-2000.jpg'; } } });
$('.js-103').mouseenter(function() { $.loadImages('images/19-1151.jpg', function() { }) });
$('.js-103').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-103-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/19-1151.jpg'; } } });
$('.js-104').mouseenter(function() { $.loadImages('images/20-1151.jpg', function() { }) });
$('.js-104').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-104-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/20-1151.jpg'; } } });
$('.js-105').mouseenter(function() { $.loadImages('images/21-2000.jpg', function() { }) });
$('.js-105').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-105-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/21-2000.jpg'; } } });
$('.js-106').mouseenter(function() { $.loadImages('images/22-2000.jpg', function() { }) });
$('.js-106').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-106-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/22-2000.jpg'; } } });
$('.js-107').mouseenter(function() { $.loadImages('images/23-2000.jpg', function() { }) });
$('.js-107').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-107-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/23-2000.jpg'; } } });
$('.js-108').mouseenter(function() { $.loadImages('images/24-2000.jpg', function() { }) });
$('.js-108').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-108-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/24-2000.jpg'; } } });

});