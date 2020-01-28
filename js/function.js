$(function(){
    $("a").on("click",function(evt){
        evt.preventDefault();
    });
});

//submenu
$(function(){
    var $gnb=$("header>.header_wrap>nav>.gnb>li");
    var $sub=$("header>.header_wrap>nav>.gnb>li>.sub")
    
    //sub event
    $gnb.on({
        "mouseenter":function(){
            $(this).children(".sub").stop().slideDown();        
        },
        "mouseleave":function(){
            $(this).children(".sub").stop().slideUp();        
        }
    })

    //gnb line event
    $gnb.eq(0).on({
        "mouseenter":function(){
            $(".line").stop().css({
                left:46,
                opacity:1
            })
        },
        "mouseleave":function(){
            $(".line").stop().css({
                left:0,
                opacity:0                
            })
        }
    });
    $gnb.eq(1).on({
        "mouseenter":function(){
            $(".line").stop().css({
                left:197,
                opacity:1               
            })
        },
        "mouseleave":function(){
            $(".line").stop().css({
                left:0,
                opacity:0                
            })
        }
    });  
    $gnb.eq(2).on({
        "mouseenter":function(){
            $(".line").stop().css({
                left:348,
                opacity:1                
            })
        },
        "mouseleave":function(){
            $(".line").stop().css({
                left:697,
                opacity:0               
            })
        }
    });     
    $gnb.eq(3).on({
        "mouseenter":function(){
            $(".line").stop().css({
                left:499,
                opacity:1                
            })
        },
        "mouseleave":function(){
            $(".line").stop().css({
                left:697,
                opacity:0                
            })
        }
    });     
    $gnb.eq(4).on({
        "mouseenter":function(){
            $(".line").stop().css({
                left:650,
                opacity:1                
            })
        },
        "mouseleave":function(){
            $(".line").stop().css({
                left:697,
                opacity:0                
            })
        }
    });     
  });

//visual slide
$(function(){
    var $slides=$("#main_visual_wrap>.slide_container>li");
    var $pagination=$("#main_visual_wrap>.pagination_container>li");

    function txt(){ //.on이 붙은 li의 자손 txt>wrap>p 하나씩 나타나는 함수
        $slides.filter('.on').find(".txt_wrap>p").stop().css({
            opacity:1,
            marginTop:-60
        });  
    };
    
    function reset(){ //.on이 붙은 li의 자손 txt>wrap>p 사라지는 함수
        $slides.filter('.on').find(".txt_wrap>p").stop().css({
            marginTop:-40,
            opacity:0
        });  
    };
    
    function autoPlay() {
        txt();//txt_wrap>p 하나씩 나타남
        
        setInterval(function () {
            
            $slides.filter('.on').children(".vs_img").stop().css({ //.on이 붙은 li의 이미지가 커지면서 사라짐
                transform:"scale(1.1)",
                opacity:0
            })
            reset();

            $slides.filter('.on').children(".vs_img").parent().removeClass("on").siblings().addClass("on"); //현재 li의 .on을 떼고 형제 li에 .on을 붙임
                        
            $slides.filter('.on').children(".vs_img").stop().css({ //.on이 붙은 li의 이미지가 작아지면서 나타남
                transform:"initial",
                opacity:1
            })
            txt();
            
            $pagination.filter('.on').removeClass("on").siblings().addClass("on");//페이지네이션 활성화
            $pagination.on("click",function(evt){
                evt.preventDefault();
            });
        }, 3000);
    }
    
    autoPlay();
    
});

//counter
$(function(){

    function counterReset(){
        $(".counter01").text(0);
        $(".counter02").text(0);
        $(".counter03").text(0);

        $(".list_wrap>ul>li>p.conuter_wrap").css({
            'transition-delay':0,
            opacity:0,
            marginLeft:110
        });

    }

    $(window).on("scroll",function(){

        var scrollTop=0;

        scrollTop=$(this).scrollTop();
        console.log(scrollTop);

        if(scrollTop>700){
            
            $('.counter01').each(function() {
                var $this = $(this);
                var countTo = $this.attr('data-count');
                $({ countNum: $this.text()}).animate({
                    countNum: countTo,
                },
                {      
                    duration: 600,
                    step: function() {
                    $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                    $this.text(this.countNum);
                    }
                }); 
                
                $(".list_wrap>ul>li:nth-child(1)>p.conuter_wrap").css({
                    marginLeft:0,
                    opacity:1
                });
            });
        
                
            $('.counter02').each(function() {
                var $this = $(this);
                var countTo = $this.attr('data-count');
                $({ countNum: $this.text()}).delay(600).animate({
                    countNum: countTo
                },
                {      
                    duration: 600,
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                }); 
                $(".list_wrap>ul>li:nth-child(2)>p.conuter_wrap").css({
                    marginLeft:0,
                    opacity:1
                }); 
            });  
            
            $(".list_wrap>ul>li:nth-child(3)>p.conuter_wrap").css({
                marginLeft:0,
                opacity:1
            }); 
            
            $('.counter03').each(function() {
                var $this = $(this);
                var countTo = $this.attr('data-count');
                $({ countNum: $this.text()}).delay(500).animate({
                    countNum: countTo
                },
                {      
                    duration: 3000,
                    // easing:'easeOutCirc',
                    step: function() {
                    $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                    $this.text(this.countNum);
                    }
                });  
                $(".list_wrap>ul>li:nth-child(4)>p.conuter_wrap").css({
                    marginLeft:0,
                    opacity:1
                });
            });
        }

        if(scrollTop==0 || scrollTop>1500){
            counterReset();
        }
    });
});

