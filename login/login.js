var body = document.getElementsByTagName("body");               /** @type {HTMLInputElement} */
var title = document.getElementById("title_logo");              /** @type {HTMLInputElement} */
var submit = document.getElementById("Login");                  /** @type {HTMLInputElement} */
var fine = document.getElementsByClassName("fine");             /** @type {HTMLInputElement} */
var social = document.getElementsByClassName("button_login");   /** @type {HTMLInputElement} */
var foo = document.getElementsByClassName("foo");               /** @type {HTMLInputElement} */

/** @function window.onload 브라우저가 객체를 로드한 직후에 발생합니다. */
window.onload = function () {
    /** @function draag 드래그, 우클릭 방지 */
    function draag () {
        for (let i in body){
            body[i].oncontextmenu = function () {
                return false;
            }
            body[i].onselectstart = function () {
                return false;
            }
            body[i].ondragstart = function () {
                return false;
            }
        }
    }
    draag();

    /** @function 로그인 버튼을 클릭하면 발생하는 이벤트입니다. */
    function login_link() {
        /** title(title_logo) 클릭시 window.location.href 이벤트가 발생합니다. */
        if (title.onclick) window.location.href = "http://www.naver.com";
        /** submit(Login) 클릭시 window.location.href 이벤트가 발생합니다. */
        if (submit.onclick) window.location.href = "http://www.naver.com";
        /** fine class(계정정보 찾기)의 반복문입니다. 클릭시 window.location.href 이벤트가 발생합니다. */
        for (let i in fine) {
            if (fine[i].onclick) {
                window.location.href = "http://www.naver.com";
                fine.onclick = login_link;
            }
        }
        /** button_login class(소셜계정)의 반복문입니다. 클릭시 window.location.href 이벤트가 발생합니다. */
        for (let i in social) {
            if (social[i].onclick) {
                social[i].window.location.href = "https://www.epis.or.kr/api/sns/kakaoAPI";
            }
            if (social[i].onclick) {
                social[i].window.location.href = "https://line.me/ko/";
            }
            if (social[i].onclick) {
                social[i].window.location.href = "https://secure5.store.apple.com/kr/shop/signIn?ssi=1AAABhEq-m2MgRLhTi9VKwwLXPoO5EPm7nv_7etmf5ngu6krYKCh49aAAAAFcaHR0cHM6Ly93d3cuYXBwbGUuY29tL2tyL3N0b3JlP2FmaWQ9cDIzOCU3Q3NpQURoNmhiSy1kY19tdGlkXzE4NzA3dnh1Mzg0ODRfcGNyaWRfNjI3NjEyOTIyNzAyX3BncmlkXzE2MzQ4NDk2OTYxX3BudHdrX2dfcGNoYW5fX3BleGlkX18mY2lkPWFvcy1rci1rd2dvLUJyYW5kLS1zbGlkLS0tcHJvZHVjdC18aHR0cHM6Ly93d3cuYXBwbGUuY29tL2tyL3N0b3JlP2FmaWQ9cDIzOCU3Q3NpQURoNmhiSy1kY19tdGlkXzE4NzA3dnh1Mzg0ODRfcGNyaWRfNjI3NjEyOTIyNzAyX3BncmlkXzE2MzQ4NDk2OTYxX3BudHdrX2dfcGNoYW5fX3BleGlkX18mY2lkPWFvcy1rci1rd2dvLUJyYW5kLS1zbGlkLS0tcHJvZHVjdC18AAIB_cY0nFJG15wYHvXZGuqyo7kkpt-cUemql1ieYATcfn8";
             }
            if (social[i].onclick) {
                social[i].window.location.href = "https://www.facebook.com/?stype=lo&jlou=Afdt_MIcW1S3cd3t4H9uB-t75_SUku-zqX_4OgfF0cEQYvo_ABClIA0moV0sXt_jZ246ijQdpZIHo0rPfJcusxxmK0Y-hlJL0QqIvHQfmCB-7w&smuh=51807&lh=Ac8mlx2vldB8W_rKeEs";
            }
        }
        /** footer tag의 반복문입니다. 클릭시 window.location.href 이벤트가 발생합니다. */
        for (let i in foo) {
            if (foo[i].onclick) {
                window.location.href = "http://www.naver.com";
                foo.onclick = login_link;
            }
        }
    }

    /* style : 요소에 마우스 오버시 손가락 표시로 바뀜니다.
    *  onclick : 요소 클릭시 login_link() 함수가 실행됩니다. */
    title.style = "cursor: pointer;";
    title.onclick = login_link;
    submit.style = "cursor: pointer;";
    submit.onclick = login_link;
    for (let i in fine) {
        fine[i].style = "cursor: pointer;";
        fine[i].onclick = login_link;
    }
    for (let i in social) {
        social[i].style = "cursor: pointer;";
        social[i].onclick = login_link;
    }
    for (let i in foo) {
        foo[i].style = "cursor: pointer;";
        foo[i].onclick = login_link;
    }
}