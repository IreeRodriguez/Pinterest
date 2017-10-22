//
// var modal = document.getElementsByClassName("box")[0];
//
// var btn = document.getElementsByClassName("myBtn")[0];
//
// var span = document.getElementsByClassName("close")[0];
//
// btn.onclick = function() {
//     modal.style.display = "block";
// }
//
// span.onclick = function() {
//     modal.style.display = "none";
// }

var myBtns = document.getElementsByClassName("myBtn");
var closeBtns = document.getElementsByClassName("close");
var boxes = document.getElementsByClassName("box");

function createClosure(n, disp) {
    return function () {
        boxes[n].style.display = disp;
    }
}

for (var i = 0; i < myBtns.length; i++) {
    var func = createClosure(i, "block");

    myBtns[i].addEventListener('click', func, false);
}

for (var i = 0; i < closeBtns.length; i++) {
    var func = createClosure(i, "none");

    closeBtns[i].addEventListener('click',func, false);
}

// for (var i = 0; i < myBtns.length; i++) {
//     var box = boxes[i];
//     myBtns[i].onclick = function() {
//         box.style.display = "block";
//     }
// }

// for (var i = 0; i < closeBtns.length; i++) {
//     var box = boxes[i];
//     closeBtns[i].onclick = function() {
//         box.style.display = "none";
//     }
// }
