import React, { Component } from "react";
import queryString from "query-string";
import Route from "react-router-dom";
// TODO remove hardoced token into env;

const redirectUri = "http://localhost:3000/";
const client_id = "c5410212418f4394a1d5f15377d9b9de";
const address = "https://accounts.spotify.com/authorize?";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  componentDidMount() {
      if (this.props.location.hash !== "") {
        const params = queryString.parse(this.props.location.hash);
        console.log(params);
        sessionStorage.setItem('access_token', params.access_token);
        this.props.history.push(`/search`);
      } else if(this.props.location.search !== "") {
        this.setState({
          error: false
        });
      } else {
        console.log('else');
        if(sessionStorage.getItem('access_token')) {
          this.props.history.push('/search');
        }
      }
  }

  render() {
    return (
      <div>
        {this.state.error ? (
          <h1> Sorry but we were not able to log you in </h1>
        ) : (
          <h1>We need you to log in</h1>
        )}
        <button onClick={this.login}>login</button>
        {this.state.error ? null : (
          <div>
            Unfortunately the Spotify doesn't allow us to search spotify without
            login :(
          </div>
        )}
      </div>
    );
  }

  login = () => {
    window.location.replace(
      address +
        "client_id=" +
        client_id +
        "&redirect_uri=" +
        redirectUri +
        "&response_type=token&state=akdfsdlkfms"
    );
  };
}

export default Login;