import React from 'react';
import styled from 'styled-components';


const ItemContainer = styled.div`
border-radius: 4px;
background-color: #c1a7eb;
height: 190px;
width: 240px;
color: #000000;
margin-bottom: 10px;
margin-right: 10px;
padding: 10px;
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


const ItemLink = styled.a`
text-decoration: none;
`;

const Image = styled.img`
width: 80%;
height: 80%;
float: right;
margin-bottom: 1px;
margin-right:1px;
vertical-align: middle;
width: auto;
border: 0;
vertical-align: middle;

`


export default function ListAdmCard({cards}) {
  return (
    <>
    <ItemLink href= {cards.url} target ="_blank">
      <ItemContainer>
        
        <Title>{cards.title}</Title>
        <Image src={cards.image}></Image>
        <Description>{cards.description}</Description>
        


      </ItemContainer>
      </ItemLink>
    </>
  )
}