import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Layout = styled.div`
    font-size: 4em;
    margin-top: 40px;
    margin-bottom: 25px;
    margin-left: 10%;
    text-align: center;
    margin-right: 10%;
    -webkit-box-shadow: 0px 8px 12px 0px rgba(0,0,0,0.24);
    -moz-box-shadow: 0px 8px 12px 0px rgba(0,0,0,0.24);
    box-shadow: 0px 8px 12px 0px rgba(0,0,0,0.24);
    img{
        padding-top: 5px;
        padding-bottom: 5px;
        &:hover {
        cursor: pointer;
    }}

`

 const Album = (props) => {
     return (
         <Layout>
             <div>{props.name}</div>
             <img src={props.url}/>
             <div>{props.releaseDate}</div>
         </Layout>
     )
}

Album.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
}
export default Album