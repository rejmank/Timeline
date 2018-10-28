import React, {Component} from 'react';
import {Route, RouteWithProps, Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import WithMapedLoading from '../viewComponents/searchResult';
import {StyledLink, StyledDiv, StyledInput} from '../styles';


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
            selectedBandID: ''
        }
    }
   
    componentDidMount() {
        if(sessionStorage.getItem('access_token')){
            this.setState({
                token: sessionStorage.getItem('access_token')
            })
        } else {
            this.props.history.push(`/`);
        }

    }

    render(){
        return (<div>
                  <StyledInput placeholder='Search for band' value={this.state.searchTerm} onChange={(val) => this.searchOnSpotify(val)}   />
                {
               
                    this.state.searchTerm.length >= 2 ?  <WithMapedLoading props={this.state.results}/> : null 
                } 
            </div>)
    }



    searchOnSpotify = (val) => {  
        this.setState({
          searchTerm : val.target.value,
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