import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Mail from './Components/Mail'
import InstantMessageer from './Components/InstantMessageer'
import { Link } from 'react-router-dom'
import InterestsBar from './Components/InterestsBar'

const usersUrl = 'http://localhost:3000/users'
const emailsUrl = 'http://localhost:3000/emails'
const instantUrl = 'http://localhost:3000/instant_messages'
const interestsUrl = 'http://localhost:3000/interests'
const friendsUrl = 'http://localhost:3000/friends'
const awayMessagesUrl = 'http://localhost:3000/away_messages'

export class App extends Component {

  state = {
    showMail: false,
    users: [],
    emails: [],
    instantMessages: [],
    interests: [],
    loggedInUser: {"id":1,"first_name":"Kübra","last_name":"Baturalp","age":64,"email":"kubra.baturalp@example.com","password":"isabelle","picture":"https://randomuser.me/api/portraits/women/24.jpg","location":"Burdur","username":"sherita","isOnline":true,"created_at":"2020-09-01T16:25:59.959Z","updated_at":"2020-09-01T16:25:59.959Z"},
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

  keepMailOpen = () => this.setState({ showMail: true })

  seeMail = () => this.setState({ showMail: !this.state.showMail })

  hideMail = () => this.setState({ showMail: false })

  render(){
    const awayMessage = this.state.awayMessages.filter(message => message.user_id === this.state.loggedInUser.id)
    const friends = this.state.friends.filter(friend => friend.friend_1 === this.state.loggedInUser.id || friend.friend_2 === this.state.loggedInUser.id)
    const instantMesages = this.state.instantMessages.filter(message => message.sender_id === this.state.loggedInUser.id || message.reciever_id === this.state.loggedInUser.id)
    return (
    <div className='main-contianer'>
      <Link to='/' onClick={this.hideMail}><button>x</button></Link>
      <InstantMessageer awayMessage={awayMessage} friends={friends} users={this.state.users} instantMessages={instantMesages} loggedInUser={this.state.loggedInUser}/> 
      <Switch>
        <Route path='/:id' render={(history)=> <Mail keepMailOpen={this.keepMailOpen} history={history} users={this.state.users} emails={this.state.emails} loggedInUser={this.state.loggedInUser}/>}/>
        <Route path='/' render={() => <HomePage seeMail={this.seeMail} showMail={this.state.showMail} users={this.state.users} emails={this.state.emails} loggedInUser={this.state.loggedInUser}/> } />
      </Switch>
      <InterestsBar />
    </div>
  )
 }
}

export default App;
