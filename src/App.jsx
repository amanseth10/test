import axios from "axios"
import { useState } from "react";


function App() {
  const [head,sethead]=useState([])
  axios.get("https://internproject-4m4h.onrender.com/get-head/")
        .then((res) => {
          // console.log(res.data);
            sethead(res.data);
        })
        .catch((error) => { console.log(error);})
  return (
    <>
      <h1>{JSON.stringify(head)}</h1>
    </>
  )
}

export default App
