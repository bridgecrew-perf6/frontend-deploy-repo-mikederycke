import React from 'react';

export default class Loading extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(<div className="loading"><p>Loading...</p></div>)
    }
}