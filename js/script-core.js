var $=jQuery.noConflict();$(document).on("ready",function(t){"use strict";t("#search .trigger").on("click",function(){t(".search-bar").animate({width:"toggle"},500)}),t(function(){t(".scroll").on("click",function(e){var a=t(this),i=t(".navbar-collapse").outerHeight();t("html, body").stop().animate({scrollTop:t(a.attr("href")).offset().top-i+"px"},1200,"easeInOutExpo"),e.preventDefault()})}),t(".nav li a").on("click",function(e){if(!t(this).parent("li").hasClass("active")){var a=t(this).attr("href");t(this).parents("ul").children("li").removeClass("active"),t(this).parent().addClass("active"),t(a).fadeIn()}}),t(".nav a").on("click",function(){t(".navbar-toggle").on("click")}),t(window).load(function(){t("#status").fadeOut(),t("#preloader").delay(350).fadeOut("slow"),t("body").delay(350).css({overflow:"visible"})});var e=t(window),a=t(".filter-container"),i=t(".filter");try{a.imagesLoaded(function(){a.show(),a.isotope({filter:"*",layoutMode:"masonry",animationOptions:{duration:750,easing:"linear"}})})}catch(n){}e.on("resize",function(){var t=i.find("a.active").attr("data-filter");try{a.isotope({filter:t,animationOptions:{duration:750,easing:"linear",queue:!1}})}catch(e){}return!1}),i.find("a").on("click",function(){var e=t(this).attr("data-filter");try{a.isotope({filter:e,animationOptions:{duration:750,easing:"linear",queue:!1}})}catch(i){}return!1});var o=t(".filter a");o.on("click",function(){var e=t(this);e.hasClass("active")||(o.removeClass("active"),e.addClass("active"))}),t(document).on("ready",function(t){return t(".accordion-header").toggleClass("inactive-header"),t(".accordion-header").first().toggleClass("active-header").toggleClass("inactive-header"),t(".accordion-content").first().slideDown().toggleClass("open-content"),t(".accordion-header").on("click",function(){t(this).is(".inactive-header")?(t(".active-header").toggleClass("active-header").toggleClass("inactive-header").next().slideToggle().toggleClass("open-content"),t(this).toggleClass("active-header").toggleClass("inactive-header"),t(this).next().slideToggle().toggleClass("open-content")):(t(this).toggleClass("active-header").toggleClass("inactive-header"),t(this).next().slideToggle().toggleClass("open-content"))}),!1});try{t.browserSelector(),t("html").hasClass("chrome")&&t.smoothScroll()}catch(s){}try{t(".bxslider").bxSlider({mode:"horizontal",slideMargin:0,auto:!0})}catch(r){}try{t("a[data-fancybox-group=group]").fancybox({transitionIn:"none",transitionOut:"none",titlePosition:"over",titleFormat:function(t,e,a,i){return'<span id="fancybox-title-over">Image '+(a+1)+" / "+e.length+(t.length?" &nbsp; "+t:"")+"</span>"}})}catch(c){}try{t(".animated")[0]&&t(".animated").css("opacity","0"),t(".triggerAnimation").waypoint(function(){var e=t(this).attr("data-animate");t(this).css("opacity",""),t(this).addClass("animated "+e)},{offset:"80%",triggerOnce:!0})}catch(l){}t(".tab-links li a").on("click",function(e){if(e.preventDefault(),!t(this).parent("li").hasClass("active")){var a=t(this).attr("href");t(this).parents("ul").children("li").removeClass("active"),t(this).parent().addClass("active"),t(".tabs-widget > div").hide(),t(a).fadeIn()}});try{t(".flexslider").flexslider({animation:"swing",slideshowSpeed:4e3})}catch(d){}var h={lat:"41.8744661",lon:"-87.6614312"};try{t(".map").gmap3({infowindow:{address:"http://goo.gl/maps/Mt7xc",options:{content:"Copper!"}},action:"addMarker",marker:{options:{}},latLng:[h.lat,h.lon],map:{center:[h.lat,h.lon],zoom:15}},{action:"setOptions",args:[{scrollwheel:!1}]})}catch(f){}try{t(".alert").alert()}catch(u){}t('a[href="#top"]').on("click",function(){return t("html, body").animate({scrollTop:0},"slow"),!1});try{t(".skill-item").appear(function(){t(function(){t(".chart").easyPieChart({easing:"easeOutBounce",onStep:function(e,a,i){t(this.el).find(".percent").text(Math.round(i))}});var e=window.chart=t(".chart").data("easyPieChart");t(".js_update").on("click",function(){e.update(200*Math.random()-100)})})})}catch(p){}try{t(".skills-progress").appear(function(){t(".meter > span").each(function(){t(this).data("origWidth",t(this).width()).width(0).animate({width:t(this).data("origWidth")},1200)})})}catch(v){}try{t(".statistic-post").appear(function(){t(".timer").countTo({speed:4e3,refreshInterval:60,formatter:function(t,e){return t.toFixed(e.decimals)}})})}catch(g){}var m=t("#submit_contact"),C=t("#msg");m.on("click",function(e){e.preventDefault();var a=t(this);t.ajax({type:"POST",url:"contact.php",dataType:"json",cache:!1,data:t("#contact-form").serialize(),success:function(t){"error"!==t.info?(a.parents("form").find("input[type=text],textarea,select").filter(":visible").val(""),C.hide().removeClass("success").removeClass("error").addClass("success").html(t.msg).fadeIn("slow").delay(5e3).fadeOut("slow")):C.hide().removeClass("success").removeClass("error").addClass("error").html(t.msg).fadeIn("slow").delay(5e3).fadeOut("slow")}})}),function(){var e=document.documentElement,a=!1;function i(){(window.pageYOffset||e.scrollTop)>=100?t("nav").addClass("active"):t("nav").removeClass("active"),a=!1}document.querySelector("nav"),window.addEventListener("scroll",function(){a||(a=!0,setTimeout(i,55))},!1)}(),function(){var e=document.documentElement,a=!1;function i(){(window.pageYOffset||e.scrollTop)>=100?t(".top-line").addClass("active"):t(".top-line").removeClass("active"),a=!1}document.querySelector(".top-line"),window.addEventListener("scroll",function(){a||(a=!0,setTimeout(i,55))},!1)}()});