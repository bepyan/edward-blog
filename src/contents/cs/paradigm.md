---
title: "객체지향과 함수형 프로그래밍"
date: "2021-10-12"
draft: false
path: "/blog/cs/paradigm"
series: "면접 대비하기"
tags: ["CS", "면접"]
---

<br>
<br>

### 🗡 객체지향 프로그래밍 OOP

**( keyword )**

`객체` `추상화` `캡슐화` `상속` `다향성`

**( 핵심 )**

객체와 객체간의 상호작용을 통해 로직을 구현하는 프로그래밍 방법론으로 **재사용성**과 **변형가능성**을 높일 수 있다.

**( 근거 )**

- 로직에 필요한 데이터를 추상화하여 속성과 행위를 **변수와 메소드**로 객체를 정의한다.
- 객체를 **캡슐**처럼 사용하여 별도의 코드수정 없이 다양한 로직에서 재사용할 수 있다.
- 객체에 수정이 필요한 부분에 대해선 **상속**과 **다향성**을 활용하여 작은 수정으로 다양한 로직을 구현할 수 있다.

**( 예시 )**

쇼핑몰 사이트 구현<del>하는데 있어 사용자를 '고객'이라는 이름으로 객체를 정의하여 사이트에 필요한 아이디, 전화번호, 주소 등 정보와 로그인하기, 카트에 담기 등 기능을 객체에 정의하여 </del>

**( SOLID )**

- **S**RP
  - 단일 책임 원칙 (Single responsibility principle)
  - 한 클래스는 하나의 책임만 가져야 한다.
- **O**CP
  - 개방-폐쇄 원칙 (Open/closed principle)
  - 소프트웨어 요소는 확장에는 열려 있으나 변경에는 닫혀 있어야 한다.
- **L**SP
  - 리스코프 치환 원칙 (Liskov substitution principle)
  - "프로그램의 객체는 프로그램의 정확성을 깨뜨리지 않으면서 하위 타입의 인스턴스로 바꿀 수 있어야 한다." 계약에 의한 설계를 참고하라.
- **I**SP
  - 인터페이스 분리 원칙 (Interface segregation principle)
  - "특정 클라이언트를 위한 인터페이스 여러 개가 범용 인터페이스 하나보다 낫다."
- **D**IP
  - 의존관계 역전 원칙 (Dependency inversion principle)
  - 프로그래머는 "추상화에 의존해야지, 구체화에 의존하면 안된다." 의존성 주입은 이 원칙을 따르는 방법 중 하나다.

**( 꼬리질문 )**

<details>
<summary>&nbsp; 객체와 인스턴스의 차이가 뭔가요?</summary>
<p>

- 실제 메모리상에 할당되었는지 여부이다.
- 클래스는 문제를 해결하기 위해 한 개체를 변수와 메소드로 추상적으로 정의한 것이다. 인스턴스는 클래스에서 정의한 것을 실제 메모리에 할당된 데이터이다.

</p>
</details>

<br>

<details>
<summary>&nbsp; 객체지향 프로그래밍에서 어떤 단점이 있을까요?</summary>
<p>

