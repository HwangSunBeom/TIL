console.log(1);


// promise 없이 구현
// 회원 정보 -> 로그인 & 이 사람의 직책(role)
class UserStorage {
    loginUser(id ,pw, login_success, login_err){
        setTimeout(()=>{
            if(( id === 'jimin' && pw ==='1234') || (id === 'front' && pw === '5678')){
                login_success(id);
            } else{
                login_err(new Error('fuck'));
            }
        }, 1000);
    }
    getRoles(user, role_success, role_err){
        setTimeout(()=>{
            if(user === 'jimin'){
                role_success({name : 'jimin', role : 'developer'})
            } else if (user === 'front'){
                role_success({name : 'front', role : 'god'})
            } else {
                role_err(new Error('fuck'))
            }
        }, 2000)
    }
}
// 1. create user
const member = new UserStorage();
// 2. input id&pw
const input_id = prompt('id');
const input_pw = prompt('pw');
// 3. login -> get role
member.loginUser(
    input_id, input_pw, (login_success_id) => {
        member.getRoles(login_success_id, (success_id_role) => {
            alert(`${success_id_role.name}'s role is ${success_id_role.role}`)
        },
        (role_err)=>{
            console.log(role_err);
        })
    },
    (user_err)=>{
        console.log(user_err);
    }
)