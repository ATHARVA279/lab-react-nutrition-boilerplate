import React, { Component } from 'react';
import FoodBox from './components/foodBox.jsx';
import "./App.css";
import FoodData from "./resources/FoodData.js";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      newArr: FoodData
    };
  }

  handleChange = (event) => {
    let filterData = FoodData.filter((el) => el.name.includes(event.target.value));
    this.setState({ newArr: filterData });
  };

  render() {
    let { newArr } = this.state;

    return (
      <>
        <div className='DivInp'> 
          <input type="text" placeholder='Search your food' onChange={this.handleChange} className='input1'/>
        </div>

        {newArr.map((ele, i) => (
          <FoodBox key={i} {...ele} />
        ))}
      </>
    );
  }
}
