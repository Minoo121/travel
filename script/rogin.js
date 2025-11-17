document.getElementById("error").style.display = "none";

function error() {
        document.getElementById("error").style.display = "block";
};


function pass_col() {
    let pass = 250208;
    let input = document.getElementById("pass");
    input.value = toHankaku(input.value);

    if (pass == input.value) {
        window.location.href = "../top.html"
        return true;
    }
    error();
}

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


