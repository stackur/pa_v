import React, { Component } from 'react';

export default class Square extends React.Component <any, { xory: any }> {
    
    constructor(props: any) {
        super(props);
        this.state = {
            xory: null,
        }
    }

    render() {
        return (
          <button
            className="square"
            onClick={() => this.setState({xory: 'X'})}
          >
            {this.state.xory}
          </button>
        )
    }
    
}

