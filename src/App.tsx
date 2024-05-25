import React, { useState } from 'react';
import './App.css';
import Input from './component/Input';
import Logo from './component/Logo';
import Tables from './component/table';


function App() {
  let data=[
    {
      Name:"MAAZ"
    },
    {
      Name:"KAMRAN"
    },
  
  ];

  const [currentinterval,setcurrentintervall]=useState(data);

  const onclickhandler=(value:any)=>{
    const newobj = {Name:value}
    let newdata = [...currentinterval,newobj]
    setcurrentintervall(newdata)
  }


  return (
    <div className="App text-center p-4">
      <div className='border border-2 rounded-3 secdiv mx-auto'>
      <Logo></Logo>

      <Input  onclickhandler={onclickhandler} ></Input>
      <Tables  data={currentinterval}></Tables>
      </div>
    </div>
  );
}

export default App;
