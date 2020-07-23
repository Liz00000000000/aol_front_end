import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Mail from './Components/Mail'
import InstantMessageer from './Components/InstantMessageer'

const usersUrl = 'http://localhost:3000/users'
const emailsUrl = 'http://localhost:3000/emails'
const instantUrl = 'http://localhost:3000/instant_messages'
const interestsUrl = 'http://localhost:3000/interests'
const friendsUrl = 'http://localhost:3000/friends'
const awayMessagesUrl = 'http://localhost:3000/away_messages'

export class App extends Component {

  state = {
    users: [],
    emails: [],
    instantMessages: [],
    interests: [],
    loggedInUser: {"id":61,"first_name":"Ülkü","last_name":"Kılıççı","age":60,"email":"ulku.kilicci@example.com","password":"hammer1","picture":"https://randomuser.me/api/portraits/women/96.jpg","location":"Yozgat","username":"kai_hessel","isOnline":false,"created_at":"2020-07-21T14:45:52.073Z","updated_at":"2020-07-21T14:45:52.073Z"},
    awayMessages: [],
    friends: [],
    awayMessage: null 
  }

  componentDidMount(){
    fetch(usersUrl).then(res => res.json()).then(users => this.setState({ users }))
    fetch(emailsUrl).then(res => res.json()).then(emails => this.setState({ emails }))
    fetch(instantUrl).then(res => res.json()).then(instantMessages => this.setState({ instantMessages }))
    fetch(interestsUrl).then(res => res.json()).then(interests => this.setState({ interests }))
    fetch(friendsUrl).then(res => res.json()).then(friends => this.setState({ friends }))
    fetch(awayMessagesUrl).then(res => res.json()).then(awayMessages => this.setState({ awayMessages }))
  }

  render(){
    const awayMessage = this.state.awayMessages.filter(message => message.user_id === this.state.loggedInUser.id)
    const friends = this.state.friends.filter(friend => friend.friend_1 === this.state.loggedInUser.id || friend.friend_2 === this.state.loggedInUser.id)
    const instantMesages = this.state.instantMessages.filter(message => message.sender_id === this.state.loggedInUser.id || message.reciever_id === this.state.loggedInUser.id)
    console.log(this.state.instantMessages)
    return (
    <div>
      <InstantMessageer awayMessage={awayMessage} friends={friends} users={this.state.users} instantMessages={instantMesages} loggedInUser={this.state.loggedInUser}/> 
      <Switch>
        <Route path='/:id' render={(history)=> <Mail history={history} users={this.state.users} emails={this.state.emails} loggedInUser={this.state.loggedInUser}/>}/>
        <Route path='/' render={() => <HomePage users={this.state.users} emails={this.state.emails} loggedInUser={this.state.loggedInUser}/> } />
      </Switch>
    </div>
  )
 }
}

export default App;
