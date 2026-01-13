/**
 * this 바인딩 - JavaScript에서 가장 혼란스러운 개념
 * 
 * 핵심: this는 "호출 방식"에 따라 결정된다! (선언 위치 X)
 */

// ===========================================
// 1. 기본 바인딩 (Default Binding)
// ===========================================
// TODO: 아래 함수 실행시 this는 무엇일까?

function showThis() {
  console.log(this);
}

showThis();
// 예상: ??? (strict mode vs non-strict mode 차이도 생각해보기)


// ===========================================
// 2. 암시적 바인딩 (Implicit Binding)
// ===========================================
// TODO: 각각 this.name이 무엇인지 예측해보세요

const user = {
  name: 'Alice',
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

user.greet(); // this.name = ???

const greetFn = user.greet;
greetFn();    // this.name = ??? (바인딩 소실!)


// ===========================================
// 3. 명시적 바인딩 (call, apply, bind)
// ===========================================
// TODO: call, apply, bind 차이점 직접 실험해보기

function introduce(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const person = { name: 'Bob' };

// call 사용해서 호출해보세요
// introduce.call(???)

// apply 사용해서 호출해보세요 (인자를 배열로)
// introduce.apply(???)

// bind로 새 함수 만들어보세요
// const boundFn = introduce.bind(???)


// ===========================================
// 4. new 바인딩
// ===========================================
// TODO: new로 호출시 this는 어떻게 되는지 확인

function Animal(name) {
  // new로 호출시 this = ???
  this.name = name;
}

const dog = new Animal('Dog');
console.log(dog.name); // ???


// ===========================================
// 5. 화살표 함수의 this (Lexical this)
// ===========================================
// TODO: 일반 함수 vs 화살표 함수 차이 실험

const team = {
  name: 'Dev Team',
  members: ['Alice', 'Bob'],
  
  // ❌ 일반 함수 버전 - this가 뭘까?
  showMembersBad() {
    this.members.forEach(function(member) {
      console.log(`${member} in ${this.name}`);
      // this.name = ???
    });
  },
  
  // ✅ 화살표 함수 버전 - 직접 구현해보세요
  showMembersGood() {
    // 구현하세요
  }
};


// ===========================================
// 6. 바인딩 우선순위
// ===========================================
/**
 * 우선순위 (높은 순):
 * 1. new 바인딩
 * 2. 명시적 바인딩 (call/apply/bind)
 * 3. 암시적 바인딩 (obj.method)
 * 4. 기본 바인딩
 */

// TODO: new가 bind보다 우선하는지 직접 테스트해보세요
