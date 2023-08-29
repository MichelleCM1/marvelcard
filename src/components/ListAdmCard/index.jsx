import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const ItemContainer = styled.div`
border-radius: 4px;
background-color: #c1a7eb;
height: 190px;
width: 240px;
color: #000000;
margin-bottom: 10px;
margin-right: 10px;
padding: 10px;
align-items:center;
`;


const Title= styled.div`
font-weight: 700;
margin-bottom: 5px;
color: #04000a;
font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
`;

const Description = styled.div`
height: 20px;
text-align: start;

`




const Image = styled.img`
width: 80%;
height: 80%;
float: right;
margin-bottom: 1px;
margin-right:1px;
vertical-align: middle;
width: auto;
border: 0;

`

const ButtonEdit = styled.span`
  display:flex;
  font-weight: 400;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: #e2700c;
  border-color: #9f5307;
  border-radius: 4px;
 
`;

const ButtonDelete = styled.span`
  display:flex;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: #e41010;
  border-color: #8b0505;
  border-radius: 4px;
 
`;


const ButtonPane = styled.div`
  display: flex;
  text-align: center;
  font-weight: 400;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  border-radius: 4px;

`

export default function ListAdmCard({cards}) {
  return (
    <>
    
      <ItemContainer>
        
        
        <Title>{cards.title}</Title>
        <Image src={cards.image}></Image>
        <Description>{cards.description}</Description>


      </ItemContainer>

      <ButtonPane>
                  <ButtonEdit>
                    <Link to={`/administrar/editar/${cards.id}`}>
                      Editar
                    </Link>
                  </ButtonEdit>
                  <ButtonDelete 
                    // onClick={ () => console.log(`Deleted ${books.id}`)}
                    onClick={ () => onDelete(cards.id)}
                  >
                    Deletar
                  </ButtonDelete>

                </ButtonPane>
      
      
    </>
  )
}