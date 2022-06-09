import React, { Component, useEffect, useState } from 'react';
import Demo from './Component/Demo';
import Home from './Containers/Home';
import Loading from './Containers/Loading';


const HomewithLoading = Loading(Home);

function App(props) {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState ([ ]);

  const orgData = [
    {id:101, name:"mitali"},
    {id:102, name:"ruchika"}
  ]

 useEffect(() => {
   setLoading(true);
   setTimeout(() =>{setLoading(false); setData(orgData)}, 2000)
 }
 ,[])

 return(
   <HomewithLoading
      isLoading ={loading}
      data ={data}
   />
 )

}


export default App;
