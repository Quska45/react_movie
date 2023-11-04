## React Folder Structure in 5 steps

- [URL](https://www.robinwieruch.de/react-folder-structure/)
- 리액트 파일구조를 어떻게 잡을지에 대한 가이드를 따라하면서 구현해볼 예정
<hr/>

### 1. 한 파일에 모든 컴포넌트를 다 만들기.

- 처음엔, 혹은 간단한 컴포넌트는 이렇게 할수도 있다.
- 하지만 혼자 개발하는 것도 아니고 이렇게 했다가 무슨 일이 생길 지 모르는 법이다.
- 다음으로는 파일을 여러개의 파일로 분리 해볼 것이다.

```javascript
// App.js
const list = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
];
function ListItem({listItem}){
  return <li>{listItem.firstname}</li>
};

function List({list}){
  return <ul>
    {list.map((item) => <ListItem key={item.id} listItem={item}></ListItem>)}
  </ul>
};

function App() {

  return <div>
    <List list={list}></List>
  </div>;
}

export default App;

```
<hr/>

### 2. MULTIPLE REACT FILES(리액트 컴포넌트 파일 여러개로 분리해 보기)

- 이제 콤포넌트를 구성하는 파일을 여러개로 나눠 볼 것이다.
- App.js / List.js로 나눈다.
- List / ListItem 컴포넌트를 다른 파일로 나누지 않는 것은 너무 과한 분리이기 때문이다.
- 중요한 것은 컴포넌트를 재사용이 가능한 형태로 분리하는 것이니 컴포넌트 별로 파일을 분리하는 것에 너무 집착할 필요는 없다.

```javascript
// App.js
import List from "./List";

const list = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
];

function App() {
  return <div>
    <List list={list}></List>
  </div>;
}

export default App;
```

```javascript
// List.js
function ListItem({listItem}){
  return <li>{listItem.firstname}</li>
};

export default function List({list}){
  return <ul>
    {list.map((item) => <ListItem key={item.id} listItem={item}></ListItem>)}
  </ul>
};
```

<hr />

### 3. FROM REACT FILES TO REACT FOLDERS(컴포넌트를 하나의 폴더로 구성해보기)

```javascript
// 1번
- src/
--- App.js
--- App.test.js
--- App.css
--- List.js
--- List.test.js
--- List.css

// 2번
- src/
--- App/
----- index.js
----- component.js
----- test.js
----- style.css
--- List/
----- index.js
----- component.js
----- test.js
----- style.css

// 3번
- src/
--- App/
----- index.js
----- App.js
----- App.test.js
----- App.style.css
--- List/
----- index.js
----- List.js
----- List.test.js
----- List.style.css

// 4번(확장)
- src/
--- App/
----- index.js
----- component.js
----- test.js
----- style.css
----- types.js
--- List/
----- index.js
----- component.js
----- test.js
----- style.css
----- hooks.js
----- story.js
----- types.js
----- utils.js
----- constants.js

// 5번(컴포넌트 확장)
- src/
--- App/
----- index.js
----- component.js
----- test.js
----- style.css
--- List/
----- index.js
----- component.js
----- test.js
----- style.css
----- ListItem/
------- index.js
------- component.js
------- test.js
------- style.css
```
- 1번과 같은 형식으로 파일을 구성할 수 있다. 하지만 모든 파일들이 src 아래 추가되기 때문에 계층 적인 느낌을 줄수가 없다.
- 그래서 2번과 같은 스타일을 추천한다. 각 파일이 어떤 역할을 하는지 굉장히 명확하게 알 수 있고 계층 적인 느낌을 줄 수 있다.
- 2번과 같이 폴더를 구성하면 import 해서 쓸 때 편하다는 장점도 있다.
- 2번의 단점은 특정 컴포넌트를 검색 할 때 어쨌든 파일명이 같기 때문에 찾기에 불편할 수도 있다는 점이다.
- 따라서 3번과 같이 접두사를 붙여주는 것도 좋을 수 있다.
- 4번과 같이 typescript, story, hook 등등 필요한 것들이 늘어날 때 마다 하나 씩 추가해주면 되는 것이다.
- 5번 처럼 컴포넌트 폴더 자체를 확장할 수 있도 있다. 
- 개발을 하다보면 기존에 작은 크기 였던 ListItem이 너무 커져서 분리할 필요가 있을 때 이런식으로 가능하다. 
- 필자는 컴포넌트를 2개 이상으로 나누는 것을 추천하지 않는 다고 한다.
<hr />

### 4. TECHNICAL FOLDERS

- 3번 주제 까지는 midsize 이하에 대한 폴더 구조 추천 이었음.
- 프로젝트가 커지면서 src 이하는 component, service와 같은 폴더가 생기게 되고 기존의 App, List는 component로 이동시커야 한다.
- src 이하에 또 다른 뎁스가 생겼기 때문에 다른 기능을 묶어주는 또 다른 폴더 들을 자유롭게 추가해 줄 수 있게 된다.

```javascript
// 기본적은 폴더구조 확장.
- src/
--- components/
----- App/
------- index.js
------- component.js
------- test.js
------- style.css
----- List/
------- index.js
------- component.js
------- test.js
------- style.css
--- hooks/
----- useClickOutside.js
----- useScrollDetect.js
```
- 위와 같이 폴더를 구성했다고 해서 모든 훅을 hooks 이하에 경로에 넣으라는 것은 아니다.
- 재사용이 가능한 훅만 해당 경로에 넣어주고 특정 컴포넌트에서만 사용되는 훅들은 그대로 컴포넌트에서 사용하는 것도 나쁘지 않다.

```javascript
// hooks 폴더를 기존 컴포넌트 폴더와 같은 스타일로 확장
- src/
--- components/
----- App/
------- index.js
------- component.js
------- test.js
------- style.css
----- List/
------- index.js
------- component.js
------- test.js
------- style.css
--- hooks/
----- useClickOutside/
------- index.js
------- hook.js
------- test.js
----- useScrollDetect/
------- index.js
------- hook.js
------- test.js
```
- 만약 기능적으로 분리된 폴더들의 파일도 세분화 하거나 덩치가 커지게 된다면 컴포넌트를 폴더화 시켰던 것 처럼 똑같이 만들어 줄 수 있다.

```javascript
// 최종적으로 필자가 사용하는 형태의 구조
- src/
--- components/
----- App/
------- index.js
------- component.js
------- test.js
------- style.css
----- List/
------- index.js
------- component.js
------- test.js
------- style.css
--- hooks/
----- useClickOutside.js
----- useScrollDetect.js
--- context/
----- Session.js
--- services/
----- ErrorTracking/
------- index.js
------- service.js
------- test.js
----- Format/
------- Date/
--------- index.js
--------- service.js
--------- test.js
------- Currency/
--------- index.js
--------- service.js
--------- test.js
```
- 최종적으로는 위와 같은 형태의 파일구조가 나온다고 함.
- 필자는 Intl을 한 번 래핑해주는 Format을 예시로 드는 코드를 제시해줬음.
```javascript
// 1번
import { formatMonth } from '../../services/format/date';
const month = formatMonth(new Date());

// 2번
import * as dateService from '../../services/format/date';
const month = dateService.formatMonth(new Date());

// 3번(바벨 리졸버 같은 툴을 써줬을 때)
import * as dateService from 'format/date';
const month = dateService.formatMonth(new Date());
```
- 위와 같이 세분화된 폴더구조에서 index.js로 된 파일만 import 해와서 *Service라는 객체로 받아 깔끔하게 사용할 수 있음.

### 5. FEATURE FOLDERS(마지막)

- 여기에서는 컴포넌트에 더 집중해서 얘기하려함.
- 기존에 폴더 구조는 보통 한 번만 쓰는 컴포넌트 였다면 이제는 계속해서 재사용되는 컴포넌트 얘기가 될 것 같다.
- 기존의 방식으로는 결국엔 컴포넌트가 엄청나게 많아지게 된다는 것이다.
- 이제는 계속해서 재사용되는 컴포넌트와 특정 기능을 가지는 컴포넌트를 분리하도록 하려고 한다.

```javascript
- src/
--- feature/
----- User/
------- Profile/
------- Avatar/
----- Message/
------- MessageItem/
------- MessageList/
----- Payment/
------- PaymentForm/
------- PaymentWizard/
----- Error/
------- ErrorMessage/
------- ErrorBoundary/
--- components/
----- App/
----- List/
----- Input/
----- Button/
----- Checkbox/
----- Radio/
----- Dropdown/
```
- 공통은 components 아래로, 특정 기능을 가졌다면 feature 아래로 세분화 시킬 수 있다.

```javascript
- src/
--- feature/
----- User/
------- Profile/
------- Avatar/
----- Message/
------- MessageItem/
------- MessageList/
----- Payment/
------- PaymentForm/
------- PaymentWizard/
------- services/
--------- Currency/
----------- index.js
----------- service.js
----------- test.js
----- Error/
------- ErrorMessage/
------- ErrorBoundary/
------- services/
--------- ErrorTracking/
----------- index.js
----------- service.js
----------- test.js
--- components/
--- hooks/
--- context/
--- services/
----- Format/
------- Date/
--------- index.js
--------- service.js
--------- test.js
```
- 한 단계 더 나가면 서비스도 목적에 맞게 이동이 가능해진다. payService, errorService, 공통Service 등으로 나뉘게 되는 것이다.
<hr />

### 종합
- 글에 퀄리티가 좋아서 다 보게 됐다.
- 앞으로 nextjs를 쓸 확률이 높아서 여기서 알려주는 대로 프로젝트를 구성할 일은 크게 없지 않을까 싶다.
- 하지만 컴포넌트 단위로 깔끔하게 폴더를 구성하고 index.js 파일을 어떤 식으로 활용하는지에 대해서 잘 제시해 준 것 같다.
- 그리고 전체 구성을 이것대로 가져가긴 어렵겠지만 컴포넌트나 서비스에 대한 것들을 부분적으로 가져가는 것도 매우 좋아 보인다.
