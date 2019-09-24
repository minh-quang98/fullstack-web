import React from 'react';  
import axios from "axios";
import { Container} from 'reactstrap';
import {Route, withRouter} from 'react-router-dom'
import Navbar from "./components/navbar"
import Newpost from "./components/NewPost/index"
import NewsFeed from "./components/NewsFeed/index"
import Search from "./components/Search"

class App extends React.Component {

  state = {
    authedUser: {
      email: "kanameichig998@gmail.com",
      name: "kaname"
    },
    list_following: [],
    search : ""
  }

  login = async value => {
    const response = await axios.post('http://localhost:5000/auth/login', {
      email:value.email,
      password:value.password
    })
    console.log(response)
    if (response.status === 200) {
      this.setState({authedUser: response.data})
    }
    return response
  }

  register = values => {
    return axios.post('http://localhost:5000/auth/register', {
      email: values.email,
      name: values.name,
      password: values.password
    })
  }


  follow = (email) => {
    this.setState({
      list_following: [...this.state.list_following, email]
    })
    
  }

  unfollow = (email) => {
    this.setState({
      list_following: this.state.list_following.filter(item => item !== email)
    })
  }

  search = (keyword) => {
    this.props.history.push(`/search?q=${keyword}`)
  } 

  render() {
    return (
      <>
        <Navbar 
          onSearch={this.search}
          onLogin={this.login} 
          onRegister={this.register} 
          isAuthed={this.state.authedUser !==null}/>
          <div style={{height: 50}}></div>
          <Container>
            <Route path="/search" component={Search}/>
            <Route exact path="/" render={() => this.state.authedUser && <>
            <Newpost authedUser={this.state.authedUser}/>   
            <NewsFeed 
              authedUser={this.state.authedUser} 
              listFollowing={this.state.list_following} 
              onFollow={this.follow} 
              onUnfollow={this.unfollow}/>     
            </>}/> 
          </Container>
      </>
    )
  }
}

export default withRouter(App);
