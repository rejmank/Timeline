import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const StyledDiv = styled.div`
    font-size: 3em;
    border: none;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    color: black;
    border-bottom: none;
    
`
const StyledLink = styled(Link)`
    text-decoration: none;
    width: 80%;
`

const SearchResult = (props) => {
    return (
    <StyledLink to={'/timeline/' + props.id}>
        <StyledDiv>
            {props.bandName}
        </ StyledDiv>
    </StyledLink>
    )
}

SearchResult.propTypes = {
    bandName: PropTypes.string,
    id: PropTypes.string
}

export {StyledDiv};
export default SearchResult;