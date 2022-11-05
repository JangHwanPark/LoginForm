var title = document.getElementById("title_logo");

/** 브라우저가 객체를 로드한 직후에 발생합니다. */
window.onload = function () {
    /** @param {string} login_logo - 로그인 페이지의 로고를 클릭하면 main 페이지로 이동합니다. */
    function login_logo() {
        if(title.onclick) {
            window.location.href = "http://www.naver.com";
        }
    }
    title.style = "cursor: pointer;";
    title.onclick = login_logo;
}
