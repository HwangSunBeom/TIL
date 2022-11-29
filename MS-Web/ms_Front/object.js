// 본인의 이름 객체
// 나이, 성별, 학과, 학번, 이메일
let 황순범 = {
    age : 25,
    gender : 'male',
    major : 'computer',
    studentnumber : '20170846',
    email : 'wsbs9805@naver.com'
};
// 1. 나이 -> 20
황순범.age = 25;
// 2. 이메일 삭제
delete 황순범.email;
// 3. 본인의 주소를 추가
황순범.address = '서울특별시 강남구 헌릉로 590길 63';

console.log(황순범);

// 클래스 생성
// 프론트 멤버

// 1. 클래스 정의 (이름, 번호)
class Front {
    constructor(name, number){
        this.name = name;
        this.number = number;
    }
}

// 2. 클래스를 활용한 인스턴스 생성
const 유지민 = new Front('유지민', 1234);
const 이준규 = new Front('이준규', 2345);

console.log(유지민);