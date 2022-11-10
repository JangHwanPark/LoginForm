/** @agree_check 체크박스 Name 유사배열로 불러옴*/
var agree_check = document.getElementsByName('agree');
/** @agree_btn 버튼 ID불러옴 */
var agree_btn = document.getElementById('agree_btn');
/** @agree_all 전체동의 ID 불러옴 */
var agree_all = document.getElementById('agree-all');

window.onload = function () {
  /** 전체 동의(agree_all)체크박스가 check되면 개별 체크박스가 모두 체크되는 함수입니다. */
  agree_all.onclick = function () {
    for (var i = 0; i < agree_check.length; i++) {
      agree_check[i].checked = agree_all.checked;
    }
  };

  /** 개별 체크박스가 모두 check되면 전체동의 체크박스가 check되고, 하나라도 체크가 해제되면 전체동의 체크박스가 해제되는 함수입니다. */
  for (var i = 0; i < agree_check.length; i++) {
    agree_check[i].addEventListener('click', function () {
      if (agree_check[0].checked && agree_check[1].checked && agree_check[2].checked) agree_all.checked = true;
      else agree_all.checked = false;
    });
  }
}