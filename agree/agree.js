/** @agree_check 체크박스*/
var agree_check = document.getElementsByName('agree');
/** @agree_btn 버튼 */
var agree_btn = document.getElementById('agree_btn');
/** @agree_all 전체동의 */
var agree_all = document.getElementById('agree-all');

window.onload = function () {
    function checktAll(selectAll)  {
        agree_all.forEach((checkbox) => {
          checkbox.checked = selectAll.checked;
        })
      }
    agree_all.onclick(this) = checktAll;
}