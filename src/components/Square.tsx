import React, { Component } from 'react';

export default class Square extends React.Component <any, { xory: any }> {
    


    
    render() {
        return (
          <button
            className="square"
            onClick={() => this.props.onClick()}
          >
            {this.props.xory}
          </button>
        )
    }
    
}

