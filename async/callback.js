'use strict';

// JavaScript is synchronous.
// 싱크로너스 == 순서대로 코드가 실행되는 것.
// Execute the code block in order after histing.
// hoisting: var, function declarration
// 호이스팅 == 변수, 함수 선언이 제일 위에서 실행됨.
// async == 에이싱크로너스의 경우 언제 코드가 실행되는지 알 수 없는 것
console.log('1');
console.log('2');
console.log('3');
// 콜백 함수의 선언
setTimeout(function(){
    console.log('2');
}, 1000);
console.log('1');

// 싱크로너스 콜백
function printImmediately(print){
    print();
}
printImmediately(()=> console.log('hello'));

// 어싱크로너스 콜백
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);

// 콜백지옥 예제 작성
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if (user === 'ellie'){
                onSuccess({name:'ellie', role:'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password,
    user =>{
        userStorage.getRoles(
            user,
            userWithRole =>{
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
)