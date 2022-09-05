import React from 'react'
import img1 from '../Images/TV.png'
import img2 from '../Images/Laptop.png'
import img3 from '../Images/mobile.png'
import img4 from '../Images/XBOX.png'
import styled from 'styled-components'

const Footgrid = () => {
    const GRAP=[
        {imgs:img1,title:"TV"},
        {imgs:img2,title:"LAPTOP"},
        {imgs:img3,title:"MOBILE"},
        {imgs:img4,title:"XBOX"},
    ]
  return (
    <div>
     <Section>
        <Container>
            <Title>
                <h1 className='disney-title'>
                   Available Stream On 
                </h1>
                
            </Title>
            <GridImg>
                {
                    GRAP.map((value,index)=>(
                        <Image key={index}>
                    <img src={value.imgs} alt={value.imgs} />
                    <h2>{value.title}</h2>
                </Image>
                    ))
                }
            </GridImg>
            
        </Container>
     </Section>
    </div>
  )
}
const Section =styled.section`
padding: 3vh 0 0vh 0;
position: relative;
`;

const Container=styled.div`
width: 95%;
margin: 0 auto;
`;

const Title=styled.div`
text-align: center;
margin:0 0 4vh 0;



`;

const GridImg=styled.div`
display: grid;
gap: 15px 25px;
grid-template-columns: repeat(4, minmax(0,1fr));

@media screen and (min-width:200px) and (max-width:767px)
{
    grid-template-columns: repeat(2,minmax(0,1fr));
}

`;

const Image=styled.div`
width: 100%;
padding: 0;
text-align: center;
border-radius:4px;
@media screen and (min-width:768px) and (max-widdth:991px)
{
    width: 100%;
}

img{
    width: 100%;
    height: 115px;
    object-fit: contain;
  
    @media screen and (min-width:768px) and (max-widdth:991px)
{
    height: 85px;
}

@media screen and (min-width:550px) and (max-widdth:768px)
{
    height: 75px;
}

@media screen and (min-width:200px) and (max-widdth:px550)
{
    height: 55px;
}
}

h2{
    font-weight: 500 !important;

    @media screen and (min-width:200px) and (max-widdth:px550)
{
    font-size:.9rem ;
}
}
`;


export default Footgrid
