import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faHome, faAt } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faFlask} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link ml-5" href="#"><FontAwesomeIcon icon={faHome} /> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-5" href="#"><FontAwesomeIcon icon={faAt} />About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-5" href="#">Cardano Starter Kits</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-5" href="#">Cardano APIs</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle ml-5" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Learn More
                            </a>
                            <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item text-white" href="#">Principles</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-white" href="#">Learning Philosophy</a>
                            <a className="dropdown-item text-white" href="#">Local Philosophy</a>
                            </div>
                        </li>
                        
                    </ul>
                    <a href="https://cardano.ideascale.com/a/dtd/Cardano-Starter-Kits-+-APIs/322195-48088"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">GimbaLabs Proposal on Project Catalyst</button></a>
                </div>
            </nav>    
        </div>
    )
}

export default Navbar;