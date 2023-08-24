import React from 'react';

import  styles from './style.modules.css';


function NotFound(){
    return(
        <>
           <div className={styles.errorContainer}>
            <h1>Oops! Página não encontrada</h1>
            <p>A página que você está procurando não existe</p>
            <a href="/"> Voltar para página principal</a>
           </div>
        </>
    )
}

export default NotFound;