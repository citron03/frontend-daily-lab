# Frontend Daily Lab - Copilot Instructions

이 저장소는 프론트엔드 개념을 직접 구현하며 학습하는 실험실입니다.

## 핵심 원칙

- **No build tools** - 순수 JS/HTML/CSS만 사용 (React 폴더 제외)
- **구현은 사용자 몫** - 코드 완성본 제공 금지, 힌트와 구조만 제공
- **Code first, README second** - 간결하게 유지

## 폴더 구조

```
├─ javascript/   # JS 런타임 동작 (스코프, 클로저, 이벤트 루프)
├─ browser/      # Web API (IntersectionObserver, Storage, BFCache)
├─ css/          # 순수 CSS 컴포넌트 및 트릭
├─ react/        # React 전용 실험
└─ utils/        # 유틸리티 함수 구현 (debounce, throttle 등)
```

## 코드 스타일

- 한글 주석 사용
- 함수/변수명은 영어 camelCase
- 각 파일 상단에 주제 설명 주석 포함
- 콘솔 출력으로 결과 확인 가능하게 구성
