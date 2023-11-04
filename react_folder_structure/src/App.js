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
