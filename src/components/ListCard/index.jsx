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
font-family: "fantasy";
`;

const Description = styled.div`
margin-bottom: 2px;
font-family: "fantasy" ;
text-align: center;

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

const myAtropos= styled.div`
  width: 320px;
  height: 160px;

`



export default function ListCard(card) {
  return (
    <>
    <ItemLink href= {card.url} target ="_blank">
      <ItemContainer>
        
        <Title>{card.title}</Title>
        <Image src={card.image}></Image>
        <Description>{card.description}</Description>
        


      </ItemContainer>
      </ItemLink>
    </>
  )
}