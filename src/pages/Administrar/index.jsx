import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListAdmCard from '../../components/ListAdmCard';
import api from '../../services/api';
import {Link} from 'react-router-dom';


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
position: relative;
left: 600px;

`
const Div = styled.div`
max-width: 960px;
display: flex;
gap: 10px;
vertical-align: middle;
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
color: #ccc;
align-items: center;
display: flex;
cursor: pointer;
background-color: #a60fe2;
padding: 13px 25px;
font-weight: 400;
border-radius: 8px;
font-size: 16px;
`

const Input = styled.input`
  display: flex;
  height: 42px;
  border: 1px solid #ccc;
  border-radius: 8px ;
  width: 100%;
  margin-bottom:20px;
  padding: 0 10px;
  font-size:25px;
`
const StyledH1 = styled.div`
color: #9d12d4;
font-size: 50px;
display: flex;
position: relative;
left: 600px;

`



function CadastrarAdministrar(){
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
      <>
      <StyledH1> Administrando Marvel List Card</StyledH1>
      <Container>
          
      <Div>
            <Input 
                type="search"
                placeholder='Busque o heroi'
                value={search}
                onChange={(ev)=> setSearch(ev.target.value)}
                />
              <Link to="/administrar/cadastrar">
              <Button>Cadastrar</Button>
              </Link>
      </Div>
        
          <ListContainer>
            {
              cards.map(card => {
                return ( <ListAdmCard
                  key={card.id} 
                  cards={card}/> 
                  )
              })
            }
            
          </ListContainer>
      </Container>
      </>
    )
}

export default CadastrarAdministrar;