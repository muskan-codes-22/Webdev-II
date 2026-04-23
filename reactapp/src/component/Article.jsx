// import React, {useState} from 'react'
import style from "../css/Article.module.css"
import styled from "styled-components"
import {css} from "@emotion/react"
import React, {useState, useEffect} from 'react'
    


function Article(props) {
  const [count, setCount]=useState(0)
  const [name,setName] = useState("Alex")

  useEffect(()=>{
    console.log("Component Mounted")
  },[name])



// function Article(props) {
//   const [count, setCount]=useState(0)


//   const handleIncrement=()=>{
//     setCount(count+1)
//   }
//   return (
//     <div>
//       <h1>Article</h1>
//        <h3>{props.title}</h3> 
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi fugiat pariatur eos quibusdam ratione possimus adipisci, impedit, autem ad quo, et cum laudantium deleniti. Soluta molestias amet quas labore.</p>
//       <h2>{count}</h2>
//       <button onClick={handleIncrement}>Increment</button>
//       {/* <button onClick={handleDecrement}>Decrement</button> */}
//     </div>
//   )
// }

// export default Article

import React from 'react'
import { add as addition } from '../utility'

class Article extends React.Component {
    constructor(props) {
      super(props)
      this.state={
        count:0,
        name:"Alex"
      }
    //   console.log(addition(2,3))
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState){
      if(nextState.count===1)return false
        console.log("shouldComponentUpdate")
        return true
    }


    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    handleClick=()=>{
        // this.state.count=this.state.count+1
        // console.log(this.state.count)
        this.setState({count: this.state.count+1})
    }

    handleDecrement=()=>{
        this.setState({count: this.state.count-1})
    }
  render() {
    return (
      <div>
        <h1>Article</h1>
        <h2>{name}</h2>
        <h3>{this.state.count}</h3>
        <button className={style.btn} onClick={this.handleClick}>Increment</button>
        <Button className={style.btn} onClick={this.handleDecrement}>Decrement</Button>
        <h3>{this.props.title}</h3>
        <Button pink> Click Me </Button> 
        <button className="bg-blue-600 ">Click Me</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi fugiat pariatur eos quibusdam ratione possimus adipisci, impedit, autem ad quo, et cum laudantium deleniti. Soluta molestias amet quas labore.</p>
      </div>
    )
  }
}

export default  Article

const Button=styled.button`
  background-color:${props=>props.pink?"pink":"blue"};
  color:white;
  padding:10px;
  border:none;
  border-radius:5px;  
  `

