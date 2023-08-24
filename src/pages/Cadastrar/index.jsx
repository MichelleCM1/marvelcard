import React, {useState} from 'react';
import api from '../../services/api';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

const initialValue = {
    title: '',
    image: '',
    description: '',
    url: '',

};

function Cadastrar(){
    const [values, setValues] = useState(initialValue);
    const navigate = useNavigate();

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
        <h1>Cadastrar</h1>
        <form onSubmit={onSubmit}>
            <div className={styles.cardsFormGroup}>
                <label htmlFor="title">Titulo</label>
                <input type="text" id="title" name="title"  onChange={onChange}/>
            </div>
            <div className={styles.cardsFormGroup}>
                <label htmlFor="image">Url/Image</label>
                <input type="text" id="image" name="image"  onChange={onChange}/>
            </div>
            <div className={styles.cardsFormGroup}>
                <label htmlFor="description">Descrição</label>
                <input type="text" id="description" name="description"  onChange={onChange}/>
                
            </div>
            <div className={styles.cardsFormGroup}>
                <label htmlFor="url">Url do Card</label>
                <input type="text" id="url" name="url"  onChange={onChange}/>
            </div>

            <button type="submit">Salvar</button>

        </form>
        </>
    )
}

export default Cadastrar;