# 커밋 메시지 작성

## 형식

```
lab: <카테고리> - <주제>
```

## 카테고리

| 폴더        | 카테고리 |
| ----------- | -------- |
| javascript/ | js       |
| browser/    | browser  |
| css/        | css      |
| react/      | react    |
| utils/      | utils    |

## 규칙

1. 소문자만 사용
2. 50자 이내
3. 마침표 없음
4. 현재형 동사 (add, fix, update)

## 예시

```bash
# 새 실험 추가
lab: js - closure memoization
lab: browser - intersection observer
lab: css - glassmorphism card
lab: utils - deep clone

# 기존 실험 수정
lab: js - fix event loop quiz
lab: css - update skeleton animation

# 여러 파일 수정
lab: utils - add curry, pipe functions
```

## 본문 (선택)

복잡한 변경시 한 줄 띄우고 상세 내용 추가:

```
lab: js - promise chain

- 기본 체이닝 문제 추가
- 에러 핸들링 섹션 추가
- async/await 비교 퀴즈 포함
```
