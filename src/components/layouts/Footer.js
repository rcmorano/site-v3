import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
    <FooterContainer>
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Column</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Item</a></li>
                            <li><a href="/">Item</a></li>
                            <li><a href="/">Item</a></li>
                            <li><a href="/">Item</a></li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Column</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Item</a></li>
                            <li><a href="/">Item</a></li>
                            <li><a href="/">Item</a></li>
                            <li><a href="/">Item</a></li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Column</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Item</a></li>
                            <li><a href="/">Item</a></li>
                            <li><a href="/">Item</a></li>
                            <li><a href="/">Item</a></li>
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Item</a></li>
                            <li><a href="/">Item</a></li>
                            <li><a href="/">Item</a></li>
                            <li><a href="/">Item</a></li>
                        </ul>
                    </div>
                </div>           
            </div>
        </div>

        <div className="footer-bottom">
            <div className="col"><p className="text-xs-center">GimbaLabs - Open Source since {new Date().getFullYear()}</p></div>     
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
        padding-top: 1rem;   
    }

    .footer-bottom{
        background: var(--mainGray);
        color: var(--mainDark);
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    ul li a {
        color: var(--mainBlue);
    }

    ul li a:hover {
        color: var(--mainWhite);
    }
`;