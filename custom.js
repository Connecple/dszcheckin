
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

            $('table#b3 a>img').each(function(i, e){
              $(e).attr("src", "./i/3.btn/i" + (i+1) + "-1.png").attr('width', "252px").attr('height', "82px");
              $(e).hover(
                function(){$(this).attr("src", "./i/3.btn/i" + (i+1) + "-2.png")},
                function(){
                  if (location.pathname.split(".")[1] != (i+1)){
                    $(this).attr("src", "./i/3.btn/i" + (i+1) + "-1.png")
                  }
                },
              );
            });
            var b3 = location.pathname.split(".")[1];
            b3 = parseInt(b3);
            console.log(b3);
            if (b3 != "html") {
              $($('table#b3 a>img')[b3-1]).attr("src", "./i/3.btn/i" + (b3) + "-2.png")
            }
          })
