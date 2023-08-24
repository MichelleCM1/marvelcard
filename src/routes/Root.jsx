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

const Root = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <ListCards />} />
                <Route path="/administrar" element={ <Administrar />} />
                <Route path="/cadastrar" element={ <Cadastrar />} />
                <Route path="*" element={ <NotFound />} />
            </Routes>
        </Router>
    );
}

export default Root;