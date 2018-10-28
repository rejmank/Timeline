import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../styles'

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