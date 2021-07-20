import React from 'react';
import './App.css';

class App extends React.Component {
    
  constructor(props){
    super(props)
    this.state = {sum: ""};
  }

  createButton = (value) => {
    if(value === '='){
      return <button onClick={()=>this.solve()}>{value}</button>
    }
    if(value === 'c'){
      return <button onClick={()=>this.clr()}>{value}</button>
    }
    return <button onClick={()=>this.getValue(value)}>{value}</button>
  }
  
  getValue(value){this.setState({sum: this.state.sum + value})}
  
  solve = () => {
    try{
      this.setState({sum: eval(this.state.sum) + ""})
    }catch(err){
      alert(err.message)
      this.clr()
    }
  }

  clr = () => {
    this.setState({sum: ""})
  }

  render(){
    return (
      <>
        <table style={{transform: 'scale(3) translate(0%, 60%)'}}>
          <tr>
            <th colSpan="3"><textarea readOnly value={this.state.sum}></textarea></th>
            <th>{this.createButton('c')}</th>
          </tr>
          <tr>
          <th>{this.createButton(1)}</th>
          <th>{this.createButton(2)}</th>
          <th>{this.createButton(3)}</th>
          <th>{this.createButton('+')}</th>
          </tr>
          <tr>
          <th>{this.createButton(4)}</th>
          <th>{this.createButton(5)}</th>
          <th>{this.createButton(6)}</th>
          <th>{this.createButton('-')}</th>
          </tr>
          <tr>
          <th>{this.createButton(7)}</th>
          <th>{this.createButton(8)}</th>
          <th>{this.createButton(9)}</th>
          <th>{this.createButton('*')}</th>
          </tr>
          <tr>
          <th>{this.createButton('.')}</th>
          <th>{this.createButton(0)}</th>
          <th>{this.createButton('=')}</th>
          <th>{this.createButton('/')}</th>
          </tr>
        </table>  
      </>
    );
  }
}
export default App;
