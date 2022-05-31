init();

// 이벤트 리스너 추가하는 함수
function init(){
    // form
    document.querySelector('form').addEventListener('submit', addToDo);
    // Delete All
    document.getElementById('clear').addEventListener('click', clearToDoList);
    // li 태그(ToDo item) 삭제 or 체크표시
    document.querySelector('ul').addEventListener('click', deleteOrCheck);
}

// form제출
function addToDo(event){
    event.preventDefault(); // 기본적으로 실행하는 동작 막기
    let todoValue = document.querySelector('input');
    if (todoValue !== ''){
        console.log(todoValue.value);
        addTask(todoValue.value); // li 태그로 실제 화면에 추가
        todoValue.value = ''; // 다음값을 입력받기 위해 초기화
    }
}

function addTask(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="delete">X</span><input type="checkbox"/><label>${value}</label>`;
    ul.appendChild(li); // 자식 엘리먼트 추가
    document.querySelector('.todolist').style.display = 'block';
}

// delete all 전체 삭제
function clearToDoList(event){
    let ul = document.querySelector('ul').innerHTML = '';
}

// 삭제 or 체크
function deleteOrCheck(event){
    if(event.target.className == 'delete'){
        deleteToDo(event); // 삭제함수
    } else {
        checkToDo(event);
    }
}

// 삭제함수
function deleteToDo(event){
    let remove = event.target.parentNode; // event.target : 자식, delete
    let parent = remove.parentNode; // delete 클래스명ㅇ르 가진 엘리먼트의 부모노드
    parent.removeChild(remove);
}

// 체크함수
function checkToDo(event){
    let todo = event.target.nextSibling;
    // 체크 박수가 눌린 경우 -> 글자색 변경
    if (event.target.checked){
        todo.style.color = '#000000';
    }
    // 체크 박스가 안눌린 경우 -> 
    else {
        todo.style.color = '#c3c3c3';
    }
}