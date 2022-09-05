import React from 'react'
import bgimg from '../Images/Soul_Groupwatch.jpg'
import styled from 'styled-components'
const Group = () => {
  return (
    <div>
      <Section>
        <Container>
            <Content>
                <h1 className='disney-titles'>
                 A new way to watch your favourite 
                </h1>
                <li><span>🚀</span>Watch Together,Even when apart</li>
                 <li><span>🚀</span>Stream with upto 6 friends</li>
                <li><span>🚀</span>No more 3, 2, 1...we'll handle the synchronization</li>
                <li><span>🚀</span>Easy setup and sharing</li>
            </Content>
        </Container>
      </Section>
    </div>
  )
}

const Section =styled.section`
    background: url(${bgimg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 71vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (min-width:768px) and (max-width:1200px)
    {
        height: 61vh;
    }
    @media screen and (min-width:280px) and (max-width:767px)
    {
        height: 55vh;
    }
    
`;

const Container=styled.div`
width: 91%;
margin: 0 auto;

@media screen and (min-width:280px) and (max-width:991px)
{
    width: 85%;
}
`;

const Content=styled.div`
margin-top: 17vh;
@media screen and (min-width:768px) and (max-width:1200px)
    {
       margin-top: 13vh;
       opacity: 1;
    }


li{
    
    list-style:none;
    font-size: 1rem;
    font-weight: 1000;
    
    @media screen and (min-width:280px) and (max-width:375px)
    {
       font-size: .75rem;
    }
   

}

`;

export default Group
