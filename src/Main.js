import React from 'react'

const Main = ({funcion}) => {
    return(
        <main>
             <h2>Home</h2>
             <button onClick={() => {console.log('clicaste wey')}}>click</button>
             <button onClick={funcion}>click dos la venganza</button>
        </main>
    )
}

export default Main