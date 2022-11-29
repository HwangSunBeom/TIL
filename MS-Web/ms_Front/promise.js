console.log(1);


// promise 없이 구현
// 회원 정보 -> 로그인 & 이 사람의 직책(role)
class UserStorage {
    loginUser(id ,pw){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(( id === 'jimin' && pw ==='1234') || (id === 'front' && pw === '5678')){
                    resolve(id);
                } else{
                    reject(new Error('fuck'));
                }
            }, 1000);
        })
    }
    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(user === 'jimin'){
                    resolve({name : 'jimin', role : 'developer'})
                } else if (user === 'front'){
                    resolve({name : 'front', role : 'god'})
                } else {
                    reject(new Error('fuck'))
                }
            }, 1000);
        })
    }
}
// 1. create user
const member = new UserStorage();
// 2. input id&pw
const input_id = prompt('id');
const input_pw = prompt('pw');
// 3. login -> get role
// member.loginUser(
//     input_id, input_pw, (login_success_id) => {
//         member.getRoles(login_success_id, (success_id_role) => {
//             alert(`${success_id_role.name}'s role is ${success_id_role.role}`)
//         },
//         (role_err)=>{
//             console.log(role_err);
//         })
//     },
//     (user_err)=>{
//         console.log(user_err);
//     }
// )

// 4. change promise
member.loginUser(
    input_id, input_pw
).then(member.getRoles)
.then((success_id_role)=>alert(`${success_id_role.name}'s role is ${success_id_role.role}`))
.catch(console.log)