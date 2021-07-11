$(document).ready(function(){ 
	if ($(window).width() > 1200) {
		
		
		$('#top_menu > li > a').mouseenter(function(){
			$('#top_menu > li').each(function(){
				
				var menu_height =$(this).position().top;
				var li_height = $(this).height(); 
				var mega_menu_top = menu_height + li_height;
				
					$(this).find('.custom-menu-inside-div').css("top",mega_menu_top);
					$(this).find('ul').css("top",mega_menu_top);
				
			})
			
			
			if ($(this).next().hasClass('custom-menu-inside-div')){
				$(this).next('.custom-menu-inside-div').css("display","block");
				var first_li = $('.first-level-category-li').first('li');
				first_li.find('.first-level-left-div').addClass('active-li');
				first_li.find('.toggel_div').find('.menu_1_div').css("display","block");
				first_li.find('.toggel_div').css("display","block");
				
			}
			else{
				$(this).parent().find('ul').css("display","block");
			}
		});
		$('#top_menu > li > a').mouseleave(function(){
			if ($(this).next().hasClass('custom-menu-inside-div')){
				$(this).next('.custom-menu-inside-div').css("display","none");
			}
			else{
				$(this).parent().find('ul').css("display","none");
			}
		});
		$('.custom-menu-inside-div, #top_menu > li > a + ul').mouseenter(function(){
			$(this).css("display","block");
		});
		$('.custom-menu-inside-div, #top_menu > li > a + ul').mouseleave(function(){
			$(this).css("display","none");
		});
		
		// Dynamic category hover
		$('.first-level-category-li').each(function(){
			var self =$(this);
			var str =self.attr('id');
			var suffix = str.match(/\d+/).toString();

			$(self).mouseenter(function(){
				var first_div = $(self).find('.first-level-left-div');
				first_div.addClass("active-li");
				self.find('.toggel_div').css("display","block");
				
				$('.toggel_div').each(function(){
					var append_div = $(this).attr('id').match(/\d+/).toString();;
					if(suffix == append_div)
						{
							$('.toggel_div').css("display","none");
							$(this).css("display","block").find(".menu_1_div").css("display","block");
						}
				})
			})
		});
		$('.first-level-category-li').mouseleave(function(){
			var self =$(this)
			var first_div = $(self).find('.first-level-left-div')
			first_div.removeClass("active-li");
			self.find('.toggel_div').find('.menu_1_div').css("display","none");
			self.find('.toggel_div').css("display","none");
		});
		
		//active first category
		$('.first-level-category').mouseleave(function(){
			var first_li = $('.first-level-category-li').first('li').find('.first-level-left-div').addClass('active-li');
			first_li.next('.toggel_div').find('.menu_1_div').css("display","block");
			first_li.next('.toggel_div').css("display","block");
		});
		$('.custom-menu-inside-div').addClass('block-none');
		$('.mobile-view-static-menu').css("display","none");
		$('.top-custom-menu').removeClass("dropdown");
		$('.fisrt_li').addClass('first-level-category');
		$('.fisrt_li').removeClass('category-mobile-view');
		$('.first-level-li ').find('ul.sub_menu').removeClass('second_level-ul dropdown-menu');
		$('.sub-menu-ul-heading ').find('ul.third-level-ul').addClass('dropdown-menu');
		$('.category-heading-div').removeClass('dropdown-submenu');
		$('.expand-div').removeClass('dropdown-submenu');
		$('.submenu-a').removeClass('fa fa-chevron-right');
		$('.sub_menu').removeClass('dropdown-menu');
		$('.third-level-ul').removeClass('dropdown-menu');


		// Header Stick
		var login_class = $('#oe_main_menu_navbar');
		var navbarheight = $('#oe_main_menu_navbar').height();
		var rightBox = $('.navbar-top-collapse');
		if($(".navbar-top-collapse").length > 0)
		{
			var x = rightBox.offset();
			var navPos = x.top;
			if(login_class)
			{
				$(window).scroll(function() {
					var scrollPosition = $(this).scrollTop();
					if (scrollPosition >= navPos) {
						rightBox.addClass("header-stick");
						rightBox.css("top", + navbarheight);
						rightBox.css({"margin-top":"0px"});
						$('.navbar-brand img').addClass("logo-stick");
						$('.navbar-brand img').css("top", + navbarheight);
					} else {
						rightBox.removeClass("header-stick");
						$('.navbar-brand img').removeClass("logo-stick");
						//rightBox.css({"margin-top":"10px"});
					}
				});
			}else{
				rightBox.css({"top": "0"});
			}
		}
	}
	else{
		$('.category-mobile-view').removeClass('first-level-category');
		$('.first-level-li ').find('ul.sub_menu').addClass('second_level-ul dropdown-menu');
		$('.sub-menu-ul-heading ').find('ul.third-level-ul').addClass('dropdown-menu');
		$('.category-heading-div').addClass('dropdown-submenu');
		$('.expand-div').addClass('dropdown-submenu');
		$('.fisrt_li').removeClass('first-level-category');
		$('.fisrt_li').addClass('category-mobile-view');
		$('.submenu-a').addClass('fa fa-chevron-right');
		$('.first-level-left-div').removeClass('first-level-left-div');
		$('.toggel_div').removeClass('toggel_div');
		$('.menu_expand').removeClass('menu_1_div');
		$('.menu_expand_overflow').removeClass('menu_1_column_div');
		$('.second_level-ul').removeClass('sub_menu');
		$('.toggel-div-effect').addClass('dropdown-menu').css("position","unset");
		$('.submenu_expand').removeClass('dropdown-menu second_level-ul');
		$('.first-level-category-a').removeClass('dropdown-toggle').removeAttr("data-toggle", "dropdown");
		$('.second-level-a').removeClass('dropdown-toggle').removeAttr("data-toggle", "dropdown");
		$('.sub_menu_list').removeClass('dropdown-toggle').removeAttr("data-toggle", "dropdown");
	}
	
	
	/* Search box effect */
	$('.srch_icon').click(function () {
		$(this).css({"display":"none"});
		$('.anim-search').css({"visibility":"visible"});
		$('.close_icon').css({"display":"block"});
	});
	$('.close_icon').click(function () {
		$(this).css({"display":"none"});
		$('.anim-search').css({"visibility":"hidden"});
		$('.srch_icon').css({"display":"block"});
	});
	//First Static Menu in header
	$(".cat-column").mouseenter(function(){
		var self = $(this);
		self.addClass('opacity-full');
		var button_cat = $(self).find('a.button_cat');
		button_cat.addClass('menu-cate-hover');
		$('.cat-column').addClass('opacity');
	});
	
	$(".cat-column").mouseleave(function(){
		var self = $(this);
		var button_cat = $(self).find('a.button_cat');
		button_cat.removeClass('menu-cate-hover');
		$('.cat-column').removeClass('opacity');
		self.removeClass('opacity-full');
	});
	
	//Scroll up 
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.scrollup-div').fadeIn();
		} else {
			$('.scrollup-div').fadeOut();
		}
	}); 

	$('.scrollup-div').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
	});
	
	// Dropdown manu
		if ($(window).width() < 1200) {
		
	$('.first-level-category-li.dropdown-submenu').each(function(){
		var self =$(this);
		var str =self.attr('id');
		var suffix = str.match(/\d+/).toString();

		$('div.toggel-div-effect').each(function(){
			var append_div = $(this).attr('id').match(/\d+/).toString();;
			if(suffix == append_div)
				{
					$(this).appendTo(self);
					
				}
		})
		$(self).find('span.submenu-a').click(function(e){
			$(this).next('ul').toggle();
			$(this).next('div.toggel-div-effect').toggle();
			e.stopPropagation();
			e.preventDefault();
			
			var clicks = $(this).data('clicks');
			if (clicks) {
				$(this).removeClass("fa-chevron-down").addClass("fa-chevron-right");
			} else {
				$(this).removeClass("fa-chevron-right").addClass("fa-chevron-down");
			}
			$(this).data("clicks", !clicks);
		})
	});
	}
	$('.category-heading-div.dropdown-submenu span.submenu-a').on("click", function(e){
		$(this).next('ul').toggle();
		$(this).next('div.toggel-div-effect').toggle();
		e.stopPropagation();
		e.preventDefault();
		
		var clicks = $(this).data('clicks');
		if (clicks) {
			$(this).removeClass("fa-chevron-down").addClass("fa-chevron-right");
		} else {
			$(this).removeClass("fa-chevron-right").addClass("fa-chevron-down");
		}
		$(this).data("clicks", !clicks);
	});
	/*Remove a Sub-menu Html Field Empty Div*/	
	$('.custom-menu-inside-div').each(function(){		
		if ($(this).length && $(this).text().trim().length == 0 ){
			$(this).remove();
		}	
	});
	
	$('#top_menu li:has("ul.custom-menu-inside-div")').addClass("dropdown");
	$('#top_menu li:has("ul.custom-menu-inside-div")').find("a:first").addClass("dropdown-toggle");
	$('#top_menu li:has("ul.custom-menu-inside-div")').find("a:first").attr("data-toggle", "dropdown");
	$('#top_menu li:has("div.custom-menu-inside-div")').addClass("dropdown");
	$('#top_menu li:has("div.custom-menu-inside-div")').find("a:first").addClass("dropdown-toggle");
	$('#top_menu li:has("div.custom-menu-inside-div")').find("a:first").attr("data-toggle", "dropdown");
	
	$('.main-header a.clarico_close').click(function(){
		$('body').css('position','relative')
		$(".main-header-maxW").removeClass("transparentbg");
		$(".clarico_close").css("display","none");
		$(".anim-search").css("display","none");
		$(".main-header-left").css("display","block");
		$(".company-phone-div").css("display","block");
		$("body").removeClass("scroll_remove");
	})
});
//Show first category by default on load the window
$(window).load(function(){
	if ($(window).width() > 1200) {
		
        if($('body').find('.main_ctg_list').length==1){

            var first_li = $('.first-level-category-li').first('li');
            first_li.find('.first-level-left-div').addClass('active-li');

            var str =first_li.attr('id');
            var suffix = str.match(/\d+/).toString();

            $('div.toggel-div-effect').each(function(){
                var append_div = $(this).attr('id').match(/\d+/).toString();;
                if(suffix == append_div)
                {
                    $(this).css("display","block").find(".menu_1_div").css("display","block");

                }
            })
            $("div.custom-menu-inside-div , ul.custom-menu-inside-div").closest("li").removeClass("active");
        }
    }
})
$(document).ready(function(){ 
	if ($(window).width() < 1200) {
        $('#top_menu > li').each(function(){
        if($(this).find(".dropdown-menu").length > 0)
            {
                $(this).find(" > a").append("<i class='fa fa-chevron-right' style='font-size:12px'/>")
                 $(this).on("show.bs.dropdown hide.bs.dropdown", function(){
                    $(this).find("> a > i.fa").toggleClass("fa-chevron-right fa-chevron-down");
                });
            }
        })
         // Header Stick in responsive view
		var login_class = $('#oe_main_menu_navbar');
		var navbarheight = $('#oe_main_menu_navbar').height();
		var resDefaultNav = $('.navbar-default');
		if($(".navbar-default").length > 0)
		{
			var x = resDefaultNav.offset();
			var navPos = x.top;
			if(login_class)
			{
				$(window).scroll(function() {
					var scrollPosition = $(this).scrollTop();
					if (scrollPosition >= navPos) {
						resDefaultNav.addClass("header-stick");
						resDefaultNav.css("top", + navbarheight);
						resDefaultNav.css({"margin-top":"0px"});
						resDefaultNav.css({"padding-top":"5px"});
					} else {
						resDefaultNav.removeClass("header-stick");
                        resDefaultNav.css("top", + ' ');
						resDefaultNav.css({"margin-top":" "});
					}
				});
			}else{
				resDefaultNav.css({"top": "0"});
			}
		}
	}
})


//for searching
$(document).keyup(function(e) {
	if (e.which == 27) {
		$('body').css('position','relative')
		$(".main-header-maxW").removeClass("transparentbg");
		$(".clarico_close").css("display","none");
		$(".anim-search").css("display","none");
		$(".main-header-left").css("display","block");
		//$(".offer-center").css("display","block");
		$(".company-phone-div").css("display","block");
		$("body").removeClass("scroll_remove");
	}
});

// Remove scroll bar in signin/signup page
$(window).load(function(){
	$('body').find('.oe_website_login_container').each(function(){
		if($(this).find('.signin_main_div').length==1){console.log("inside")
			$('header').css('display','none');
			$('footer').css('display','none');
		}
	})
})





