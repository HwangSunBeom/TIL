document.getElementById("lion").style.color = "red";

document.getElementById("tiger").innerHTML = "blue";

document.getElementById("bear").style.color = "green";

const animals = document.getElementById("animals");
animals.innerHTML += "<li class='animal'>Cat</li>";

// css 선택자를 사용하여 요소를 찾는 QuerySelector, QuerySelectorAll
// add는 추가
document.querySelectorAll(".box")[0].classList.add("purple");
// remove는 제거
document.querySelectorAll(".box")[0].classList.remove("purple");

// 토글 스위치와 같이 0과 1을 반복
document.querySelectorAll(".box")[0].classList.toggle("yellow");
document.querySelectorAll(".box")[0].classList.toggle("yellow");


document.getElementById("btn").addEventListener("click", function(){
    console.log("click!!");
});
var num = 0;

document.getElementById("add").addEventListener("click", function(){
    num++;
    document.getElementById("num").innerHTML = num;
});
document.getElementById("sub").addEventListener("click", function(){
    num--;
    document.getElementById("num").innerHTML = num;
});

document.querySelector(".bar").addEventListener("click", function(){
    // document.querySelector(".bar").innerHTML = "눌렀어!"
    // document.querySelector(".newBar").style.display = "block";
    document.querySelector(".newBar").classList.toggle("show");
});