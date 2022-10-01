import { useState, useEffect } from "react";

function Counter() {
  const [name, setName] = useState("");
  // name = digunakan untukpemanggilan di dalam element html
  // setName = digunakan untuk memanipulasi variabel

  useEffect(() => {
    console.log("COMPONENT DID MOUNT IS RUNNING !");
    setTimeout(() => {
      // PROSES PEMANGGILAN DATA DARI DATABASE
      setName("Bagus Tri Harjanto");
    }, 5000);
  }, []);

  return (
    <div>
      <h1>Counter App</h1>
      <hr />
      <h3>{name}</h3>
    </div>
  );
}

export default Counter;
