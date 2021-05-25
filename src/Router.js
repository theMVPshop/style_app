/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/
import Main from './Main';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ColorChooser from './ColorChooser';
// Write component imports here //



// Start Router function here //
function Router (){
    return (
        <BrowserRouter>
                            <Switch>
                <Route exact path="/" component = {Main} />
                <Route exact path="/hsl" component = {ColorChooser} />   
        </Switch>
        </BrowserRouter>

      
    )
}

export default Router;