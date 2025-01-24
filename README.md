# Sparta_OlympicMedalTracker

Sparta_OlympicMedalTracker는 올림픽에 참가한 국가들의 메달 정보를 관리하는 웹 애플리케이션입니다.

---

## 📁 파일 구조

---

## 💻 프로젝트 실행

- 클론 및 이동

```bash
git clone <repository-url>
cd <project-directory>
```

- 필요한 패키지 설치

1. yarn 패키지 관리자 설치

```bash
npm install -g yarn
yarn -v // 버전 확인
```

2. (초기 설정에만 필요) React, Vite 환경 구성

```bash
yarn create vite <project-name> --template react
cd <project-name>
yarn // 필요한 패키지 설치
```

- 실행

```bash
yarn dev
```

---

## 🧩 기술 스택

- React: 컴포넌트 기반의 UI 라이브러리
- Vite: 빠른 빌드 도구
- CSS: 스타일링

---

## 📌 필수 기능

### 1. 국가 추가

- 사용자가 form에 국가명과 메달 정보를 입력하면, 해당 정보가 리스트에 추가
- 중복된 국가명은 추가되지 않도록 처리하며, 경고 메세지 표시

### 2. 국가 수정

- 기존 리스트에 존재하는 국가에 대해서, 업데이트 버튼을 통해 메달 정보 수정
- 존재하지 않는 국가에 대해서는 아무 동작하지 않게 처리

### 3. 국가 삭제

- 리스트 아이템 내 삭제 버튼을 통해 국가 삭제

### 4. 국가 정렬

- 금메달 수 또는 총 메달 수를 기준으로 내림차순 정렬
- **input** 태그의 type을 **radio**로 하여 라디오 버튼을 통해 옵션 선택

### 5. 스토리지 연동

- 리스트 아이템들은 **localstorage**에 저장되어, 페이지 새로고침 후에도 데이터 유지

---

## 🛠️ 트러블 슈팅

### 1번

- **링크**: https://velog.io/@rpyjko/useState-set-%ED%95%A8%EC%88%98-%EC%A7%81%ED%9B%84-%EC%83%81%ED%83%9C-%EA%B0%92-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EC%8B%A4%ED%8C%A8
