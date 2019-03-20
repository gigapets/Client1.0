import React, { Component } from 'react';

import './App.css';
import DayForm from './components/DayPage/DayForm';
import DayPost from './components/DayPage/DayPost';
import DayPosts from './components/DayPage/DayPosts';
import axios from 'axios';
import {NavLink, Route} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dayPosts: []
    };
  } 

  componentDidMount(){
    console.log('inside Component Did Mount', this.state);
    axios
      .get("https://gigapets.herokuapp.com/gigapets")
      .then(response => this.setState({dayPosts: response.data}), console.log("Axios state:", this.state))
      .catch(err => console.log("ComponentDidMount error: ", err));
  }

  addDayPost = (event, dayPost) => {
    axios
      .post("https://gigapets.herokuapp.com/gigapets", dayPost)
      .then(response => this.setState({dayPosts: response.data }))
      .catch(err => console.log("Add Day Post Error: ", err));
  };

  deleteDayPost = (event, id) => {
    event.preventDefault();
    axios
      .delete(`https://gigapets.herokuapp.com/gigapets/${id}`)
      .then(response => {
        this.setState({ dayPosts: response.data });
      });
  };
// for its own page
  // deleteDayPost = (event) => {
  //   event.preventDefault();
  //   this.props.deleteMessage(this.state.dayPost);
  //   axios.delete('https://gigapets.herokuapp.com/gigapets')
  // };

  render() {
    return (
      <div className="App">
     
        <ul className="navBar">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/day-form"> Record A Day </NavLink>
          </li>
        </ul>
        <Route
         exact path="/"
          render={props => <DayPosts {...props}
            dayPosts= {this.state.dayPosts}
            handleChanges={this.handleChanges}
            deleteDayPost={this.deleteDayPost}
            updateDayPost={this.updateDayPost}
          />}
        />
        <Route
          exact
          path="/day-form"
          render={props => <DayForm {...props} addDayPost={this.addDayPost} />}
        />
        {/* <Route
        exact path = "/week"
        render = {props => <DayPosts {...props} dayPosts = {this.state.dayPosts} />}
        /> */}
        <Route
          path="/gigapets/:id"
          render={props => <DayPost
            {...props}
            dayPosts={this.state.dayPosts}
            handleChanges={this.handleChanges}
            deleteDayPost={this.deleteDayPost}
            updateDayPost={this.updateDayPost}
          />}
            
          
        />
      </div>
    );
  }
}

export default App;
