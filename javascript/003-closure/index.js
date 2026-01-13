/**
 * Closure - 클로저 완벽 이해하기
 * 
 * 클로저: 함수가 자신이 생성된 렉시컬 스코프를 기억하는 현상
 */

// ===========================================
// 1. 기본 클로저 패턴 - 카운터 만들기
// ===========================================
// TODO: createCounter 함수 구현
// - count 변수를 외부에서 직접 접근 불가하게 만들기 (private)
// - increment, decrement, getCount 메서드 반환

function createCounter() {
  // 구현하세요
}


// ===========================================
// 2. 클로저 + 루프 문제 (면접 단골!)
// ===========================================
// TODO: 아래 코드의 문제점을 파악하고 해결책 구현

// ❌ 문제 상황: var 사용시 어떤 값이 출력될까요?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var:', i), 100);
}
// 예상 출력: ???

// ✅ 해결 1: let 사용
// TODO: let으로 수정해보세요

// ✅ 해결 2: IIFE로 클로저 생성
// TODO: IIFE 패턴으로 해결해보세요


// ===========================================
// 3. 실용적인 클로저: 메모이제이션
// ===========================================
// TODO: memoize 함수 구현
// - cache 객체에 결과 저장
// - 같은 인자로 호출시 캐시된 결과 반환

function memoize(fn) {
  // 힌트: WeakMap 또는 일반 객체를 cache로 사용
  // 힌트: JSON.stringify(args)로 키 생성
  
  // 구현하세요
}


// ===========================================
// 4. 모듈 패턴 만들기
// ===========================================
// TODO: IIFE + 클로저로 UserModule 구현
// - private: users 배열, idCounter 변수
// - public: add(name), getAll(), findById(id)

const UserModule = (() => {
  // 구현하세요
})();


// ===========================================
// 테스트 코드 (구현 후 주석 해제)
// ===========================================
// const counter = createCounter();
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.getCount());  // 2

// const expensiveCalc = memoize((n) => n * n);
// console.log(expensiveCalc(5));  // 새로 계산
// console.log(expensiveCalc(5));  // 캐시 히트

// console.log(UserModule.add('Alice'));
// console.log(UserModule.getAll());
