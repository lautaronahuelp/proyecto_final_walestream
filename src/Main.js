import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { Switch , Route } from 'react-router-dom'


const Main = () => {
    return(
        <main className="container">
            <Switch>
            <Route exact path='/'>
                <ItemListContainer />
            </Route>
            <Route exact path='/category/:id'>
                <ItemListContainer />
            </Route>
            <Route exact path='/items/:id'>
                <ItemDetailContainer />
            </Route>
            <Route exact path='/cart'>
                <Cart />
            </Route>
            </Switch>
        </main>
    )
}

export default Main