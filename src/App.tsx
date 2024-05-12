// import Container from './components/Container'

// import {Rnd} from 'react-rnd';
// import Tile from './components/Container/Tile';
import { useEffect, useState } from "react";
import Container from "./components/Container";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  const getCount = async () => {
    const res = await axios.get("http://localhost:8000/backend");
    setCount(res.data.count);
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <>
      <div
        style={{
          width: "80vw",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container />
      </div>
        {count}
    </>
  );
}

export default App;
