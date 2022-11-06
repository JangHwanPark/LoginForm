var title = document.getElementById("title_logo");              /** @type {HTMLInputElement} */
var submit = document.getElementById("Login");                  /** @type {HTMLInputElement} */
var fine = document.getElementsByClassName("fine");             /** @type {HTMLInputElement} */
var social = document.getElementsByClassName("button_login");   /** @type {HTMLInputElement} */

/** @function 브라우저가 객체를 로드한 직후에 발생합니다. */
window.onload = function () {
    /** @function 로그인 버튼을 클릭하면 발생하는 이벤트입니다. */
    function login_link() {
        /** title(title_logo) 클릭시 window.location.href 이벤트가 발생합니다. */
        if(title.onclick) window.location.href = "http://www.naver.com";
        /** submit(Login) 클릭시 window.location.href 이벤트가 발생합니다. */
        if(submit.onclick) window.location.href = "http://www.naver.com";
        /** fine class의 반복문입니다. 클릭시 window.location.href 이벤트가 발생합니다. */
        for(let i in fine) {
            if(fine[i].onclick) {
                window.location.href = "http://www.naver.com";
                fine.onclick = login_link;
            }
        }
        /** button_login class의 반복문입니다. 클릭시 window.location.href 이벤트가 발생합니다. */
        for(let i in social) {
            if(social[i].onclick) {
                window.location.href = "http://www.naver.com";
                social.onclick = login_link;
            }
        }

    }
    /* style : 요소에 마우스 오버시 손가락 표시로 바뀜니다.
    *  onclick : 요소 클릭시 login_link() 함수가 실행됩니다. */
    title.style = "cursor: pointer;";
    title.onclick = login_link;
    submit.style = "cursor: pointer;";
    submit.onclick = login_link;
    for(let i in fine) {
        fine[i].style = "cursor: pointer;";
        fine[i].onclick = login_link;
    }
    for(let i in social) {
        social[i].style = "cursor: pointer;";
        social[i].onclick = login_link;
    }
}