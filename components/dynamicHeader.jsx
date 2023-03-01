import { useState, useEffect } from "react"
import {sleepAwait} from "sleep-await";

export default function DynamicHeader({text}){
  const [repos, setRepos] = useState([]);

//   useEffect(() => {
//     sleepAwait(0)
//     .then(_ => fetch("https://api.github.com/users/abdoufma"))
//     // fetch("https://api.github.com/users/abdoufma")
//     .then((r) => r.json())
//     .then(({public_repos}) => {
//       // document.title = `You clicked ${public_repos} times`;
//       setRepos(public_repos);
//     })
//     // const {public_repos} = await response.json();
//     // Update the document title using the browser API
//     // console.log("useEffect called");
//   }, []);
    return (<>
        <h1 style={{fontSize : "2rem", color: "orange"}} >{text}</h1>
        <div className="label">This element was loaded dynamically</div>
    </>)
}