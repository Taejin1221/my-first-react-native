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

## Custom Component 만들기

- `import React from 'react'`
  - JSX는 React.createElement를 호출하는 코드로 컴파일되므로 반드시 작성

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

---

# TouchableOpacity

## Property

- onPress
  - 버튼이 눌렸을 때 호출되는 함수
  - TouchableWithoutFeedback Component를 상속받았기 때문에 onPress 속성 사용 가능

---

# Props and State

- Component가 UI 뿐만 아니라 다양한 기능을 담당할 수 있도록 도와주는 기능들

## Props

- Properties의 줄임말
- 부모 컴포넌트로부터 전달된 속성값 or 상속받은 속성값
- 사용법

  - props 이름으로 사용
    - 전달
      ```js
      <Component propName1="value" propName2="value" />
      ```
    - 사용
      ```js
      const component = (props) => {
        const variable = props.propName2;
        return <Component> {props.propName1} </Component>;
      };
      ```
  - Children으로 사용

    - 전달
      ```js
      <Component> value </Component>
      ```
    - 사용
      ```js
      return <Component> {props.children} </Component>;
      ```

  - defaultProps
    - props가 전달되지 않았을경우 defaultProps가 전달 됨
      ```js
      const component () => {...};
      component.defaultProps = {
        propName1: value,
        propName2: value,
      };
      ```

### propTypes

- 전달받아야하는 props의 타입과 필수 여부 지정 가능
- 사용법
  - import
    ```js
    import PropTypes from "prop-types";
    ```
  - prop-types 지정
    ```js
    component.propTypes = {
      propName1: PropTypes.string.isRequired, // string이고 필수로 전달 되어야 함
      propName2: PropTypes.number.isRequired, // type이 number여야하고 필수로 전달되어야 함
      propName3: PropTypes.number, // type이 number여야함
      propName4: PropTypes.func, // type이 함수여야함
    };
    ```

## state

- props와 달리 컴포넌트 내부에서 생성되고 값을 변경할 수 있음
- state(상태)

  - 컴포넌트에서 변화할 수 있는 값
  - 상태가 변하면 Re-rendering 됨

### useState

- 함수형 컴포넌트에서 상태를 관리할 수 있도록 해줌
- 사용법

  - 기본

    - 상태를 관리하는 변수, 그 변수를 변경할 수 있는 setter 함수를 배열로 반환
      - 초깃값을 주지 않으면 undefined로 설정 (에러 발생하기 쉬움)
      ```js
      const [state, setState] = useState(initialState);
      setState(state + 1);
      ```
    - state 여러개도 사용 가능

      ```js
      const [state1, setState1] = useState(initialState1);
      const [state2, setState2] = useState(initialState2);

      setState1(state1 + 1);
      setState2(state2 + 2);
      ```
