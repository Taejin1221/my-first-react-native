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
- false는 렌더링 하지 않음
- null은 허용하지만 undefined는 오류 발생

  - 아무것도 표시 되지 않음

    ```js
    const App = () => {
      return null;
    };
    ```

  - Error 발생
    ```js
    const App = () => {
      return undefined;
    };
    ```

## 사용

- 변수 사용법: {}안에 변수명을 넣어 사용

  ```js
  return <Text> My name is {name} </Text>;
  ```

- 조건문 사용법

  - if statement: 즉시 실행 함수 형태로 작성

    `(() => { })())`

    ```js
    <Text style={styles.text}>
      {(() => {
        if (name === "Hanbit") return "My name is Hanbit";
        else if (name === "Taejin") return "My name is Taejin";
        else return "My name is React Native";
      })()}
    </Text>
    ```

  - 삼항 연산자: 변수 사용처럼 { } 안에 연산 사용

    ```js
    <Text style={styles.text}>
      {" "}
      My name is {name === "Taejin" ? "Taejin An" : "React Native"}
    </Text>
    ```

  - 논리 연산자: JSX는 false를 렌더링 하지 않는 다는 점을 이용, { } 안에 연산 사용

  ```js
  {
    name === "Taejin" && <Text style={styles.text}> My name is Taejin </Text>;
  }
  {
    name !== "Taejin" && (
      <Text style={styles.text}> My name is not Taejin </Text>
    );
  }

  {
    name !== "Taejin" || <Text style={styles.text}> My name is Taejin </Text>;
  }

  {
    name === "Taejin" || (
      <Text style={styles.text}> My name is not Taejin </Text>
    );
  }
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

---

# Button Component

## Property

- title
  - 버튼 내부에 출력되는 텍스트
- onPress
  - 버튼이 눌렸을 때 호출되는 함수
- color
  - IOS: 텍스트 색을 나타내는 값
  - Android: 바탕색을 나타내는 값
