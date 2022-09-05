import React from 'react'
import imgs from '../Images/jugle.jpg'
import styled from 'styled-components'
const Stream = () => {
  return (
    <><Section>
        <Container>
            <TextInfo>
                
                    <h1 className='disney-title'>
                    Explore Disney+ Originals
                    </h1>
                    <p> The biggest movies and TV shows are always better on a big screen. Simply plug in your Disney+ TV Stick and stream On🚀. Hold the Remote in one hand and Juice🍹in another find your treasured shows in a seconds</p>
                    <button type='button' className='btn-theme-disney'>CLICK NOW</button>
                
            </TextInfo>
            <ImgInfo>
            <img src={imgs} alt="stream/img" />
            </ImgInfo>
        </Container>
    </Section>

    </>
  )
}


const Section=styled.section`
    padding: 50px 5%;
    position: relative;
    background: transparent;

    @media screen and (max-width: 991px)
  {
      padding: 35px 50px;

  }

  @media screen and (max-width: 767px)
  {
      padding: 25px;
  }
`;

const Container=styled.div`
display: flex;
align-items: center;
flex-direction: row-reverse;
justify-content: space-between;

 @media screen and (max-width: 991px)
  {
      flex-direction: column;
      justify-content: center;
      text-align: center;
  }
 `;


const TextInfo=styled.div`
width: 48%;
flex: 0 auto;
opacity: 1;
z-index: 1;
position: relative;

@media screen and (max-width: 991px)
  {
      width: 100%;
      padding: 0;
  }
 
h1{
    font-size: 1.7rem;
    font-weight: 1000;
    opacity: 1.5;
}
p{
    font-size: 1.25rem;
    font-weight: 100;
    opacity: .75;
   
    
    @media screen and (min-width:375px) and (max-width:550px)
    {
        font-size:.85rem;
        line-height: 1rem;
    }
    @media scree and (min-width: 280px) and (max-width:375px)
    {
        font-size: .7rem;
        line-height: 1rem;
        margin-top: 1vh;
    }

}

`;

const ImgInfo=styled.div`
width: 48%;
flex: 0 auto;
opacity: 1;
z-index: 1;
position: relative;
 

@media screen and (max-width: 991px)
  {
      width: 100%;
      padding: 0;
  }


img{
    width: 100%;
    max-width: 600px;
    height: auto;

    @media screen and (min-width:500px) and (max-width:1200px)
    {
        height: auto;
        width: 100%;
        object-fit: contain;
    }

    @media screen and (min-width:280px) and (max-width:500px)
    {
        height: 31vh;
        width: 100%;
        object-fit: contain;
    }
}
`;
export default Stream
