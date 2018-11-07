$(function(){

  $(".header_wask_index").mouseover(function(){
    $(".erweima").removeClass("boxOne")
  })
  $(".header_wask_index").mouseout(function(){
    $(".erweima").addClass("boxOne")
  })
  $(".chengdu_index").mouseover(function(){
    $(".qipaoO>img").css("margin","0")
    $(".qipaoO>p").removeClass("boxOne");
    $(".chengdu_index").mouseout(function(){
      $(".qipaoO>img").css("margin","-100%")
      $(".qipaoO>p").addClass("boxOne");
    })
  })
  $(".wuhan_index").mouseover(function(){
    $(".qipaoT>img").css("margin","0")
    $(".qipaoT>p").removeClass("boxOne");
    $(".wuhan_index").mouseout(function(){
      $(".qipaoT>img").css("margin","-100%")
      $(".qipaoT>p").addClass("boxOne");
    })
  })
  $(".nav>li").mouseover(function(){
    $(this).addClass("on_index").siblings().removeClass("on4_index");
    $(".nav>li").mouseout(function(){
      $(this).removeClass("on_index");
    })
  })

  var bannerSwiper = new Swiper(".banner_index",{
    loop:true,
    speed:300,
    autoplay:true,
    pagination: {
      el: '.fenye_index',
    },
  })
  var serproSwiper = new Swiper(".serpro_index",{
    grabCursor:true,
    slidesPerView:4,
    breakpoints: {
       1920: {
         slidesPerView: 4,
       },
       1199: {
         slidesPerView: 3,
       },
       992: {
         slidesPerView: 2,
       },
       768: {
         slidesPerView: 1,
       }
     }
  })

  var buildSwiper = new Swiper(".webbuide_index",{
    grabCursor:true,
    on:{
    slideChange: function(){
      $(".was_but_index").eq(this.activeIndex).addClass("on4_index").siblings().removeClass("on4_index");//右侧切换到相对应的商品栏
      buildSwiper.slideTo(this.activeIndex);
    }
    },
  })
  $(".was_but_index").on('click',function(){
    var i = $(this).index();//获取当前点击的slide
    $(".was_but_index").eq(i).addClass("on4_index").siblings().removeClass("on4_index");//给当前点击的slide添加class（背景变白之类）
    buildSwiper.slideTo(i);//swiper切换到指定的slide
  })
  var youshiSwiper = new Swiper(".youshi_index",{
    grabCursor:true,
    slidesPerView:5,
    breakpoints: {
       1920: {
         slidesPerView: 5,
       },
       1199: {
         slidesPerView: 4,
       },
       992: {
         slidesPerView: 3,
       },
       768: {
         slidesPerView: 1,
       }
     }
  })
  var partnerSwiper = new Swiper(".partnerBox_index",{
    grabCursor:true,
    slidesPerView: 5,
    slidesPerColumn: 3,
    breakpoints: {
       1920: {
         slidesPerView: 5,
         slidesPerColumn: 3,
       },
       1199: {
         slidesPerView: 4,
         slidesPerColumn: 4,
       },
       992: {
         slidesPerView: 3,
         slidesPerColumn: 5,
       },
       768: {
         slidesPerView: 2,
         slidesPerColumn: 8,
       }
     }
  })
  var proSwiper = new Swiper(".problem_index",{
    grabCursor:true,
    slidesPerView:4,
    breakpoints: {
       1920: {
         slidesPerView: 4,
       },
       1199: {
         slidesPerView: 3,
       },
       992: {
         slidesPerView: 2,
       },
       768: {
         slidesPerView: 1,
       }
     }
  })
  var leftcaseSwiper = new Swiper(".leftpic_index",{
    grabCursor:true,
    slidesPerView:1,
    loop:true,
    // on:{
    //   slideChange: function(){
    //     $(".smallcase_index").slideTo(this.activeIndex);
    //   },
    // }
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
  })

  var rightcaseSwiper = new Swiper(".smallcase_index",{
    grabCursor:true,
    slidesPerView:3,
    loop:true,
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
  })






  //石力
  var hlo = new Swiper('.dabox', {
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
     renderBullet: function (index, className) {
       return '<span class="' + className + '">' + (index + 1) + '</span>';
     },
   },
  });


  //曾奇
  var swiper = new Swiper('.rose_contract_boxs', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
  var fieldB = new Swiper('.rose_items_boxs', {
    slidesPerView:3,
    breakpoints:{
      1920:{
        slidesPerView:3,
      },
      1199:{
        slidesPerView:3,
      },
      992:{
        slidesPerView:2,
      },
      768:{
        slidesPerView:1,
      },
    }
  });

//王国梁
//网站建设 最新案例 js

$(".sb_row_newcase .col-lg-3").mouseover(function(){
  $(".bbb",this).css("display","flex");
  $(".sb_row_newcase .col-lg-3").mouseout(function(){
    $(".bbb",this).css("display","none");
  })
})
//网站建设轮播js
  var swiper1 = new Swiper('.sb_webset_bottom',{
    slidesPerView :'auto',
    pagination: {
      el: '.swiper-pagination',
    },
  });

  //网站优化 解决问题 轮播js
    var swiper2 = new Swiper('.syh_solve_content',{
      slidesPerView :'auto',
      pagination: {
        el: '.swiper-pagination',
      },
    });
//网站优化 选择我们 轮播js
    var swiper3 = new Swiper('.syh_why_content',{
      slidesPerView :'auto',
      pagination: {
        el: '.swiper-pagination',
      },
    });
//网站优化 网站优化资讯 轮播js
    var swiper4 = new Swiper('.syh_information_content',{
      slidesPerView :'auto',
      pagination: {
        el: '.swiper-pagination',
      },
    });
    var swiper4B = new Swiper('.syh_information_content', {
      slidesPerView:2,
      breakpoints:{
        1920:{
          slidesPerView:2,
        },
        1199:{
          slidesPerView:2,
        },
        992:{
          slidesPerView:1,
        },
        768:{
          slidesPerView:1,
        },
      }
    });
//网站建设 合作流程 下拉js
   $(".sb_teamwork_list1").click(function(){
     $(".sb_teamwork_menu1>li").toggleClass("sb_teamwork_menu_on")
   })
   $(".sb_teamwork_list2").click(function(){
     $(".sb_teamwork_menu2>li").toggleClass("sb_teamwork_menu_on")
   })
   $(".sb_teamwork_list3").click(function(){
     $(".sb_teamwork_menu3>li").toggleClass("sb_teamwork_menu_on")
   })
   $(".sb_teamwork_list4").click(function(){
     $(".sb_teamwork_menu4>li").toggleClass("sb_teamwork_menu_on")
   })
   $(".sb_teamwork_list5").click(function(){
     $(".sb_teamwork_menu5>li").toggleClass("sb_teamwork_menu_on")
   })

//网站优化 seo全解 下拉js
$(".syh_seo_p1").click(function(){
  $(".syh_seo_li1>li").toggleClass("syh_seo_on")
})
$(".syh_seo_p2").click(function(){
  $(".syh_seo_li2>li").toggleClass("syh_seo_on")
})
$(".syh_seo_p3").click(function(){
  $(".syh_seo_li3>li").toggleClass("syh_seo_on")
})
$(".syh_seo_p4").click(function(){
  $(".syh_seo_li4>li").toggleClass("syh_seo_on")
})
$(".syh_seo_p5").click(function(){
  $(".syh_seo_li5>li").toggleClass("syh_seo_on")
})
$(".syh_seo_p6").click(function(){
  $(".syh_seo_li6>li").toggleClass("syh_seo_on")
})


//张文成
$(".benefit_seriveRoutine").mouseover(function(){
  $(".benefit_img>img",this).remove("src");
  var i=$(this).parent().index()+1;
  $(".benefit_img>img",this).attr("src","img/we1_icon_"+i+"_on.png");
  $(".benefit_seriveRoutine").mouseout(function(){
    $(".benefit_img>img",this).remove("src");
    var i=$(this).parent().index()+1;
    $(".benefit_img>img",this).attr("src","img/we1_icon_"+i+".png");
  })
})


$(".mainstream_type").mouseover(function(){
  $(".mainstream_img>img",this).remove("src");
  var m=$(this).parent().index()+1;
  $(".mainstream_img>img",this).attr("src","img/icon_1"+m+"_on.png");
  $(".mainstream_type").mouseout(function(){
    $(".mainstream_img>img",this).remove("src");
    var i=$(this).parent().index()+1;
    $(".mainstream_img>img",this).attr("src","img/icon_1"+i+".png");
  })
})



$(".known_spread .col-lg-2").mouseover(function(){
  $(".known_img>img",this).remove("src");
  var j=$(this).index()+1;
  $(".known_img>img",this).attr("src","img/we1_icon_1_on.png");
  $(".col-lg-2").mouseout(function(){
    $(".known_spread .known_img>img",this).remove("src");
    var i=$(this).index()+1;
    $(".known_img>img",this).attr("src","img/icon_3"+i+".png");
  })
})

$(".pop_seriveWeb .swiper-slide").mouseover(function(){
  $(this).addClass("active");
  $(".active .reason_detail>p").removeClass("reason_circle_on");
  $(".active .reason_circle img",this).remove("src");
  var j=$(".active").index()+1;
  $(".active .reason_circle img").attr("src","img/yzt"+j+"_on.png");
  $(".pop_seriveWeb .swiper-slide").mouseout(function(){
    $(this).removeClass("active");
    $(".reason_detail>p",this).addClass("reason_circle_on");
    $(".reason_circle img",this).remove("src");
    var j=$(this).index()+1;
    $(".reason_circle img",this).attr("src","img/yzt"+j+".png");
  })
})




aaaaa();
function aaaaa(){

var routine_benefit = new Swiper ('.routine_benefit', {
  slidesPerView: 4,
  spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1920: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }

})

var pop_seriveWeb = new Swiper ('.pop_seriveWeb', {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerColumnFill:'row',
  slidesPerColumn: 2,
    breakpoints: {
      1920: {
        slidesPerView: 5,
        slidesPerColumn: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 10,
      }
    }
})
var caseStop_seriveWeb = new Swiper ('.caseStop_seriveWeb', {
  slidesPerView: 3,
  spaceBetween: 30,
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      750: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
})

var serviceSwiper = new Swiper ('.web_analysis', {
    direction: 'horizontal',
    autoHeight: true,
    pagination: {
     el: '.swiper-pagination',
     type: 'progressbar',
   },
    autoHeight: true,
    on:{
      slideChange: function(){
        $(".tabsBox_detail>.col-lg-2").eq(this.activeIndex).addClass("on").siblings().removeClass("on");
      }
    }
})
$(".tabsBox_detail>.col-lg-2").on("click",function(){
      var i=$(this).index();
      $(".tabsBox_detail>.col-lg-2").eq(i).addClass("on").siblings().removeClass("on");
      serviceSwiper.slideTo(i);
})
}
if(window.addEvenetListener){
var range = document.getElementById('range');
if(!range) return;
//获得第二个圆的引用
var circle = range.getElementsByTagName('circle')[1];
range.addEvenetListener('change', function(){
    var percent = this.value / 100;
    //圆的周长
    var perimeter = Math.PI * 2 * 170;
    //stroke-dasharray属性的两个参数和必须为周长
    circle.setAttribute('stroke-dasharray', perimeter * percent + ' ' + perimeter * (1 - percent));
})
}



})
