import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import ListCards from '../pages/ListCards';
import Cadastrar from '../pages/Cadastrar';
import NotFound from '../pages/NotFound';
import Administrar from '../pages/Administrar';
import Editar from '../pages/Editar';

const Root = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <ListCards />} />
                <Route path="/administrar" element={ <Administrar />} />
                <Route path="/cadastrar" element={ <Cadastrar />} />
                <Route path="/administrar/editar" element={ <Editar/>} />
                <Route path="/editar" element= { <Editar/>} />
                <Route path="*" element={ <NotFound />} />
            </Routes>
        </Router>
    );
}

export default Root;