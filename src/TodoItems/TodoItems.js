import React, { Component } from "react";
 
class TodoItems extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.entry.text,
      id: props.entry.key,
      editMode: false
    }
    // this.createTasks = this.createTasks.bind(this);
  }

  delete() {
    console.log("delete", this.state.id)
    this.props.delete(this.state.id);
  }

  // edit(text) {
  //   console.log("edit", text)
  //   this.props.edit(text);
  // }

  // createTasks(item) {
  //       return <li key={item.key}>{item.text}
  //       <button id="deletebutton"
  //       onClick={() => this.delete(item.key)}
  //       >x</button><input className="DisplayNone"
  //       placeholder={item.text}></input></li>
  // }
 
  handleEdit(e) {
    const value = e.target.value
    this.setState({
      value: value
    })
  }

  handleClick() {
    console.log(123)
    let editMode = this.state.editMode
    if (!editMode) {
      editMode = true
    } else {
      editMode = false
    }

    this.setState({
      editMode: editMode
    })
  }

  render() {
    let defaultInputClass = 'DisplayNone'
    let defaultSpanClass = ''
    if (this.state.editMode) {
      defaultInputClass = 'liListInput'
      defaultSpanClass = 'DisplayNone'
    }

    return (
      <div><li key={this.state.id} className="liList" onClick={this.handleClick.bind(this)}>
        <span className={defaultSpanClass}>{this.state.value}</span>
        <button id="deletebutton"
        onClick={() => this.delete(this.state.id)}
        >x</button>
      </li>
      <input value={this.state.value} className={defaultInputClass} type="text" onChange={this.handleEdit.bind(this)} />
      </div>
    );
  }
};
 
export default TodoItems;