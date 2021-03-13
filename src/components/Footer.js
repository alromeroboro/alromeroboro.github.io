import  React from 'react'
import { FooterWrapper,  FooterSocialWrapper, FooterSocialIcons} from '../elements'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaRegEnvelope } from 'react-icons/fa';

export const Footer = () => {
    return(
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a aria-label="Mute volume" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
                    <a aria-label="Mute volume" href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
                    <a aria-label="Mute volume" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                    <a aria-label="Mute volume" href="/contact" target="_blank" rel="noopener noreferrer"><FaRegEnvelope/></a>    
                </FooterSocialIcons>
                <p>&copy; 2021 Alberto Romero B. All rights reserved</p>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}