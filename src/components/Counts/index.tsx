import axios from "axios";
import { useEffect, useState } from "react";

const ElementTwo = () => {
  const [count, setCount] = useState(0);

  const getCount = async () => {
    const res = await axios.get("http://localhost:8000/backend");
    setCount(res.data.count);
  };

  useEffect(() => {
    getCount();
  }, []);
  return <div>
    Count: {count}
  </div>;
};

export default ElementTwo;
