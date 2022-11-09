/** @agree_check 체크박스*/
var agree_check = document.getElementsByName('agree');
/** @agree_btn 버튼 */
var agree_btn = document.getElementById('agree_btn');
/** @agree_all 전체동의 */
var agree_all = document.getElementById('agree-all');

window.onload = function () {
  /** 전체 동의 버튼 클릭시 체크박스가 모두 체크되는 함수 */
    agree_all.onclick = function () {
      for(let checkbox of agree_check){
        checkbox.checked = this.checked;
      }
    }
}