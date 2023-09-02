import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const ItemContainer = styled.div`
border-radius: 4px;
background-color: #c1a7eb;
height: 300px;
width: 400px;
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
  border-radius: 10px;
  position: relative;
  left: 20px;
  
 
`;

const ButtonDelete = styled.span`
  display:flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 20px;
  padding: 10px 15px;
  color: #fff;
  background-color: #e41010;
  border-radius: 10px;
  position: relative;
  left: 15px;   
  
 
 
`;


const ButtonPane = styled.div`
  display: flex;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  border-radius: 4px;

`

export default function ListAdmCard({cards}) {
  const[loading, setLoading]=useState(true);

  function onDelete(id){setLoading (false); 
  const url = `/cards/${id}  `;
api.delete (url)
.then((response)=> {});}

  return (
    <>
   {!loading
   ?(
    <div>deletando</div>
   )
   : (

  

    
    <ItemContainer>
         
       <Title>{cards.title}</Title>
        <Image src={cards.image}></Image>
        <Description>{cards.description}</Description>
       
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
      
      </ItemContainer>
   )
}

    
    </>
  )
}