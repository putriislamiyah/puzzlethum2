var dragImg = document.querySelectorAll(".dragImg");
var dropImg = document.querySelectorAll(".dropImg");
var start = document.getElementById("start");
var timeleft = 10;
start.addEventListener("click", function (i) {
    document.querySelector(".btn").style.display = "none"
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("status").innerHTML="GAME OVER!"
            document.querySelector(".game-over").style.display = "block"
        } else {
            document.getElementById("count").innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
})

dragImg.forEach(e => {
    e.addEventListener("dragstart", dragNow);
})
dropImg.forEach(x => {
    x.addEventListener("dragover", dragEnd)
    x.addEventListener("drop", drop)
})

function dragNow(e) {
    e.dataTransfer.setData('id', e.target.id)
}

function dragEnd(e) {
    e.preventDefault()
}
let result = [];
function drop(e) {
    e.preventDefault()
    const datID = e.dataTransfer.getData("id");
    const draglerId = document.getElementById(datID)
    const dataSrc = draglerId.src

    if (e.target.getAttribute("data-dri") == datID) {
        e.target.src = dataSrc
        draglerId.style.display = "none"
        draglerId.setAttribute("draggable", false)
        e.target.setAttribute("draggable", false)
        result.push(dataSrc)
    }
    if (result.length == dragImg.length) {
        document.getElementById("status").innerHTML+="Yeyyy winner!"
        document.querySelector(".game-over").style.display = "block"
    }
}