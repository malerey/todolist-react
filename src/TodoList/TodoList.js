import React, { Component } from "react";
import "./TodoList.css";
import TodoItems from "../TodoItems/TodoItems";

 
class TodoList extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            items: []
          };
     
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

      }
       
      addItem(e) {
        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now()
          };
       
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
         
          this._inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();
      }

      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }

      // editItem(text) {

      //   console.log(text)

      //   var editedItems = this.state.items.filter(function (item) {
      //     return (item.text !== text);
      //   });

      //   this._inputElement.value = text
       
      //   this.setState({
      //     items: editedItems
          
      //   });
      // }

  render() {
    return (
    <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} 
                    placeholder="Agregar una nueva tarea">
            </input>
            <button type="submit">Agregar</button>
          </form>
        </div>
        <ul className="theList">
          {this.state.items.map((item, i) => {
            return(
              <TodoItems key={i} entry={item}
              delete={this.deleteItem}/>
            )
          })}
        </ul>
      </div>
    );
  }
}
 
export default TodoList;