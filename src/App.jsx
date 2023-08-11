import React, {useState, useEffect} from 'react';
import ListCard from './components/ListCard';
import {getCard} from './../api/CardService';
import styled from 'styled-components';
import api from './services/api';





const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin: 50px auto;
max-width: 960px;
color: #691488;
font-family: "fantasy";
text-align: center;

`


  
const ListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background-color: #691488;
padding: 10px;



`


function App() {
   const [cards, setCard ] = useState([]); 

   useEffect( () => {
    const url ='/cards';
     api.get(url)

   .then( (response) => {
    
    setCard(response.data)}
   )
  },[])


  return (
    
    <Container>
     <h1 >Marvel Card </h1>
     <ListContainer>
       {
       cards.map(card =>{
        return (<ListCard
          key={card.url}
          cards={card}
  
          />)
       })
        }

     </ListContainer>
     </Container>
    
  )
}
export default App
