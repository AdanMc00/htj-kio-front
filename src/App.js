import React from 'react'
import Landing from './views/Landing'
import Ideas from './views/Ideas'
import { ContextProvider } from './Context'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App () {

  return (
    <ContextProvider>
      <BrowserRouter>
        <div style={{ backgroundColor: ' #f1f1f1 ' }} className="App">
          <Switch>
            <React.Fragment>
              <Route path="/" component={Landing} exact/>
              <Route path="/ideas" component={Ideas}/>

            </React.Fragment>
          </Switch>
        </div>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App



