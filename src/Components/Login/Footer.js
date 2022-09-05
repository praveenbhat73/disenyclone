import React from 'react'
import logo from '../Images/logo.svg'
import styled from 'styled-components'

const Footer = () => {
  return (
    <div>
       <Section>
        <Container>
            <FooterBrand>
                <img src={logo} alt="disneylogo/img" />
            </FooterBrand>
            <Nav>
                <li><p>English</p></li>
                <li><p>Subscriber Agreement</p></li>
                <li><p>Privacy Policy</p></li>
                <li><p>Children's Online Privacy Policy</p></li>
                <li><p>Interest Based Ads</p></li>
                <li><p>Supported Devices</p></li>
                <li><p>Help</p></li>
                <li><p>Gift Disney+</p></li>
                <li><p>About Us</p></li>
                <li><p>Premier Access</p></li>
                <li><p>The Disney Bundle</p></li>
            </Nav>
            <Cw><p>Copyright DisneyPlusClone-© <span style={{color:'gray'}}>PNB</span> 2022</p></Cw>
        </Container>
       </Section>
    </div>
  )
}


const Section = styled.section`
padding: 2rem;
margin-bottom: 0;

@media screen and (max-width:550px)
{
    padding: 1rem;
}

`;

const Container=styled.div`
width: 95%;
margin: 0 auto;
`;

const FooterBrand=styled.div`
text-align: center;

img
{
    width: 10rem;
    height: auto;
    object-fit: fill;

    @media screen and (max-width:550px)
{
    width: 7rem;
}

}
`;

const Nav=styled.nav`
display: flex;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
flex-shrink: 0;
flex-grow: initial;
justify-content: center;

li{
    list-style: none;


p{
    padding: 0.5rem;
    font-size: .9rem;
    margin-right: .3rem;
    @media screen and(max-width:550px)
{
    padding: .1rem;
    font-size:.75rem;
}

}
}
`;

const Cw=styled.div`
margin-top: 1vh;
text-align: center;
font-weight: 400;

@media screen and(max-width:550px)
{
    font-size: .9rem;
}
`
export default Footer
