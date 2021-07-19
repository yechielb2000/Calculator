import React from 'react';
import './App.css';

class App extends React.Component {
    
  constructor(props){
    super(props);
    this.state = {sum: ""};
  }

  render(){
    return (
      <>
        <table id="container">
          <tr>
            <th colSpan="3"><textarea readOnly>{this.state.sum}</textarea></th>
            <th>{createButton('c')}</th>
          </tr>
          <tr>
          <th>{createButton(1)}</th>
          <th>{createButton(2)}</th>
          <th>{createButton(3)}</th>
          <th>{createButton('+')}</th>
          </tr>
          <tr>
          <th>{createButton(4)}</th>
          <th>{createButton(5)}</th>
          <th>{createButton(6)}</th>
          <th>{createButton('-')}</th>
          </tr>
          <tr>
          <th>{createButton(7)}</th>
          <th>{createButton(8)}</th>
          <th>{createButton(9)}</th>
          <th>{createButton('*')}</th>
          </tr>
          <tr>
          <th>{createButton('.')}</th>
          <th>{createButton(0)}</th>
          <th>{createButton('=')}</th>
          <th>{createButton('/')}</th>
          </tr>
        </table>  
      </>
    );
  }
}

function createButton(value){
  
  if(value == '='){
    return <button>{value}</button>
  }
  if(value == 'c'){
    return <button>{value}</button>
  }
  return <button onClick={getValue(value)}>{value}</button>
}

function getValue(value){
    this.setState({sum: this.state.sum += value})
}

solve = () => {
  // this.state.sum =  eval(this.state.sum)
}

clr = () => {
  // this.state.sum = ""
}

export default App;
