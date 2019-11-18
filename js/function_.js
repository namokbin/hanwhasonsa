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

//visual img even
$(function(){
    var $slides=$("#main_visual_wrap>.slide_container>li");
    var $pagination=$("#main_visual_wrap>.pagination_container>li");

    // $("#main_visual_wrap").height($(window).height());
    
    $slides.filter('.on').children(".txt_wrap").stop().css({
        opacity:1,
        top:300
    });   

    function autoPlay() {
        setInterval(function () {

            $slides.filter('.on').children(".vs_img").stop().css({ //이미지 커지면서 사라짐
                transform:"scale(1.1)",
                opacity:0
            }).siblings(".txt_wrap").css({top:360, opacity:0}).parent().removeClass("on").siblings().addClass("on");
            
            $pagination.filter('.on').removeClass("on").siblings().addClass("on");
            
            $slides.filter('.on').children(".vs_img").stop().css({ //이미지 작아지면서 나타남
                transform:"initial",
                opacity:1
            }).siblings(".txt_wrap").css({opacity:1, top:300});

        }, 3000);
    }
    
    autoPlay();

});

//counter
$(function(){
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
          duration: 5000,
          easing:'easeOutCirc',
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
});

//business slide
$(function(){
    var $btn=$("#Business_wrap>.slides_wrap>.btn_list>li");
    var $container=$("#Business_wrap>.slides_wrap>.view_list>ol");
    var $view_list=$("#Business_wrap>.slides_wrap>.view_list>ol>.img");
    var nowIdx=0;

    $container.children().eq(nowIdx+1).siblings().addClass("bg_img");
    $container.children().eq(nowIdx+1).next().on("click",function(evt){
        evt.preventDefault();

            
        $container.stop().animate({
            marginLeft : -(1200*nowIdx)
        }); 
    });

    $btn.on("click",function(evt){
        evt.preventDefault();
        
        nowIdx = $btn.index(this);//인덱스값 추출
        $btn.eq(nowIdx).addClass("on").siblings().removeClass("on");
        
        console.log(nowIdx);
        
        $container.stop().animate({
            marginLeft : -(1200*nowIdx)
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
