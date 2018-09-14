import React,
{ Component } from 'react';
import axios from 'axios';
import queryString from "query-string";

const route = 'https://api.spotify.com/v1/artists/';

class Timeline extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      token : '',
      albums : [],
      bandId : ''
    }
  }
  
  componentDidMount = () => {
    console.log(this.props);
    if(sessionStorage.getItem('access_token')){
      this.setState({
        token: sessionStorage.getItem('access_token')
      })
    }else {
      this.props.history.push(`/`);
    }
    console.log(this.props.location.pathname.split('/'));
    this.setState({
      bandId : this.props.location.pathname.split('/')[2]
    })
    axios.get(route + this.props.location.pathname.split('/')[2]+ '/albums', {
      headers : {
        Authorization: 'Bearer ' + sessionStorage.getItem('access_token') 
      }}).then((res => {
        console.log(res);
        this.setState({
          albums : res.data.items
        })
      }));
    }
    
    
      render(){
        return (<div>
                  <h1>This is timeline</h1>
                  {
                   this.state.albums ? this.state.albums.map(album => {
                      return (<div key={album.id}>
                                <h3>{album.name}</h3>
                                <img src={album.images[1].url} />
                              </div>)
                    }) : <h3>Žádné album nenalezeno</h3>
                  }  
                </div>);
      }
}

export default Timeline;
