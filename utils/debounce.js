/**
 * debounce - 연속 호출 시 마지막 호출만 실행
 *
 * 🎯 구현할 것:
 * - debounce(fn, delay) 함수 구현
 * - 연속 호출 시 타이머 리셋
 *
 * 💭 고민해볼 문제:
 * 1. 검색창에서 타이핑할 때마다 API 호출하면 왜 문제일까?
 *
 * 2. leading edge vs trailing edge debounce 차이는?
 *    - trailing: 마지막 호출 후 delay 뒤에 실행 (기본)
 *    - leading: 첫 호출 즉시 실행, 이후 delay 동안 무시
 *
 * 3. this 바인딩을 유지하려면 어떻게 해야 할까?
 *
 * 4. cancel 기능을 추가하려면?
 *
 * 📍 사용처:
 * - 검색 input (타이핑 완료 후 검색)
 * - 윈도우 resize 이벤트
 * - 폼 자동 저장
 */

// 여기에 구현
