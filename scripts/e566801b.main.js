"use strict";!function(){$(".checkbox label").on("click",function(){var a=$(this).parent();a.find("input").is(":checked")?$(a).css("border-color","#ccc"):$(a).css("border-color","#aa9b77")}),$(".arrow").on("click",function(){$("html, body").animate({scrollTop:$("section.filter").offset().top},800)})}();