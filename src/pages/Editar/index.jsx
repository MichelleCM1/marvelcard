import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

const initialValue = {
    title: '',
    image: '',
    description: '',
    url: '',

};
    const Label = styled.label`
        display:flex;
        flex-direction:column;
        margin-top: 15px;
       
      
    `

const Input = styled.input`
       display:flex;
        flex-direction:column;
       /* margin-top: 15px; */
       width: 100%;
       height: 100%;
       font-size: 25px;
       border-radius: 8px;

`
const Form = styled.form`
    display:flex;
    flex-direction:column;
   
`
const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    left: 550px;
    padding: 12px 25px;
    width: 100%;
    height: 100%;
    font-size: 25px;
  
`
const Button = styled.button`
  position: relative;
  margin-bottom: 20px;
  margin-top: 20px;
  color: #ccc;
  align-items: center;
  display: flex;
  cursor: pointer;
  background-color: #a60fe2;
  padding: 12px 25px;
  font-weight: 400;
  border-radius: 8px;
  font-size: 16px;
  left: 5px;
    
`
const StyledH1 = styled.div`
position: relative;
left: 600px;
font-size: 30px;

`

function Editar(){
    const [values, setValues] = useState(initialValue);
    const navigate = useNavigate();
    const {id} =useParams();

    const url = `/cards/${id}`;

    useEffect( () =>{
        if (id){
            api.get(url)
                .then( (response) => {
                    setValues(response.data)
                })
                
        }
    },[])
        

    function onSubmit(ev){
        ev.preventDefault();
        
        api.put(url, values)
        .then(() => {
            navigate('/administrar')
        })
    }
    function onChange(ev){
        const {name, value } = ev.target
        console.log({name,value})
       

        setValues({ ...values, [name]:value})
        
    }
    return(
        <>
      <StyledH1>Editar</StyledH1>
        <Form onSubmit={onSubmit}>
            <Conteiner>
                <Label htmlFor="title">Titulo</Label>
                <Input type="text" id="title" name="title" value={values.title} onChange={onChange} />
                <Label htmlFor="url">Url do Card</Label>
                <Input type="text" id="url" name="url" value={values.url} onChange={onChange}/>
                <Label htmlFor="image">Url/Imagem</Label>
                <Input type="text" id="image" name="image" value={values.image} onChange={onChange} />
                <Button type='submit' onClick={'/'}>Salvar</Button>
            </Conteiner>

        </Form>
        </>
    )
    }

export default Editar;