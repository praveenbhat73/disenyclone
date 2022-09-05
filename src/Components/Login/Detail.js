import React,{useState,useEffect} from 'react'
import playicon from '../Images/play-icon-black.png'
import trailer from '../Images/play-icon-white.png'
import groupicon from '../Images/group-icon.png';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import db from '../../firebase'
const Detail = () => {

const {id}=useParams();
const [State,setState]=useState();
useEffect(()=>{
  db.collection("Movies").doc(id).get().then((doc)=>{
    if(doc.exists){
      setState(doc.data());

    }
    else
    {
      console.log("Detail Can't be fetched at this movement!")
    }
  }
  )
},[id])
  return (
    <>
    {
      State && (
        <>
           <Backgrond>
            <Back>
            <img src={(State.BackgroundImg)} alt="backgroun/image" />
           </Back>
      <Container>
        <Content>
          <ImageTitle>
            <img src={State.TitleImg}alt="image/title"/>
          </ImageTitle>
          <h2>{State.Genres}</h2>

          <p>
          {
            State.Description
          }
          </p>

          <ButtonGroup>
            <Playbtn>
                <img src={playicon} alt="icon/img" /><span>Play</span>
            </Playbtn>
                <Trailerbtn>
                    <img src={trailer} alt="img/icon" /><span>Trailer</span>
                </Trailerbtn>
                    <AddtoPlay>
                        <span></span>
                        <span></span>
                    </AddtoPlay>
                        <Groupwatch>
                            <img src={groupicon} alt="icon/img" />
                        </Groupwatch>
          </ButtonGroup>
        </Content>
      </Container>
      </Backgrond>
        </>
      )
    }
    </>
  )
}

const Backgrond=styled.main`

position: relative;
  min-height: calc(100vh-250px);
  background: 
 center/cover no-repeat;
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);


`;

const Back= styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100%;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;


const Container=styled.div`
width: 95%;
height: auto;
margin: 0 auto;
`;

const ImageTitle=styled.div`
width: 100%;
max-width: 450px;
display: flex;
align-items: center;
/* margin-top: 19vh; */
justify-content: center;
flex-direction: column;
flex-wrap: wrap;


@media screen and (min-width:550px) and (max-width:1200px){
    max-width: 325px;
}

@media screen and (min-width:375px) and (max-width:550px){
    max-width: 250px;
}

@media screen and (min-width:280px) and (max-width:375px){
    max-width: 150px;
}


img{
  width: 100%;
  height: auto;
  object-fit: contain;
}

`;


const Content=styled.div`
display: flex;
align-items: flex-start;
min-height: 95vh;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
position: relative;
@media screen and (min-width:550px) and (max-width:1200px){
   min-height: 72vh;
}

@media screen and (min-width:375px) and (max-width:550px){
  min-height: 65vh;
}


@media screen and (min-width:280px) and (max-width:375px){
    min-height: 150px;
    object-fit: fill;
}


h1{
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500 !important;

  @media screen and (min-width:550px) and (max-width:1200px)
  {
    font-size: 1rem;
  }

  @media screen and (min-width:375px) and (max-width:767px)
  {
    font-size: .75rem;
  }

  @media screen and (min-width:280px) and (max-width:375px)
  {
    font-size: .7rem;
    max-width: 250px;
  }
}

p{
  line-height: 1.4;
  font-size: 20px;
  padding: 1rem 0;
  color: #f9f9f9;
  max-width: 650px;
  width: 100%;
  height: auto;

  @media screen and (min-width:550px) and (max-width:1200px)
  {
    font-size: 1rem;
    max-width: 550px;
  }

  @media screen and (min-width:375px) and (max-width:767px)
  {
    font-size: .75rem;
    padding: .5rem 0;
    max-width: 400px;
  }

  @media screen and (min-width:280px) and (max-width:375px)
  {
    padding: .3rem 0;
    font-size: .7rem;
    max-width: 400px;
  }
}
`;

const ButtonGroup=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
`;
const Playbtn=styled.button`
margin-right: 22px;
cursor: pointer;
outline: none;
border: 1px solid rgba(249,249,249,1);
font-size: 1.2rem;
background: rgba(249,249,249,1);
border-radius:.345rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;

padding: .5rem 1rem;
@media screen and (min-width:550px) and (max-width:1200px)
{
  padding: .5rem 1rem;
}

@media screen and (min-width:375px) and (max-width:550px)
{
  padding: .5rem 1rem;
}

@media screen and (min-width:280px) and (max-width:375px)
{
  border-radius: 0.145rem;
  margin-right: 13px;
  background: #f9f9f9;
  padding: .4rem .7rem;
}

img{
    width: 32px;
    height: auto;
    z-index: 1500;
    opacity: 1;
    object-fit: contain;

    @media screen and (min-width:550px) and (max-width:1200px)
{
  width: 25px;
}

@media screen and (min-width:280px) and (max-width:550px)
{
 width: 19px;
}

}
span{
    line-height: 1.08;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 300 !important;
    letter-spacing: 1px;

    @media screen and (min-width:550px) and (max-width:1200px)
{
  font-size: 1rem ;
}

@media screen and (min-width:375px) and (max-width:550px)
{
  font-size: .8rem;
}

@media screen and (min-width:280px) and (max-width:375px)
{
  font-size: .8rem;

}
}
`;
const Trailerbtn=styled(Playbtn)`
color: rgba(249,249,249,1);
background: rgba(0,0,0,.5);
border: 1px solid rgba(249,249,249,1);
&:hover{
  background: rgb(198,198,198,1);
}
`;
const AddtoPlay=styled.button`
height: 41px;
width: 42px;
display: flex;
cursor: pointer;
margin-right: 22px;
align-items: center;
flex-direction: row;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0,0,0,.5);

@media scrren and (min-width:550px) and (max-width:1200px){
  height: 35px;
  width: 36px;
}

@media  screen and (min-width:280px) and (max-width:550px)
{
  height: 29px;
  width: 29px;
  margin-right: 13px;
}

span{
  background-color: rgb(249,249,249);
  display: inline-block;

  &:first-child{
    height: 2px;
    width: 16px;
    transform: translate(1px,0px) rotate(0deg);
    @media screen and (min-width:280px) and (max-width:550px)
    {
      width: 15px;
    }
  }
  &:nth-child(2){
    width: 2px;
    height: 16px;
    transform: translateX(-8px) rotate(0deg);
    @media screen and (min-width: 280px) and (max-width:550px)
    {
      height: 13px;
    }
  }
}
`;
const Groupwatch=styled.button`
height: 39px;
width: 39px;
display: flex;
cursor: pointer;
background: white;
align-items: center;
flex-direction: row;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background: rgba(0,0,0,.5);
@media screen and (min-width: 280px) and (max-width:1200px)
{
  height: 31px;
  width: 31px;
}
img{
  width: 100%;
  height: auto;
  object-fit: contain;
  @media screen and (min-width:550px) and (max-width:1200px)
  {
    height: 29px;
    width: 29px;

  }

  @media screen and (min-width:280px) and (max-width:550px)
  {
    height: 23px;
    width: 23px;

  }

}
`;

export default Detail
