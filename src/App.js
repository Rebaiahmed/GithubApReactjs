import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Profile from './Profile.js'
import RepoList from './RepoList'
import { Navbar, Jumbotron, Button,Grid } from 'react-bootstrap';
class App extends Component {


constructor(props)
{

  super(props);
  this.state ={
    username :'RebaiAhmed',
    userData :[],
    userRepos :[],
    perPage : 5
  }
}


//*******get UserProfile data****************//
//*******
//*******
getUserData()
{
  fetch('https://api.github.com/users/RebaiAhmed?client_id='+ this.props.clientId
+ '&client_secret='+ this.props.client_secret)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("reponsejsn"+ JSON.stringify(responseJson));
          this.setState({userData :responseJson})
        })
        .catch((error) => {
          this.setState({username :null})
          console.error(error);
        });
}


//********************************//
getUserRepos()
{
  fetch('https://api.github.com/users/RebaiAhmed/repos?client_id='+ this.props.clientId
+ '&client_secret='+ this.props.client_secret)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("reponsejsn"+ JSON.stringify(responseJson));
          this.setState({userRepos :responseJson})
        })
        .catch((error) => {
          this.setState({username :null})
          console.error(error);
        });

}


//********************************//

componentWillMount()
{
  this.getUserData();
  this.getUserRepos();

}


  render() {
    return (
      <div>
      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Github Application</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Grid>
      </Navbar>


<br />
<br />
<br />
<Profile {...this.state} />


    </div>
    );
  }






}



App.propTypes ={
  clientId : PropTypes.string ,
  clientSecret : PropTypes.string
}
App.defaultProps ={
  clientId :'Iv1.cbcc790ddae3b4e8',
  clientSecret :'c9cc0e557d723b666c50e4d6faaaa17290e49655'
}


export default App;
