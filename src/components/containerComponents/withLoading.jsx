import React from 'react'

const  WithLoading = (Component, isLoadingFn, message, props) => (props) => {
return isLoadingFn(props) ? props.props.map((prop) => <Component {...prop} /> ) : <div>{message}</div> 
    
}

export {WithLoading}