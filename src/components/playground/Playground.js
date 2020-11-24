import './Playground.css'
import React, { Component } from 'react'
import Quote from './Quote';

export class Playground extends Component {
    render() {

        return (
            <div className="Playground">
            <header className="Playground-header">
              
              <Quote />

              <p class="text-light">
                Are you new to web development? Learn how to build a quote app like this one in <a href="https://github.com/GimbaLabs/csk-003" class="text-warning">Cardano Starter Kit #003.</a>
              </p>

              <p class="text-light">
                When you're done with the starter kit, you'll notice that this one has a few more features added - can you figure out how to add them?
              </p>
      
            </header>
          </div>
        )    
    }
}

export default Playground

