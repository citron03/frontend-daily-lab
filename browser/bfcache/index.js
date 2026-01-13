/**
 * BFCache (Back/Forward Cache) 실험
 *
 * 🎯 구현할 것:
 * - pageshow / pagehide 이벤트로 BFCache 감지
 * - event.persisted로 복원 여부 확인
 *
 * 💭 고민해볼 문제:
 * 1. 뒤로가기 시 페이지가 다시 로드되나, 캐시에서 복원되나?
 *
 * 2. BFCache를 막는 요소들은 뭐가 있을까?
 *    - unload 이벤트 리스너
 *    - Cache-Control: no-store
 *    - 열린 IndexedDB 연결
 *    - WebSocket 연결
 *
 * 3. pagehide에서 persisted가 false면 무슨 뜻일까?
 *
 * 4. SPA에서 BFCache는 어떻게 동작할까?
 *
 * 🔗 관련 개념:
 * - Page Lifecycle API
 * - beforeunload vs unload vs pagehide
 * - Performance (페이지 로드 최적화)
 */

// 여기에 구현
