import React,{useEffect} from 'react'
import db from '../../firebase'
import Banner from '../Home/Banner'
import background from '../Images/background.png'
import Brand from '../Home/Brand';
import Originals from '../Home/Originals';
import NewToDisney from '../Home/NewToDisney';
import Hollywood from '../Home/Hollywood';
import Popular from '../Home/Popular';
import Trending from '../Home/Trending';
import DisneyKid from '../Home/DisneyKid';
import Footer from '../Login/Footer'
import { useDispatch,useSelector } from 'react-redux';
import { setMovies } from '../../feature/movie/movieSlice';
import { selectUserName } from '../../feature/user/userSlice';
import styled from 'styled-components';

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let kidsTvs = [];
  let originals = [];
  let hollywoods = [];
  let newTos = [];
  let trending = []; 
  let populars = [];

  useEffect(() => {
  
    db.collection("Movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "kidsTv":
            kidsTvs = [...kidsTvs, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "hollywood":
           hollywoods = [...hollywoods, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          case "newTo":
            newTos = [...newTos, { id: doc.id, ...doc.data() }];
            break;
          case "popular":
            populars = [...populars, { id: doc.id, ...doc.data() }];
            break;
    
        }
      });

      dispatch(
        setMovies({
          hollywood: hollywoods,
          newTo: newTos,
          original: originals,
          trending: trending,
          popular:populars,
          kidsTv:kidsTvs,
        })
      );
    });
  }, [userName]);
  return (
    <Container>
        <Banner/>
        <Brand/>
        <Originals/>
        <DisneyKid/>
        <Hollywood/>
        <Popular/>
        <Trending/>
        <NewToDisney/>
        <Footer/>
    </Container>
  )
}

const Container=styled.div`
position: relative;
min-height: calc(100vh - 250px);
padding: 0 calc(3.5vw + 5px);
display: block;
overflow-x: hidden;
background: url(${background}) center/cover no-repeat;
`;


export default Home
