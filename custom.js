
          $(function(){
            $(".t2 img").each(function(i, e){
              $(e).attr("src", "./i/" + $(e).attr("t") + "2.png");
              if ($(e).attr("t") != "FAQ") {
                $(e).attr("width","171.8px");
              }
              $(e).hover(
                function(){$(this).attr("src", "./i/" + $(this).attr("t") + "1.png")},
                function(){$(this).attr("src", "./i/" + $(this).attr("t") + "2.png")}
              )
            })
            var pgs = ["eduintro", "eduresume", "expintro", "expresume", "FAQ"];
            pgs.forEach(function(v,i,a){
              if (location.pathname.indexOf(v) > 0) {
                $("img[t="+v+"]").attr("src", "./i/" + v + "1.png").off("mouseenter mouseleave");
              }
            })
          })
