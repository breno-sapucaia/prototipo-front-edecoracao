import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Index from '../components/template/Index/Index'
import ProductRegister from '../components/register/Product/ProductRegister';
export default props => 
    <Switch>
        {props.allItems.map(item => 
            <Route 
            key={item.id} 
            exact={true} 
            path={item.path} 
            component={item.component} />
        )}

        <Route to='/cadastros/produtos/novo' exact={true} component={ProductRegister} />
        <Route to="/" component={Index} />
        {/* <Redirect from='*' to="/" /> */}
    </Switch>
