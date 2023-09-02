import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';  



const initialValue = {
    title: '',
    image: '',
    description: '',
    url: '',

};

const Input = styled.input`
    padding: 5px;
    margin-bottom: 5px;


`


const Conteiner = styled.div`
    max-width: 400px;
    /* margin:0 auto; */
    /* padding: 10px;  */
    border-radius: 5px;
     left: 600px; 
     position: relative; 
    display: flex;
    flex-direction: column;
    
`
const Button = styled.button`
    position: relative; 
    left: 5px; 
    padding: 10px;
    flex-direction: column;
    margin-top: 20px;

`
const Label = styled.label`
    display: flex;
    flex-direction:column;
    margin-top: 20px;
    padding: 5px;
    left: 500px;
`
const StyledH1 = styled.h1`
   position: relative; 
    left: 30px;
    color:#9e14aa ;
    
`

function Cadastrar(){
    const [values, setValues] = useState(initialValue);
    const navigate = useNavigate()
    useEffect(() =>{},[]);

    function onSubmit(ev){
        ev.preventDefault();

        const url ='/cards';
        api.post(url, values)
          .then(() => {navigate('/');})


    };
   function onChange(ev){
    const {name, value} = ev.target
    console.log({name, value});

    setValues({...values, [name]: value})

   }
    return(
        <>
        
        <Conteiner>  
        <StyledH1>Cadastrar</StyledH1>
        <form onSubmit={onSubmit}>
                <Label htmlFor="title">Titulo</Label>
                <Input type="text" id="title" name="title" onChange={onChange} />
                <Label htmlFor="url">Url do Card</Label>
                <Input type="text" id="url" name="url" onChange={onChange}/>
                <Label htmlFor="image">Url/Imagem</Label>
                <Input type="text" id="image" name="image" onChange={onChange} />
                <Label htmlFor="descripition" name="description">Description</Label>
                <Input type= "text" id="descripition" name="description" onChange={onChange}/>
                
        </form>
            <Button type='submit' onClick={'/'}>Salvar</Button>
            </Conteiner>
            
        </>
    )
}

export default Cadastrar;