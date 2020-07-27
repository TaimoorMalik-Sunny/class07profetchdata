import React, { useEffect, useState } from 'react';

import './App.css';

/*console.log("Fetch Api");

async function getAPI(){
  const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');

console.log(api,'API');

const json = await api.json()
console.log(json,"Json")


}
//getAPI();

async function postapi(){
  const api = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify({
      title: 'CNC',
      body: 'Bootcamp',
      userId: 1
    }),
    headers:{
      "Content-type": "application/json; charset=UTF-8"
    }
    

  })

  console.log(api,'API');

const json = await api.json()
console.log(json,"Json")

}

postapi();*/


function App() {

  const [repos, setrepos] = useState([{}]);

  //"https://api.github.com/users/muhammadmohsin/repos"
  useEffect( () => {

    async  function getRepos() {

      const responce = await fetch("https://api.github.com/users/TaimoorMalik-Sunny/repos")
      const data = await responce.json();

      console.log(data);

      setrepos(data);


    }
    getRepos();






    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //.then(response => response.json())
    //.then(json => 
    //{
    // setData(json);
    // })
  }, [])


  return (
    <div className="App">
      <ul>
        {repos.map((repoObj, ind) => {
          return (<li key={ind}>{repoObj.name}"==>"{repoObj.default_branch}</li>)
        })}
      </ul>

    </div>
  );
}

export default App;
