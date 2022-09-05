import React from 'react'
import {NavLink} from 'react-router-dom'
import   war  from '../Images/Poster_InfinityWar_EN.jpg'
import Slider from 'react-slick';
import styled from 'styled-components'
import { selecthollywood } from '../../feature/movie/movieSlice';
import { useSelector } from 'react-redux';
//link to css files of slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hollywood = () => {

const movies=useSelector(selecthollywood);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };


  return (
    <>
    <Section>
        <h1>🚀Hollywood</h1>
    <Carousel {...settings}>
    {movies && movies.map((value, index) => (
            <Wrap key={index}>
              <div>
              <NavLink to={`/detail/${value.id}`}>
                <img src={value.CardImg} alt={value.id} />
              </NavLink>
              </div>
            </Wrap>
          ))}
    </Carousel>

    </Section>
    </>
  )
}

const Section=styled.section`
padding: .5rem 0;
h1{
    /* font-size: 1.7rem; */
    text-transform: uppercase;
    font-weight: 300 !important;
    text-shadow: .1rem .1rem .1rem rgba(255,255,255,.1);
    margin:2vh 0 1vh 2rem;

    @media screen and(max-width:991px)
    {
        font-size: 1.1rem;
       

    }
    @media screen and(max-width:550px)
    {
        font-size: .95rem;
    }
}
`;

const Carousel=styled(Slider)`


/* dots  */

ul li button{

    &::before{
        font-size: 11px;
        color: rgb(150,158,171);
    }
}

ul li.slick-active button{
    &::before{
        color: #fff !important;

    }
}

/* button  */

& > button{
    opacity: 0;
    z-index: 1500;
    width: 5vw;
    height: 100%;
    &:hover{
        opacity: 1;
        z-index: 2000;
        transition: opacity .2s ease 0s;
    }

}

.slick-prev{
    left:-75px;
}

.slick-next{
    right: -75px;
}
.slick-list{
    overflow: initial !important;
}
`;

const Wrap=styled.div`
position: relative;

div{
    border-radius: 4px;
    padding: 5px;
    display: block;
    opacity: 1;
    z-index: 2000;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: default;
    object-position: center;

    img{

        width: 100%;
        height: 15vh;
        object-fit: fill;
        border-radius: 4px;
        z-index: 1500;
        position: relative;
        opacity: 1;

        @media screen and (max-width:991px)
        {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }


&:hover{
    opacity: 1;
    z-index: 2000;
    border: 4px solid rgba(249,249,249,.8);
    padding:0px;
    border: 4px solid #fff;
    transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
}
}
`;
export default Hollywood
