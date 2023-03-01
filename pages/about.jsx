import React, {useState, useEffect, } from "react";
import * as utils from "utils";
// const count = 5;
// export default function About({repoCount}) {
export default class About extends React.Component{

  constructor(props){
    super(props);
    this.state = {count : 0 }  
  }
  // const [count, setCount] = useState(0);
  // const [repos, setRepos] = useState(0);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/abdoufma")
  //   .then((r) => r.json())
  //   .then(({public_repos}) => {
  //     // document.title = `You clicked ${public_repos} times`;
  //     setRepos(public_repos);
  //   })
  //   // const {public_repos} = await response.json();
  //   // Update the document title using the browser API
  //   // console.log("useEffect called");
  // }, [count]);
  
  async loadData(){
    const response = await fetch("https://api.github.com/users/abdoufma");
    const data = await response.json();
    console.log(data);
    // return Promise.resolve(0);
    this.setState({count: data.public_repos});
  }

    render(){
      let $state = this.state;
      return (
        <>
          <h2>About Us</h2>
          {/* <h3>Current time : {utils.useMoment()}</h3> */}
          <h3>Array : {JSON.stringify(utils.useLodash())}</h3>
          <button onClick={() => this.setState({count : $state.count+1})}>Count Up</button>
          <button onClick={() => this.loadData()}>Count Up</button>
          {/* <button onClick={() => loadData()}>LoadData</button> */}
          <p>Welcome to this amazing about page. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolore officiis atque voluptas, quas, repellendus cum, magnam a alias unde reiciendis voluptates aliquam maxime laborum? Quae omnis eius impedit et?</p>
          <p>I have Clicked {$state.count} Times.</p>
          {/* <p>I have {repos} public repos on GitHub.</p> */}
        </>
      );
    }
  }
  
  // export async function getStaticProps() {
  //   // const response = await fetch("https://api.github.com/users/abdoufma");
  //   // const data = await response.json();
  //   const data = {public_repos : 69};
  
  //   return {
  //     props: {
  //       repoCount: data.public_repos
  //     },
  //     revalidate: 10
  //   }
  // }