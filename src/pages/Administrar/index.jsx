import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListAdmCard from '../../components/ListAdmCard';
import api from '../../services/api';
import {Link} from 'react-router-dom';
// import styles from './styles.module.css';


const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin: 50px auto;
max-width: 960px;
color: #691488;
font-family: "fantasy";
text-align: center;
padding: 10px 20px;

`


  
const ListContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background-color: #691488;
padding: 10px 20px;



`
const Button = styled.button`
margin-bottom: 20px;
background-color: #c1a7eb;
align-items: center;
`



function ListAdm (){
  const[cards, setCards] = useState([]);
  const[search] = useState('');

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
        <h1> Administrando Marvel List Card</h1>
       <Link to="/cadastrar">
        <Button> Cadastar novo</Button>
       </Link>
      




        <ListContainer>
          {
            cards.map(card => {
              return ( <ListAdmCard
                key={card.id} 
                cards={card}
                
                  /> )
            })
          }
          
        </ListContainer>
    </Container>
    )
}

export default ListAdm;