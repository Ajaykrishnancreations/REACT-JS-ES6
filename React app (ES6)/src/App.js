import './App.css';
import React from 'react';

//=================================================================================================================================================================
 //----------------This is student extesion . only show the student details -but- student will not to see the teacher details...------------------------------- 


/*----only here to remove the mulit-line commend there is no ending commend

class Student extends React.Component
{
  render()
  {
    return <h2> This is student extesion AJAY</h2>
  }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------This is (Emp) emp means teacher extends here teacher will see his detail and students datas also
class Emp extends Student
{
  render()
  {
    return(
      <div className="techer">
      <h2>Gowthaman</h2>
         <Student />
      </div>
    );
  }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//This is default Functions.It will run using (function sample)

function App()
{
  return(

    <>
    <h1>This is default Functions.It will run using (function sample)</h1>
    </>
  
  );
}
//-----------------------------------------------------------
//-------this is sample it will --display-- the sample document
function Sample()
{
  return(
    <>
    {/*-------------------------------------------------- *///}

    
 //   {/*This is call the student data and display */}
   
//   {/*<Student></Student>*/}
//   <Student />

//    {/*-------------------------------------------------- */}

//    {/*This is call the Emp=Techer data and he will display his ( data -&- display student data)  */}

//   <Emp />

//    {/*-------------------------------------------------- */}
//    {/* this is defult App functions  */}
//    <App />

//    {/*-------------------------------------------------- */}
    
//    <h1>This is Sample Function deafult data.</h1>
 //   </>

//  );
// }
//=======================================================

//============================================(map functions)=====================================================

// React ES6 Destructuring
//Extraction Values From Array


/*
class Student extends React.Component

{
  render()
  {
    const Myans="karur";
    return(
      <>
        <h1>Map function Inside Class</h1>
        {Myans}
      </>
    );
  }
}
function App() 
{
  const Myvar=["car","bike","lorry","train","bus"];
  const Mylistdemo=Myvar.map((var1)=><p>{var1}</p>);
  return (
    <>
    <h1>List of Vehicles</h1>
    {Mylistdemo}
    
    <Oldway />
    <Newway />
    <Student />
    
    </>
  );
}

//----------------------------------------------------------------------
//Old Way

function Oldway()
{
  const Myarray=[" Hi ","to","react",".","JS"];
  const Ans1=Myarray[0];
  const Ans2=Myarray[1];
  const Ans3=Myarray[2];
  const Ans4=Myarray[3];
  const Ans5=Myarray[4];

  return(
    <div className="oldway">
      <h1>Result of old way</h1>
      {Ans1}
      {Ans2}<br></br>
      {Ans3}<br></br>
      {Ans4}<br></br>
      {Ans5}<br></br>
    </div>
  );
}
//-------------------------------------------------------------------
//New Way
function Newway()
{
  const Myarray=["hi","to"," react "," . ","JS"];
  const [Ans1,Ans2,Ans3,Ans4,Ans5]=Myarray;

  return(
    <div className="newway">
      <h1>Result of New way </h1>
      {Ans1}<br></br>
      {Ans2}<br></br>
      {Ans3}
      {Ans4}
      {Ans5}<br></br>

    </div>
  );
}


*/

//
//
//
//==================================================================================================================
// Distrcting comes in handy 
//this is a new way to insert and use all arithmatic function in single hand
/*

const Arithmatic=(a,b)=>{ //======(function)

  const v1=a+b;
  const v2=a-b;
  const v3=a*b;
  return [v1,v2,v3];
}
function ArithCalled()
{
  const [Ans1,Ans2,Ans3]=Arithmatic(10,2);
  const Myarr=[Ans1,Ans2,Ans3];
  const ResultArray=Myarr.map((item)=><p>{item}</p>)
  return(
    <>
      <h1>Arithmatic Result in App.js</h1>
      {ResultArray}
    </>
  );
}


*/

//
//
//
//
//
//
//
//==================================================================================================================
// creating Distrcting objects with JSON formart
//Distrcting objects old way

