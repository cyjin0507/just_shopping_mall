/* 
    슬라이드 기능 구현
*/
var num = 1 // 슬라이드 이미지 번호

// setInterval(function, second), second 마다 function 반복, 1초 = 1000 
setInterval(function (){
    if(num < 3) { // 만약 마지막 슬라이드 번호보다 작을 경우
        $("#slide ul").animate({ // 애니메이션
            top: '-'+300*num // -슬라이드번호*300으로 위치 이동
        }, 'slow')

        num++ // 슬라이드 번호 증가
    }
    else { // 마지막 슬라이드 번호일 경우
        $("#slide ul").animate({
            top: 0 // 슬라이드 위치 0으로 이동
        }, 'slow')
        num = 1 // 슬라이드 번호 첫번째로 지정
    }
}, 3000);


/*
    탭 구현
*/

$("#post_tab").click(function(){
    $(".tab > div").removeClass("active")
    $("#post_tab").addClass("active")

    $("#gallary").hide();
    $("#post").show();
})

$("#gallary_tab").click(function(){
    $(".tab > div").removeClass("active")
    $("#gallary_tab").addClass("active")

    $("#post").hide();
    $("#gallary").show();
})

/* 
    메뉴 관련 이벤트 설정
*/

// 메뉴를 한번에 내리고 싶을때
$(".menu > li").mouseover(function (){ // 마우스가 올라오면
    $(".submenu").stop().slideDown(); // slideDown = 내려오는 애니메이션
})

// 메뉴를 하나씩 내리고 싶을때
// $(".menu > li").mouseover(function (){
//     $(this).children(".submenu").stop().slideDown();
// })

$(".menu > li").mouseleave(function (){ // 마우스가 떠나면
    $(".submenu").stop().slideUp(); // slideUp = 올라가는 애니메이션
})

// 첫번째 공지사항 요소 클릭시
$("#open_popup").click(function(){
    $("#popup_back").show()
})

// 팝업의 '닫기' 버튼 클릭시
$("#popup_close").click(function(){
    $("#popup_back").hide()
})
