import React , {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      newItem:"",
      list:[]
    }
  }
updateInput(key, value){
  this.setState({
    [key]: value
  });
}
addItem(){
  const newItem = {
    id: 1 + Math.random(),
    value: this.state.newItem.slice()
  };

  const list = [...this.state.list];

  list.push(newItem);

  this.setState({
    list,
    newItem:""
  });
}
deleteItem(id){
  const list = [...this.state.list];
  
  const updatedList = list.filter(item => item.id !== id);

  this.setState({list: updatedList});
}
  render(){
  return (
    <div className="App">
      <h1 className="app-title">Todo List</h1>
     <div className="container">
       <div  style={{
            padding: 20,
            textAlign: "center",
            maxWidth: 500,
            margin: "auto" }} >
         Add Items..
         <br/>
         <input 
         type="text"
         placeholder="Add an Item"
         value={this.state.newItem}
         onChange={e => this.updateInput("newItem", e.target.value)}
         className="Input"
         />
         <button onClick={()=> this.addItem()} 
             className="btn"
            disabled={!this.state.newItem.length}>+</button>
         <br/>
         <ul>
           {this.state.list.map(item =>{
             return(
               <li key={item.id}>
                 {item.value}
                 
                 <button
               onClick={()=> this.deleteItem(item.id)} className="del-btn">
                 x
               </button>
               </li>
               
             );
           })}
         </ul>
        </div>
    </div>
    </div>
  );
}
}

export default App;
