import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
    <FooterContainer>
        <div className="footer-bottom">
            <div className="row">
                <div className="col"></div>
                <div className="col"><p className="text-xs-center">GimbaLabs - Open Source since {new Date().getFullYear()}</p></div>
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

    .footer-bottom{
        background: var(--mainGray);
        color: var(--mainDark);
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;