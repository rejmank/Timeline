import React, { Component } from "react";
import queryString from "query-string";
import Route from "react-router-dom";
import {StyledH1, StyledButton, StyledDiv} from '../styles';
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
      sessionStorage.setItem("access_token", params.access_token);
      this.props.history.push(`/search`);
    } else if (this.props.location.search !== "") {
      this.setState({
        error: false
      });
    } else {
      if (sessionStorage.getItem("access_token")) {
        this.props.history.push("/search");
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.error ? (
          <StyledH1> Sorry but we were not able to log you in </StyledH1>
        ) : (
          <StyledH1>We need you to log in</StyledH1>
        )}
        <StyledButton onClick={this.login}>log in</StyledButton>
        {this.state.error ? null : (
          <StyledDiv>
            Unfortunately the Spotify doesn't allow us to search spotify without
            login :(
          </StyledDiv>
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
