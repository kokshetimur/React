import React, { Component } from 'react'
import './Style.css';


export default class Ccomp extends Component {
 constructor(props) {
   super(props);
   this.state = {
      count: 0,
      input: "ABC",
      submit: "",
      error: null,
      isLoaded: false,
      items: {}
   };

 

   this.handlechange = this.handlechange.bind(this);
   this.inc = this.inc.bind(this);
   this.dic = this.dic.bind(this);
   this.reset= this.reset.bind(this);
   this.hs = this.hs.bind(this);
 }
 hs(event){
  event.preventDefault()
  this.setState({
    submit: this.state.input
  })
 }

 handlechange(event){
  this.setState({
    input: event.target.value
  })
 }

inc(){
  this.setState(state => ({count:state.count +1 }));
}


dic(){
  this.setState(state => ({count:state.count -1 }));
}

reset() { this.setState ({
  count: 0
})
}


  render() {
    return(
  <div>
    <form onSubmit={this.hs}>
    <input value={this.state.input} onChange={this.handlechange}/>
    <button type='submit'>Submit</button>
    </form>

    <input onChange={this.handlechange}/>
    <h5>Controled input</h5>
    <h2 className='Hello'>{this.state.input}</h2>
    <h4 >{this.state.submit}</h4>
  <button onClick = {this.inc}>Увеличение</button>
  <button onClick = {this.dic}>Отнимание</button>
  <button onClick = {this.reset}>ресет</button>
  <h1 className='Hello'>Тякущее состояниe: {this.state.count}</h1>
  </div>
  )
 }
}