//********************************************************* */
//３月３日オーバーレイ
//********************************************************* */
function three_day_openModel(){
    let model = document.getElementById("three_day_model");
    model.style.display = "flex";
}

function three_day_closeModel(){
    let model = document.getElementById("three_day_model");
    model.style.display = "none";
}

window.addEventListener("click",
    function(e){
        let model = this.document.getElementById("three_day_model");
        if(e.target === model){
            three_day_closeModel();
        }
    }
);

//********************************************************* */
//３月５日オーバーレイ
//********************************************************* */
function five_day_openModel(){
    let model = document.getElementById("five_day_model");
    model.style.display = "flex";
}

function five_day_closeModel(){
    let model = document.getElementById("five_day_model");
    model.style.display = "none";
}

window.addEventListener("click",
    function(e){
        let model = this.document.getElementById("five_day_model");
        if(e.target === model){
            five_day_closeModel();
        }
    }
);