- 객체를 설계하는데 많은 시간과 노력이 소요된다.<br>기능 로직에 대한 이해가 필요하고 불필요한 속성을 걸러내야하고 공통된 속성을 구별해야 한다.
- 처리속도가 상대적으로 느리다.<br>객체의 한 기능을 수행하기 위해서 객체가 정의된 데이터를 선언되어야 한다.
- 맴버변수를 공유함으로인해 변수상태가 변경되어 예상치못한 버그가 발생할 수 있다. <br>멀티쓰레딩환경에서 더 이를 보완한 것이 [함수형 프로그래밍](#-함수형-프로그래밍-fp)이다.

</p>
</details>

<br>

<details>
<summary>&nbsp; 객체지향 프로그래밍에서 추상화는 뭔가요?</summary>
<p>

- 클래스를 정의하는 것이다.
- 로직에 불필요한 정보는 숨기고 중요한 정보를 표현함으로 공통의 속성이나 기능을 묶어 이름을 붙인다.

</p>
</details>

<br>

<details>
<summary>&nbsp; 객체지향 프로그래밍에서 다향성이 무엇인가요?</summary>
<p>

- 하나의 변수명(함수명)이 상황에 따라 다른 의미로 해석될 수 있는 것이다.
- 대표적으로 overriding과 overloading하는 방법이 있다.

</p>
</details>

<br>

<details>
<summary>&nbsp; 오버라이딩과 오버로딩이 뭐엇이고 차이가 뭔가요?</summary>
<p>

- 오버라이딩은 부모 클래스로 상속받은 메소드를 재정의하는 것이다.
- 오버로딩은 같은 이름 함수를 정의하는데 매개변수를 다르게 설정하여 매개변수에 따라 다르게 호출될 수 있게하는 것이다.
- 같은 이름의 함수를 재정의 하는가, 추가하는가의 차이가 있다.

</p>
</details>

<br>

<details>
<summary>&nbsp; 개방 패쇄 원칙에 대해서 설명해주세요.</summary>
<p>

- 개체는 확장에는 열려 있어야 하고, 변경에는 닫혀있어야 한다.

</p>
</details>

<br>

<br>
<br>

### 🗡 함수형 프로그래밍 FP

**( keyword )**

`순수함수` `불변성` `선언형`

**( 핵심 )**

순수함수를 통해 **side effect의 최소화**를 지향하고 함수 바탕으로 로직을 구현하여 **모듈화** 수준을 높이는 프로그래밍 방법론이다.

**( 근거 )**

- 순수함수는 실행되면서 외부 상태에 영향을 주지 않는다. 데이터를 변경해야하는 경우 해당 데이터의 복사본을 만들어 작업한다.
- 고차함수, 합성함수, 익명함수 등 특성을 활용하여 순수함수를 다양한 로직에서 쉽게 활용할 수 있다.
- 또한 함수를 활용하는 과정에서 선언형 프로그래밍을 따라 코드를 간결화시킨다.

**( TMI )**

- **선언형 프로그래밍**
  - 어떻게 행하는지가 아닌 무엇을 하는지 나타내는 것이다.
  - 코드는 간결해지지만 이를 읽기위해서 학습이 필요하다. (for vs map)
- **고차함수** : 파라미터로 함수를 전달할 수 있고 함수를 반환할 수 있는 함수. (고계함수)
- **합성함수** : 함수를 여러 함수의 조합을 통해
- **익명함수** : 이름이 없는 함수. 람다식을 통해 함수를 간편하게 실행시킬 수 있다.
- **일급객체** : 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체.
- 사용자와 상호작용을 하려면 상태변화는 피할 수 없는 문제이다. 다만 함수형 프로그래밍은 그 변하는 상태를 최소화하겠다는 것이다!
- 모듈화 수준을 높인다는 것은 코드가 조립, 재구성이 쉽다는 것이다.

<br>

**( map )**

- array를 변환하면서 작업 의도를 더 명확하게 표현
- 어떻게가 아닌 **무업을 달성하려는지**를 더 잘 표현할 수 있게 된다.
- flatMap. map을 수행 후 새로운 배열로 평탄화 한다.
  ```js
  ;[1, 2, 3].flatMap(v => [v, v]) // [1, 1, 2, 2, 3, 3]
  ```

<br>

**( Functor )**

- map 함수를 지원하는 컨테이너 타입 ( map을 구현하는 타입 )
- 어떤 값을 가지고 있는 구조와 구조를 유지한채 그 값에다 함수를 적용할 수 있는 인터페이스의 조합.
- 컨테이너에서 값을 빼내어 특정 함수를 사용하여 타입과 값을 변경하고 다시 컨테이너에 넣는 것.

  ```js
  const arr = [1, 2, 3]

  const doubledArr = []
  for (const v in arr) {
    doubleArr.push(v * 2)
  }

  console.log(doubledArr)
  ```

<br>

**( Monad )**

- Pure + Compose ( flatMap 함수를 구현하는 타입 )
- 합성될 수 있는 연산

<br>

**( 꼬리질문 )**

<details>
<summary>&nbsp; 객체지향과 함수형 프로그래밍에서 가장 큰 차이점이 뭘까요?</summary>
<p>

- **상태를 관리하는 방법**에서 큰 차이가 있다.
- 객체지향은 객체 내부에 상태를 저장하여 외부로부터 상태에 대한 접근을 제어한다.
- 함수형은 상태를 제어하는 대신 상태를 저장하지않는 것에 주력한다.

<br>

- 객체지향은 캡슐화를 통해, 함수형은 동작부분을 최소화하여 코드를 간결시킨다.

</p>
</details>

<br>

<details>
<summary>&nbsp; 함수형 프로그래밍에서 순수함수가 뭔가요?</summary>
<p>

- 함수가 순수하다는 뜻으로 함수의 실행으로 인해 외부 상태에 영향을 주지 않는 것이다.
- 파라미터를 변환해야하는 경우 해당 데이터의 복사본을 만들어 작업하여 call by reference의 상황을 회피한다.
- 참조에 투명하다고 말할 수 있다.

</p>
</details>

<br>

<details>
<summary>&nbsp; side effect는 뭘 말하는건가요?</summary>
<p>

- 한국어론 '부작용'을 뜻한다.
- 한 변수의 상태를 변경했는데 예상치 못한 다른 변수의 상태도 변경되는 현상이다.
- 버그가 쉽게 발생하고 테스트할 때는 발생하지 않으나 사용하면서 버그가 발생할 수 있기 때문에 문제를 고치기 어렵다.

</p>
</details>

<br>

<br>
<br>

### 🗡 참고

- https://jeong-pro.tistory.com/95
- https://mangkyu.tistory.com/88
- https://futurecreator.github.io/2018/10/05/why-functional-programming/
- https://codechaser.tistory.com/81
- https://velog.io/@kyusung/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%9A%94%EC%95%BD
- https://min-i0212.tistory.com/13
- https://overcurried.com/3%EB%B6%84%20%EB%AA%A8%EB%82%98%EB%93%9C/
