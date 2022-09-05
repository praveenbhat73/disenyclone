import React from 'react'
import img1 from '../Images/ForkyAsksAQuestion_en-US.jpg'
import img2 from '../Images/Disney_MLP_GridItem_SWRiseofSkywalker.jpg'
import img3 from '../Images/Disney_MLP_GridItem_TS4_AUNZ.jpg'
import img4 from '../Images/LUCA-2.png'
import img5 from '../Images/Mickey_Mouse_Clubhouse_Grid_Item_052820.jpg'
import img6 from '../Images/moana-poster-4-2.png'
import img7 from '../Images/Poster_InfinityWar_EN.jpg'
import img8 from '../Images/SW_Clone_Wars.png'
import img9 from '../Images/Soul_EN_(1).png'
import styled from 'styled-components'

const Panther = () => {
    const AP=[
        {imgs:img1},{imgs:img2},{imgs:img3},
        {imgs:img4},{imgs:img5},{imgs:img6},
        {imgs:img7},{imgs:img8},{imgs:img9},
    ]
  return (
    <div>
     <Section>
        <Container>
            <Title>
                <h1 className='disney-title'>
                    Stream Exclusive Disney+ Originals
                </h1>
                <p>
                Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.
                </p>
            </Title>
            <GridImg>
                {
                    AP && AP.map((value,index)=>(
                        <Image key={index}>
                    <img src={value.imgs} alt="grid/img" />
                </Image>
                    ))
                }
            </GridImg>
            <GetBtb><button type='button' className='btn-theme-disney'>GET THE BUNDLE</button></GetBtb>
        </Container>
     </Section>
    </div>
  )
}
const Section =styled.section`
padding: 5vh 0;
position: relative;
`;

const Container=styled.div`
width: 95%;
margin: 0 auto;
`;

const Title=styled.div`
text-align: center;
margin-bottom: 3vh;

p{
    font-size: 1rem;
    opacity: .9;
    @media screen and (max-width:550px)
    {
        font-size: .8rem;
    }
}
`;

const GridImg=styled.div`
display: grid;
gap: 15px 25px;
grid-template-columns: repeat(3, minmax(0,1fr));

@media screen and (max-width:991px)
{
    grid-template-columns: repeat(2,minmax(0,1fr));
}

`;

const Image=styled.div`
width: 100%;
padding: 0;
border-radius: 0.245rem;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px ;

img{
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.245rem;
}
`;

const GetBtb=styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 1vh 0;
flex-direction: row;
`;
export default Panther
