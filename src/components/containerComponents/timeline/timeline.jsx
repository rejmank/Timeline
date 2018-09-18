import React, { Component } from "react";
import axios from "axios";
import queryString from "query-string";
import Album from "../../viewComponents/album";
import Space from "../../viewComponents/space";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledH1 = styled.h1`
font-size 6em;`


const BackButton = styled.div`
  font-size: 2em;
  text-align: left;
  padding-left: 70px;
  padding-top: 25px;
`

const StyledLink = styled(Link)`
text-decoration: none;
width: 80%;
`

const route = "https://api.spotify.com/v1/artists/";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      albums: [],
      bandId: ""
    };
  }

  componentDidMount = () => {
    if (sessionStorage.getItem("access_token")) {
      this.setState({
        token: sessionStorage.getItem("access_token")
      });
    } else {
      this.props.history.push(`/`);
    }

    this.setState({
      bandId: this.props.location.pathname.split("/")[2]
    });

    axios
      .get(route + this.props.location.pathname.split("/")[2] + "/albums", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("access_token")
        }
      })
      .then(res => {
        this.setState({
          albums: res.data.items.sort((a, b) => {
            return new Date(b.release_date) - new Date(a.release_date);
          })
        });
      })
      .catch(error => {
        if (error.status === 400) {
          this.props.location.push("/");
        }
      });
  };

  render() {
    return (
      <div>
        <StyledLink to="/search">
          <BackButton>Back</BackButton>
        </StyledLink>
        <StyledH1>This is band timeline</StyledH1>
        {this.state.albums ? (
          this.state.albums.map((album, i) => {
            return (
              <div key={album.id}>
              <Album
                  name={album.name}
                  url={album.images[1].url}
                  releaseDate={album.release_date}
                />
               <Space numberOfSpaces={this.getNumberOfSpaces(i)} 
               />
              </div>
            );
          })
        ) : (
          <h3>There are no albums...</h3>
        )}
      </div>
    );
  }

  getNumberOfSpaces = firstIndex => {
    if (firstIndex != this.state.albums.length - 1) {
      const first = new Date(this.state.albums[firstIndex].release_date).getFullYear();
      const second = new Date(this.state.albums[firstIndex + 1].release_date).getFullYear();
      return (first - second);
    }
  };
}

export default Timeline;
