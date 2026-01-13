/**
 * Event Loop - 비동기 JavaScript의 핵심
 * 
 * 실행 순서: Call Stack → Microtask Queue → Macrotask Queue
 */

// ===========================================
// 1. 기본 실행 순서 예측하기
// ===========================================
// TODO: 아래 코드의 출력 순서를 예측해보세요

console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');

// 예상 출력 순서: ???


// ===========================================
// 2. 복잡한 순서 퀴즈 (면접 단골!)
// ===========================================
// TODO: 출력 순서를 예측하고 실행해서 확인해보세요

setTimeout(() => console.log('A'), 0);

Promise.resolve()
  .then(() => {
    console.log('B');
    setTimeout(() => console.log('C'), 0);
  })
  .then(() => console.log('D'));

setTimeout(() => console.log('E'), 0);

console.log('F');

// 예상 출력 순서: ???
// 힌트: Microtask는 모두 처리된 후 Macrotask 하나 실행


// ===========================================
// 3. async/await 동작 이해하기
// ===========================================
// TODO: 출력 순서 예측

async function asyncExample() {
  console.log('async 시작');
  await Promise.resolve();
  console.log('await 이후');
  return 'done';
}

console.log('호출 전');
asyncExample().then(console.log);
console.log('호출 후');

// 예상 출력 순서: ???
// 힌트: await 이후는 microtask로 스케줄됨


// ===========================================
// 4. 무거운 작업 분할하기 (실용 예제)
// ===========================================
// TODO: processInChunks 함수 구현
// - 큰 배열을 chunkSize만큼 나눠서 처리
// - 각 청크 사이에 setTimeout으로 UI 차단 방지

function processInChunks(items, chunkSize, callback) {
  // 힌트: 재귀 + setTimeout 사용
  // 힌트: slice로 청크 분리
  
  // 구현하세요
}


// ===========================================
// 핵심 개념 정리
// ===========================================
/**
 * Macrotasks: setTimeout, setInterval, I/O, UI rendering
 * Microtasks: Promise.then, queueMicrotask, MutationObserver
 * 
 * 순서:
 * 1. Call Stack 비워짐
 * 2. Microtask Queue 전체 처리
 * 3. Macrotask Queue에서 하나 처리
 * 4. 2-3 반복
 */
