let hyoutan_desc = false;
let kaori_desc = false;
let yufuin_desc = false;
let hoyou_desc = false;

function descbutton(name) {
    let descId = name + "_desc";
    let imgId = name + "_descbutton_img";

    // フラグの参照
    let flag = window[name + "_desc"];

    if (!flag) {
        // 表示
        document.getElementById(descId).style.display = "block";
        document.getElementById(imgId).src = "./img/apper.png";
        window[name + "_desc"] = true;  // フラグ更新
    } else {
        // 非表示
        document.getElementById(descId).style.display = "none";
        document.getElementById(imgId).src = "./img/ander.png";
        window[name + "_desc"] = false; // フラグ更新
    }
}