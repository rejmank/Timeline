import React from 'react';
import PropTypes from 'prop-types';
import {StyledLink, StyledDiv} from '../styles';
import {WithLoading} from '../containerComponents/withLoading'


const SearchResult = (props) => {
    console.log(props)
    return (
        
    <StyledLink to={'/timeline/' + props.id}>
        <StyledDiv>
            {props.name}
        </ StyledDiv>
    </StyledLink>
    )
}

SearchResult.propTypes = {
    bandName: PropTypes.string,
    id: PropTypes.string
}

function renderSearchResult(props) { 
    console.log('renderSR',props);
    console.log(props.props.length);
    if(props.props.length > 0) {
        console.log('true')
       return true
    } else {  
        console.log('false')
       return false
    } 
}

const WithMapedLoading = WithLoading(SearchResult, renderSearchResult, 'something' );
export default WithMapedLoading;