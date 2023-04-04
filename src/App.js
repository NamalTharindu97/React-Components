import React, { useState } from "react";
import DeleteButton from "./Components/DeleteBtn/DeleteButton";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.name}
          <DeleteButton onDelete={() => handleDelete(item.id)} />
        </li>
      ))}
    </ul>
  );
}
export default App;
