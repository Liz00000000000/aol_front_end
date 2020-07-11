import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage';

const usersUrl = 'http://localhost:3000/users'
const emailsUrl = 'http://localhost:3000/emails'
const instantUrl = 'http://localhost:3000/instant_messages'
const interestsUrl = 'http://localhost:3000/interests'

export class App extends Component {

  state = {
    users: [],
    emails: [],
    instantMessages: [],
    interests: [],
    loggedInUser: {"id":61,"first_name":"Piper","last_name":"Turner","age":48,"email":"piper.turner@example.com","password":"coleman","picture":"https://randomuser.me/api/portraits/women/30.jpg","location":"New Plymouth","created_at":"2020-07-11T20:05:34.028Z","updated_at":"2020-07-11T20:05:34.028Z"}
  }

  componentDidMount(){
    fetch(usersUrl).then(res => res.json()).then(users => this.setState({ users }))
    fetch(emailsUrl).then(res => res.json()).then(emails => this.setState({ emails }))
    fetch(instantUrl).then(res => res.json()).then(instantMessages => this.setState({ instantMessages }))
    fetch(interestsUrl).then(res => res.json()).then(interests => this.setState({ interests }))
  }

  render(){
  return (
    <div>
      <HomePage users={this.state.users} emails={this.state.emails} loggedInUser={this.state.loggedInUser} instantMessages={this.state.instantMessages}/>
    </div>
  )
 }
}

export default App;
