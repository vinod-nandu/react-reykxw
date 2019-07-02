import React from "react";

const initialList = [
  { id: 'a', name: 'Learn React' },
  { id: 'b', name: 'Learn Firebase' },
  { id: 'c', name: 'Learn GraphQL' },
];

const ListWithRemoveItem = () => {
  const [list, setList] = React.useState(initialList);
}
 const handleClick = id => {
    setList(list.filter(item => item.id !== id));
  };
export const Header = () => (
  <header className="header">
    <h2>Test Application
    </h2>
  </header>
  
);

export default Header;
