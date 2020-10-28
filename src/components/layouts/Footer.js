import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
    <FooterContainer>
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-5">
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Collaborators</a></li>
                            <li><a href="#">Mailing List</a></li>
                        </ul>
                    </div>
                    <div className="col-5"></div>
                    <div className="col"></div>
                </div>           
            </div>
        </div>

        <div className="footer-bottom">
            <div className="row">
                <div className="col"></div>
                <div className="col"><p className="text-center">GimbaLabs - Open Source since {new Date().getFullYear()}</p></div>
                <div className="col"></div>  
            </div> 
        </div>
    </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    .footer-top{
        background: var(--mainDark);
        color: var(--mainBlue);     
    }

    .footer-bottom{
        background: var(--mainGray);
        color: var(--mainDark);
        padding-top: 1em;
    }

    ul li a {
        color: var(--mainBlue);
    }

    ul li a:hover {
        color: var(--mainWhite);
    }
`;