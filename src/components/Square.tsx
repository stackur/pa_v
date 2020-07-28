import React, { Component } from 'react';


class Square extends React.Component{
    
    //field
    field: number;

    //constructor
    constructor (field: number){
        super(field);
        this.field = field;
    }
    
    render() {
        return (
          <button className="square">
            {this.field}
          </button>
        );
    }
}

export default Square;