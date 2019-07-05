import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Index from '../components/template/Index/Index'
export default props => 
    <Switch>
        { props.items.dashboard.map(item => 
            <Route 
                key={item.id} 
                exact={item.path === '/' ? true:false} 
                path={item.path} 
                component={item.component} />
            )}
        {props.items.register.map(item => 
            <Route 
                key={item.id} 
                exact={item.path === '/' ? true:false} 
                path={item.path} 
                component={item.component} />
            )}
        {props.items.salles.map(item => 
            <Route 
                key={item.id} 
                exact={item.path === '/' ? true:false} 
                path={item.path} 
                component={item.component} />
            )}
        
        <Route to="/" component={Index} />
        <Redirect from='*' to="/" />
    </Switch>