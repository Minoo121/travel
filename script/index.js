//********************************************************* */
//汎用
//********************************************************* */
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));//timeはミリ秒

function toHankaku(input) {
  // DOM 要素が渡されたら value を使う
  if (input && typeof input === 'object' && 'value' in input) {
    input = input.value;
  }
  // null/undefined を空文字列にする
  if (input == null) input = '';
  // 最終的に文字列に変換
  const str = String(input);

  // 全角英数字・記号（！-～）を半角へ
  let out = str.replace(/[！-～]/g, ch =>
    String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)
  );

  // 全角スペースを半角に
  out = out.replace(/\u3000/g, ' ');

  return out;
}

window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    location.reload(); // ← 戻ったとき強制リロード
  }
});
//********************************************************* */
//index.html
//********************************************************* */
document.getElementById("error").style.display = "none";
document.getElementById("img").src = "./img/lock.png";

function error() {
  document.getElementById("error").style.display = "block";
};

async function pass_col() {
  let pass = 250208;
  let input = document.getElementById("pass");
  input.value = toHankaku(input.value);
  if (pass == input.value) {
    document.getElementById("img").src = "./img/unlock.png";
    await sleep(500);
    window.location.href = "./schedule.html"
    return true;
  }
  document.getElementById("img").src = "./img/lock.png";
  error();
}