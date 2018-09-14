import React, {Component} from 'react';
import {Route, RouteWithProps, Link} from 'react-router-dom';
import axios from 'axios';
import Timeline from '../timeline/timeline';

const address = 'https://api.spotify.com/v1/search?q='

// TODO handle outdated acess token
// TODO add search state

class Search extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
            results: [],
            token: '',
            error: false,
            selectedBandID: ''
        }
    }

    componentDidMount() {
        if(sessionStorage.getItem('access_token')){
            this.setState({
                token: sessionStorage.getItem('access_token')
            })
        }else {
            this.props.history.push(`/`);
        }

    }

    render(){
        return (<div>
                  <input value={this.state.searchTerm} onChange={(val) => this.searchOnSpotify(val)}   />
                  {
                    this.renderSearchResult()
                  }
                  {
                    this.state.error?  <div>Something went wrong... </div> : null
                }
            </div>)
    }

    renderSearchResult = () => { 
        if(this.state.results.length > 0) {
           return this.state.results.map((res)=> {
                return <Link key={res.id} to={'/timeline/bandId?=' + res.id}> <div >{res.name}</div> </Link>
            })  
        } else {  
           return this.state.searchTerm.length >= 2 ? <div>No band with this name :(</div> : null
        } 
    }

    searchOnSpotify = (val) => {     
        this.setState({
          searchTerm : val.target.value,
          results : []
        });
        if(val.target.value.length >= 2) {
          axios.get(address + val.target.value + '&type=artist',{
            headers : {
            Authorization: 'Bearer ' + this.state.token 
          }}).then(res => {
            this.setState({
                results : res.data.artists.items
            })
           
          });
        }
      }

} 

export default Search;