//business slide
$(function(){
    var $btn=$("#Business_wrap>.slides_wrap>.btn_list>li");
    var $container=$("#Business_wrap>.slides_wrap>.view_list>ol");
    var $view_list=$("#Business_wrap>.slides_wrap>.view_list>ol>.img");
    var nowIdx=0;
    // var marginLeft=$container.css('margin-left').replace(/[^-\d\.]/g, '');

    $container.children().eq(nowIdx+1).siblings().addClass("bg_img");
    $container.children().eq(nowIdx+1).next().on("click",function(evt){
        evt.preventDefault();

            
        // $container.stop().animate({
        //     // marginLeft : -(1200*nowIdx)
        //     // 'margin-left': marginLeft-1200
        //     'margin-left': ($(this).css("margin-left").replace(/[^-\d\.]/g, ''))-1200
        // }); 
    });

    // $btn.on("click",function(evt){
    //     evt.preventDefault();
        
    //     nowIdx = $btn.index(this);//인덱스값 추출
    //     $btn.eq(nowIdx).addClass("on").siblings().removeClass("on");
        
    //     $container.stop().animate({
    //         marginLeft : -(1200*nowIdx)
    //     });

    //     $container.children().eq(nowIdx+1).removeClass("bg_img").siblings().addClass("bg_img");
    // });
    $btn.eq(0).on("click",function(evt){
        evt.preventDefault();
        
        nowIdx = $btn.index(this);//인덱스값 추출
        $btn.eq(nowIdx).addClass("on").siblings().removeClass("on");
        
        $container.stop().animate({
            marginLeft : -1800
        });

        $container.children().eq(nowIdx+1).removeClass("bg_img").siblings().addClass("bg_img");
    });
    
    $btn.eq(1).on("click",function(evt){
        evt.preventDefault();
        
        nowIdx = $btn.index(this);//인덱스값 추출
        $btn.eq(nowIdx).addClass("on").siblings().removeClass("on");
        
        $container.stop().animate({
            marginLeft : -3000
        });

        $container.children().eq(nowIdx+1).removeClass("bg_img").siblings().addClass("bg_img");
    });

    $btn.eq(2).on("click",function(evt){
        evt.preventDefault();
        
        nowIdx = $btn.index(this);//인덱스값 추출
        $btn.eq(nowIdx).addClass("on").siblings().removeClass("on");
        
        $container.stop().animate({
            marginLeft : -4200
        });

        $container.children().eq(nowIdx+1).removeClass("bg_img").siblings().addClass("bg_img");
    });    

    $btn.eq(3).on("click",function(evt){
        evt.preventDefault();
        
        nowIdx = $btn.index(this);//인덱스값 추출
        $btn.eq(nowIdx).addClass("on").siblings().removeClass("on");
        
        $container.stop().animate({
            marginLeft : -5400
        });

        $container.children().eq(nowIdx+1).removeClass("bg_img").siblings().addClass("bg_img");
    }); 

    $btn.eq(4).on("click",function(evt){
        evt.preventDefault();
        
        nowIdx = $btn.index(this);//인덱스값 추출
        $btn.eq(nowIdx).addClass("on").siblings().removeClass("on");
        
        $container.stop().animate({
            marginLeft : -6600
        });

        $container.children().eq(nowIdx+1).removeClass("bg_img").siblings().addClass("bg_img");
    }); 
    //mouseenter event
    $view_list.on({
        
        "mouseenter":function(){
            var $that = $(this);
            $(this).addClass("hover_img"); 
            $that.find($(".out")).stop().fadeOut(500,function(){
                $that.find(".hover>p").stop().css({
                    opacity:1,
                    bottom: 0
                });       
            }); 
        
            $that.find($(".img_icon")).stop().css({
                opacity:1,
                transform: "scale(1)",
                'transition-delay': '0.8s'
            });       
        },
        "mouseleave":function(){
            $(this).removeClass("hover_img");
            $(this).find($(".out")).stop().fadeIn(500);  
            $(this).find($(".hover>p")).stop().css({
                opacity:0,
                bottom: -130
            });             
            $(this).find($(".img_icon")).stop().css({
                opacity:0,
                transform: "scale(0.1)",
                'transition-delay': 'initial'
            });            
        }
    });

});

//notice 
$(function(){
    $btn = $("#notice_wrap>.notice_box>.btn_wrap>li");
    $view=$("#notice_wrap>.notice_box>.view_wrap>li");
    var nowIdx=0;

    // $btn.on("click",function(){
    //     $(this).addClass("on").siblings().removeClass("on");
    // });

    console.log("$btn = ",$btn)

    $btn.on("click",function(){
        nowIdx = $(this).index();
        console.log(nowIdx);  

        $(this).addClass("on").siblings().removeClass("on");
        $view.eq(nowIdx).addClass("on").siblings().removeClass("on");
    });
});

//recruit
$(function(){

    $(window).on("scroll",function(){

        var scrollTop=0;

        scrollTop=$(this).scrollTop();
        console.log(scrollTop);

        if(scrollTop>2952){

            $("#recruit_wrap>.list_wrap>li").css({
                opacity:1,
                marginTop:0
            })
        }
    });  
});

//all_menu
$(function(){
    $btn=$(".all_menu_btn");
    $bg=$(".all_menu_bg");

    $btn.on("click",function(){
        $bg.stop().slideToggle();

        if($("body").hasClass("menu_on")){
            $("body").removeClass("menu_on");
            $(".all_menu").stop().fadeOut(600);
        }else{
            $("body").addClass("menu_on");
            $(".all_menu").stop().fadeIn(600);
        };
    });


});
