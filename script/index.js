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

  fetch('manifest.json')
    .then(response => response.json())
    .then(data => {
      if (data.ios) {
        const head = document.head;

        const meta1 = document.createElement('meta');
        meta1.name = 'apple-mobile-web-app-capable';
        meta1.content = data.ios.apple_mobile_web_app_capable;
        head.appendChild(meta1);

        const meta2 = document.createElement('meta');
        meta2.name = 'apple-mobile-web-app-status-bar-style';
        meta2.content = data.ios.apple_mobile_web_app_status_bar_style;
        head.appendChild(meta2);

        const link = document.createElement('link');
        link.rel = 'apple-touch-icon';
        link.size = '180x180'
        link.href = data.ios.apple_touch_icon;
        head.appendChild(link);

        const meta3 = document.createElement('meta');
        meta3.name = 'apple-mobile-web-app-title';
        meta3.content = data.ios.apple_mobile_web_app_title;
        head.appendChild(meta3);
      }
    });

//********************************************************* */
//index.html
//********************************************************* */
document.getElementById("img").src = "./img/lock.png";

function error() {
  document.getElementById("error").classList.add("show");
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