import React, {useState, useEffect} from 'react';
import Atropos from 'atropos/react';
import ListCard from './components/ListCard';
import {getCard} from './../api/CardService';
import styled from 'styled-components';
import 'react-animated-css';


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
   const [card, setCard ] = useState([]); 
   useEffect( () => {
    setCard (getCard)
  }, 
   [])


  return (
    
    <Container>
     <h1 className="animate__zoomIn" >Marvel Card </h1>
     <ListContainer>
       {
       card.map(card =>{
        return (<ListCard
          key={card.url}
          title={card.title}
          image={card.image}
          description={card.description}
          />)
       })
        }

     </ListContainer>
     </Container>
    
  )
}
export default App
