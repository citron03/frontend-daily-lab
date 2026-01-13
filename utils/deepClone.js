/**
 * Deep Clone - 깊은 복사 구현하기
 * 
 * 참조형 데이터를 완전히 새로운 메모리에 복사
 */

// ===========================================
// 1. 얕은 복사 문제 확인
// ===========================================
const original = {
  name: 'Alice',
  nested: { city: 'Seoul' }
};

const shallowCopy = { ...original };
shallowCopy.nested.city = 'Busan';
console.log(original.nested.city); // 'Busan' ← 원본도 변경됨!


// ===========================================
// 2. JSON 방식 (간단하지만 한계 있음)
// ===========================================
function jsonClone(obj) {
  // TODO: JSON.stringify + JSON.parse 로 구현
  return null;
}

// ❌ 한계: undefined, 함수, Symbol, Date, RegExp, Map, Set 등 손실됨


// ===========================================
// 3. 재귀적 깊은 복사 (직접 구현)
// ===========================================
/**
 * @param {any} obj - 복사할 객체
 * @param {WeakMap} hash - 순환 참조 처리용 (내부 사용)
 */
function deepClone(obj, hash = new WeakMap()) {
  // TODO: 아래 순서로 구현하세요
  
  // 1) 기본 타입 처리 (null, 원시값)
  // if (obj === null || typeof obj !== 'object') return ???
  
  // 2) 순환 참조 처리
  // if (hash.has(obj)) return ???
  
  // 3) 특수 객체 처리
  // - Date: new Date(obj)
  // - RegExp: new RegExp(obj.source, obj.flags)
  // - Map: 새 Map 생성 후 각 요소 deepClone
  // - Set: 새 Set 생성 후 각 요소 deepClone
  
  // 4) 배열/객체 복사
  // - Array.isArray(obj) 체크
  // - Object.keys로 순회하며 재귀 호출
  
  return null; // 구현하세요
}


// ===========================================
// 테스트
// ===========================================
const complex = {
  name: 'Test',
  date: new Date(),
  nested: { a: 1 },
  arr: [1, 2, { b: 3 }]
};

// 구현 후 테스트
// const cloned = deepClone(complex);
// cloned.nested.a = 999;
// console.log('원본:', complex.nested.a);  // 1 유지되어야 함
// console.log('복사본:', cloned.nested.a); // 999


// 순환 참조 테스트
const circular = { name: 'circular' };
circular.self = circular;

// const circularClone = deepClone(circular);
// console.log(circularClone.self === circularClone); // true 여야 함


module.exports = { deepClone, jsonClone };
