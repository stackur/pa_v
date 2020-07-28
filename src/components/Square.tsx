import React, { Component } from 'react';

class Square extends React.Component{
    constructor(props: any) {
        super(props);
        this.state = {
            value: null,
        }
    }
    
}

export function buildSquare(value: any) {
    return (
        <button className="square" onClick={() => {alert('click')}}>
            {value}
        </button>
    );
}