/*

let sdetails={
  name:"ajay",
  age:21,
  weight:75,
  addrss:"karur"
}

const myfun=(data)=>
{
 return(
   <>
   <h1>This old of Distrcting objects</h1>
   {"I am "+data.name+" i'm "+data.age+" years old, and my weight is "+data.weight}
 </>
 );
  }
function FunObj(){
  
  let FinalRes=myfun(sdetails)

  return(
    <>
    <h2>{FinalRes}</h2>
    <h5>{sdetails.name}</h5>
    <h5>My name is {sdetails.name}</h5>
  </>
  );
}

*/
//-------------------------------------new way-----------------------------------------------

/*
let sdetails1={
  name:"ajay",
  age:21,
  weight:80,
  addrss:"karur"
}

const myfun1=({name,age,weight})=>
{
 return (
  <>
  <h1>This is new way for Distrcting objects</h1> 
  {"I am "+name+" i'm "+age+" years old, and my weight is "+weight}
  </>
   );
}
function FunObj1(){
  
  let FinalRes=myfun1(sdetails1)

  return(
    <>
    <h1>{FinalRes}</h1>
    </>
  );
}

*/
//======================== end  ====================================

// DISTRCTING NESTESD OBJECT
/*

let sdetails={
  name:"ajay",
  age:21,
  weight:80,
  addrss:{
    state:"tamil nadu",
    city:"karur",
  }
}
const myfun=({name,age,addrss:{state}})=>
{
 return "I am "+name+" i'm "+age+" years old, and my address "+state;
}

function FunObj2(){
  let FinalRes=myfun(sdetails)

  return(
    <>
    <h1> DISTRCTING NESTESD OBJECT</h1>
<h2>{FinalRes}</h2>
    </>
  );
}

*/
//===============================(end DISTRCTING NESTESD OBJECT )========================================================================================================

//===========================[Spread operator (this is uesd to copy the data) (...) method ]===================================================================================
/*
let origanal1=["Hi ","this ","is ","Spread operator1 "];
let origanal2=[" This ","is ","Spread operator2 "]
let copy=[...origanal1,...origanal2]
let [f1,f2,f3,...rem]=copy

function SpreadOperatorArray(){
  
  return(
    <>
    <h1>SpreadOperator useing array</h1>
    <h2>{f1}</h2>
    <h2>{f2}</h2>
    <h2>{f3}</h2>
    <h2>{rem}</h2>
   {copy}
    </>
  );
}

*/
//----------------------------------------------------
//function SpreadOperatorObject()
/*  
let stud1={
  no:1,
  name:"timothy",
  age:21,
}
let stud2={
  address:"karur",
  pno:12345,
}

function myfun(data){
  return "Rno "+data.no+" Name "+data.name+" Age "+data.age;
}



function SpreadOperatorObject(){
  const CombineObj={...stud1,...stud2};
  const ResAns=myfun(CombineObj)
  return(
    <>
    <h1>SpreadOperator useing Object</h1>

    {ResAns}
    </>
  );
}

*/
//==========================================(end spread opertor)=======================================


//============================( Modelue import and export )
// ======  in line  ==============

//export const Sname="Gowthaman";

//======  All at once (2 types) ============= 

// -------- (type  1 ) ----named export-------------

/* const Sname="Gowthaman";
 
 const age=35;
 export {Sname,age};
*/

//  ---------( type 2 ) --defult exports--------------
/*
function Modules(){
  return(
    <>
    <h1>ModuleDefultExport</h1>
  </>
  );
}

*/
//=========================( modules end )====================================



//================== Ternary opertor ===================

function fun1()
{
  return "True Statement";
}

function fun2()
{
  return "False Statement";
}
let test=false;
let Ans=test ? fun1() : fun2();
//=====================(end)===============================
//export default Sample;
//-------------------------------
//export default App;
//-------------------------------
//export default ArithCalled;

//export default FunObj;
//export default FunObj1;
//export default FunObj2;
//======================================================
//export default SpreadOperatorArray;
//===========================================

export default Ans;


