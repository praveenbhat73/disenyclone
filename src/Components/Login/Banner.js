import React from 'react'
import styled from 'styled-components'
import logo from '../Images/cta-logo-one.svg'
import logo1 from '../Images/cta-logo-two.png'

const Banner = () => {
  return (
    <div>
      <Background>
        <Container>
            <Content>
              
                <img src={logo} alt="logo/img" />
                <button className='get-bundle-btn' type='button'>GET ALL HERE</button>
                <h4>Stream Now: Terms Apply</h4>
                <img src={logo1} alt="logo/img" />
                <button type='button' className='links'>Sign Up For Disney+</button>
                <button type='button' className='links'>Get Premium Access Just For $7/Month or $80/Year</button>
            </Content>
        </Container>
      </Background>
    </div>
  )
}
const Background =styled.section`
background: url('https://cannonball-cdn.bamgrid.com/assets/originals/MLP_HERO_US_TILES_Aug_2020_v2.jpg');
height:95vh;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
@media screen and (min-width:768px) and (max-width:1200px){
  height: 85vh;
}
@media screen and (min-width:280px) and (max-width:767px){
  height: 75vh;
}

`;



const Container=styled.div`
width: 85%;
margin: 0 auto;

`;
const Content=styled.div`

width: 100%;
margin: 0 auto;
max-width: 650px;

display: flex;
align-items: center;
flex-direction: column;
justify-content: center;

@media screen and (min-width:768px) and (max-width:1200px){
  max-width: 550px;
}

@media screen and (min-width:550px) and (max-width:767px){
  max-width: 450px;
  margin-top: 13vh;
}

@media screen and (min-width:375px) and (max-width:550px){
  max-width: 350px;
  margin-top: 13vh;
}

@media screen and (min-width:280px) and (max-width:375px){
  max-width: auto;
  margin-top: 13vh;
}

h4{
  color: white;
  margin-top: 1vh;
  margin-bottom: 1vh;
}


img{
  width: 100%;
  height: auto;
  display: block;
  max-width: 600px;
  object-fit: contain;
  margin-bottom: 1vh;
}

> .get-bundle-btn{
  outline: none;
  border: none;
  width: 100%;
  padding: 11.5px 15px;
  align-items: center;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: #0063e5;
  color: #f9f9f9;
  font-size: 18px;
  border-radius: .145rem;
  transition: all .5s ease-in-out;


  @media screen and (min-width:550px) and (max-width:1200px){
  padding: 10px 0;
  font-size: 15px;
}

@media screen and (min-width:280px) and (max-width:550px){
 padding: 5px 0;
 font-size: 14px;
}

&:hover{
  background: #0085ff;
  cursor: pointer;
}
}
> .links{
  outline: none;
  border: none;
  font-size: 19px;
  background: transparent;
  color: #f9f9f9;
 

  @media screen and (min-width:280x) and (max-width:550px){
  font-size: 15px;
}
}

`;
export default Banner
