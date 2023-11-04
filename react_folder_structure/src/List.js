function ListItem({listItem}){
  return <li>{listItem.firstname}</li>
};

export default function List({list}){
  return <ul>
    {list.map((item) => <ListItem key={item.id} listItem={item}></ListItem>)}
  </ul>
};