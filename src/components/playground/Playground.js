import './Playground.css'
import React, { Component } from 'react'
import Quote from './Quote';

export class Playground extends Component {
    render() {

        return (
            <div className="Playground">
            <header className="Playground-header">
              
              <Quote />
      
            </header>
          </div>
        )    
    }
}

export default Playground

