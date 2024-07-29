4.  코딩 테스트 필수 문법

### 1. 빌트인 데이터 타입

### 2. 참조 타입

### 3. 함수

### 4. 코딩 테스트 코드 구현 노하우

-   구조 분해 할당

    ```jsx
    let a = 5;
    let b = 10;
    let temp;

    // 교환 로직
    temp = a;
    a = b;
    b = temp;

    // 구조 분해 할당으로 쉽게 하기
    [a, b] = [b, a];
    ```

-   비구조화 할당

    ```jsx
    // 비구조화 할당
    const makePerson = ({ familyName, givenName, address }) => {
        return {
            name: `${givenName} ${familyName}`,
            address,
        };
    };

    const person = makePerson({
        familyName: "Doe",
        givenName: "John",
        address: "Seoul",
    });

    console.log(person); // { name: 'John Doe', address: 'Seoul' }
    ```

-   배열 내 같은 요소 제거하기
