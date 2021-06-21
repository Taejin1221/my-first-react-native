# Component

- 재사용할 수 있는 조립 블록
- 화면에 나타나는 UI 요소

---

# JSX

## 개요

- 객체 생성과 함수 로출을 위한 문법적 편의를 제공하기 위해 만들어진 확장 기능
- 장점: 가독성이 높음, 작성하기 쉬움, 중첨된 구조 나타내기 용이

## 특징

- 여러개의 요소를 표현할 때는 반드시 하나의 부모로 감싸야 함

## 사용

- 변수 사용법: {}안에 변수명을 넣어 사용

  ```js
  return <Text> My name is {name} </Text>;
  ```

---

# Fragment Component

- 특정 역할을 하는 컴포넌트로 감싸지 않고 여러 개의 컴포넌트를 반환하고 싶은 경우에 사용하는 컴포넌트

  - style 속성 사용 불가능

  ```js
  import { Fragment } from "react";

  const App = () => {
    return <Fragment> ... </Fragment>;
  };
  ```

- 축약형
  ```js
  // Nothing to import
  const App = () => {
    return <> ... </>;
  };
  ```
