/**
 * Curry - 커링 함수 구현
 * 
 * 여러 인자를 받는 함수를 단일 인자 함수들의 체인으로 변환
 */

// ===========================================
// 커링 함수 구현
// ===========================================
/**
 * @param {Function} fn - 커링할 함수
 * @returns {Function} - 커링된 함수
 */
function curry(fn) {
  // TODO: 구현하세요
  // 힌트:
  // - fn.length로 필요한 인자 개수 확인
  // - args.length >= fn.length면 fn 실행
  // - 아니면 다음 인자를 기다리는 함수 반환
  
  return function curried(...args) {
    // 구현하세요
  };
}


// ===========================================
// 테스트
// ===========================================
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

// 아래가 모두 6을 반환해야 함
// console.log(curriedAdd(1)(2)(3));
// console.log(curriedAdd(1, 2)(3));
// console.log(curriedAdd(1)(2, 3));
// console.log(curriedAdd(1, 2, 3));


// ===========================================
// 실용 예제 1: API 요청 빌더
// ===========================================
// TODO: curry를 활용해서 구현해보세요

// const request = curry((method, url, data) => {
//   console.log(`${method} ${url}`, data);
// });

// const get = request('GET');
// const post = request('POST');

// get('/users')(null);
// post('/users')({ name: 'Alice' });


// ===========================================
// 실용 예제 2: 함수 합성 (Pipe)
// ===========================================
// TODO: pipe 함수 구현
// 왼쪽에서 오른쪽으로 함수들을 순차 실행

// const pipe = (...fns) => (x) => ???

// const double = n => n * 2;
// const addTen = n => n + 10;

// const calculate = pipe(double, addTen);
// console.log(calculate(5)); // 20 (5 * 2 + 10)


module.exports = { curry };
