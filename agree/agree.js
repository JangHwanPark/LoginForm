window.onload = function () {
  // 자바스크립트는 빨리만들어서 유연한언어
  // filexible === dangerous
  // add ECMAScript 5 , use strict === 엄격모드
  'use strict';

  /** @agree_check 체크박스 Name 유사배열로 불러옴*/
  var agree_check = document.getElementsByName('agree');
  /** @agree_all 전체동의 ID 불러옴 */
  var agree_all = document.getElementById('agree-all');

  /** @agree_btn = Next버튼 ID불러옴 */
  var btn_Next = document.getElementById('btn-next');
  /** @agree_btn = Back버튼 ID불러옴 */
  var btn_Back = document.getElementById('btn-back');

  /** 전체 동의(agree_all)체크박스가 check되면 개별 체크박스가 모두 체크되는 함수입니다. */
  // length는 배열의 길이를 알려줌
  // agree_check[i]가 모두 체크되면 agree_all도 체크된다.
  agree_all.onclick = function () {
    for (let i = 0; i < agree_check.length; i++) {
      agree_check[i].checked = agree_all.checked;
    }
  }

  /** 개별 체크박스가 모두 check되면 전체동의 체크박스가 check되고, 하나라도 체크가 해제되면 전체동의 체크박스가 해제되는 함수입니다. */
  for (let i = 0; i < agree_check.length; i++) {
    agree_check[i].addEventListener('click', function () {
      if (agree_check[0].checked && agree_check[1].checked && agree_check[2].checked) agree_all.checked = true;
      else agree_all.checked = false;
    });
  }

  /** 필수 체크박스가 checked라면 버튼 클릭시 페이지를 이동하고, unchecked라면 alert창으로 유저에게 알려준다. */
  btn_Next.onclick = function () {
    if (agree_check[0].checked && agree_check[1].checked) {
      alert('회원가입을 진행합니다.');
      location.href = 'signup.html';
    }
    else {
      alert('필수 항목에 동의해주세요.');
      return false;
    }
  }

  /** Back 버튼을 클릭하면 alert창과 함께 이전 페이지로 돌아간다. */
  btn_Back.onclick = function () {
    alert('이전 페이지로 이동합니다.')
    location.href = '/login/login.html';
  }
}