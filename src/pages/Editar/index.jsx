import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import styles from './styles.module.css';

const initialValue = {
    title: '',
    image: '',
    description: '',
    url: '',

};

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
        


    
    function onChange(ev){
        const {name, value } = ev.target
       

        setValues({ ...values, [name]:value})
        
    }
    return(
        <>
        <h1>Editar</h1>
        <form>
            <div className={styles.cardsFormGroup}>
                <label htmlFor="title">Titulo</label>
                <input type="text" id="title" name="title" value={values.title} onChange={onChange}/>
            </div>
            <div className={styles.cardsFormGroup}>
                <label htmlFor="image">Url/Image</label>
                <input type="text" id="image" name="image" value={values.image} onChange={onChange}/>
            </div>
            <div className={styles.cardsFormGroup}>
                <label htmlFor="description">Descrição</label>
                <input type="text" id="description" name="description" value={values.description}  onChange={onChange}/>
                
            </div>
            <div className={styles.cardsFormGroup}>
                <label htmlFor="url">Url do Card</label>
                <input type="text" id="url" name="url" value={values.url} onChange={onChange}/>
            </div>

            <button type="submit">Salvar</button>

        </form>
        </>
    )
    }

export default Editar;