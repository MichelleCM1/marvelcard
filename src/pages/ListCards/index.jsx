import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListCard from '../../components/ListCard';
import api from '../../services/api';
import styles from './styles.module.css';


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

function ListCards (){
  const[cards, setCards] = useState([]);
  const[search, setSearch] = useState('');

  useEffect( () => {
      const url = '/cards';
      
      const params = {};
      if (search) {
        params.title_like = search

        api.get('/cards?_embed=cards', {params})
          .then( (response) => {
            // console.log(response)
            setCards(response.data)
          })

      } else {
        
        api.get(url) // all
        .then( (response) => {
          // console.log(response)
          setCards(response.data)
        })

      }
  },[search]) 


    return(
          <Container>
        <h1>Marvel List Card</h1>
        <input 
          className={styles.listSearchInput}
          type="search" 
          placeholder='Buscar Herói'
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <ListContainer>
          {
            cards.map(card => {
              return ( <ListCard 
                key={card.id} 
                cards={card}
                
                  /> )
            })
          }
          
        </ListContainer>
    </Container>
    )
}

export default ListCards;