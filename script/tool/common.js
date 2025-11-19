//********************************************************* */
//汎用
//********************************************************* */
function openModel(){
    let model = document.getElementById("model");
    model.style.display = "flex";
}

function closeModel(){
    let model = document.getElementById("model");
    model.style.display = "none";
}

window.addEventListener("click",
    function(e){
        let model = this.document.getElementById("model");
        if(e.target === model){
            closeModel();
        }
    }
);