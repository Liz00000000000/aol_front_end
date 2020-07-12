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
    loggedInUser: {"id":2,"first_name":"Sara","last_name":"Carpenter","age":61,"email":"sara.carpenter@example.com","password":"shakur","picture":"https://randomuser.me/api/portraits/women/8.jpg","location":"Ratoath","created_at":"2020-07-12T14:54:01.971Z","updated_at":"2020-07-12T14:54:01.971Z","username":"rob.kuhn","isOnline":false},
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
