import React, {Component} from 'react';
import {Route, RouteWithProps, Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import SearchResult, {StyledDiv} from '../../viewComponents/searchResult';

const address = 'https://api.spotify.com/v1/search?q='


const InputStyled = styled.input`
    width: 80%;
    font-size: 5em;
    border: none;
    border-bottom: solid 2px black;
    outline: none;
    padding-top: 15px;
`

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
        } else {
            this.props.history.push(`/`);
        }

    }

    render(){
        return (<div>
                  <InputStyled placeholder='Search for band' value={this.state.searchTerm} onChange={(val) => this.searchOnSpotify(val)}   />
                  {
                    this.renderSearchResult()
                  }
                  {
                    this.state.error?  <StyledDiv>Something went wrong... </StyledDiv> : null
                }
            </div>)
    }

    renderSearchResult = () => { 
        if(this.state.results.length > 0) {
           return this.state.results.map((res)=> {
                return <SearchResult key={res.id} id={res.id} bandName={res.name} />
            })  
        } else {  
           return this.state.searchTerm.length >= 2 ? <StyledDiv>No band with this name :(</StyledDiv> : null
        } 
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