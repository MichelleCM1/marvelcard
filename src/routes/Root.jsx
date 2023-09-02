import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ListCards from '../pages/ListCards';
import CadastrarAdministrar from'../pages/Administrar'
import Cadastrar from "../pages/Cadastrar"
import Editar from "../pages/Editar"
import NotFound from "../pages/NotFound"

const Root = () => {
    return(
        <Router>
            <Routes>
            <Route path="/" element={<ListCards/>}/> 
                <Route path="/administrar" element={<CadastrarAdministrar/>}/> 
                <Route path="/administrar/cadastrar" element={<Cadastrar/>}/>   
                <Route path="/administrar/editar/:id" element={<Editar/>}/>   
                <Route path="*" element={<NotFound/>}/> 
            </Routes>
        </Router>
    );
}

export default Root;