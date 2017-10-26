/**
 * Created by 威 on 2017/7/11.
 */

$(function(){
    //tab实现
    (function($){
        var oli=$(".tablist li");
        oli.each(function(index){
            $(this).mouseover(function(){
                $(this).find("a").addClass("active");
                $(this).siblings().find("a").removeClass();
                $(this).parent().siblings().hide().eq(index).show();
            });
        });
    })(jQuery);
    //二级菜单
    (function($){
        var oTotalmenu=$(".totalmenu");
        var oli=oTotalmenu.find("li");
        oli.each(function(index){
            $(this).mouseover(function(){
                var oa=$(this).find(".sub_totalmenu a");
              //  alert(oa[0].innerHTML);
                var height=oa.length*parseInt($(this).find(".sub_totalmenu a:first-child").css("height"));
              //  alert(height);
                $(this).find(".sub_totalmenu").css("height",height+"px");
            });
            $(this).mouseout(function(){
                $(this).find(".sub_totalmenu").css("height","0");
            });
        });

    })(jQuery);
});