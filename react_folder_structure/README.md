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