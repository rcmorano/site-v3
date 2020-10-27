import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask, faHome, faAt } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
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
                            <a className="nav-link" href="#"><FontAwesomeIcon icon={faHome} /> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><FontAwesomeIcon icon={faAt} />About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cardano Starter Kits</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cardano APIs</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item text-white" href="#">Action</a>
                            <a className="dropdown-item text-white" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-white" href="#">Something else here</a>
                            </div>
                        </li>
                        
                    </ul>
                    <a href="https://cardano.ideascale.com/a/dtd/Cardano-Starter-Kits-+-APIs/322195-48088"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">GimbaLabs Proposal on Project Catalyst</button></a>
                </div>
            </nav>    
        </div>
    )
}

export default Navbar