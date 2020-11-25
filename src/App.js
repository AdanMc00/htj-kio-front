import React from 'react'
import Landing from './views/Landing'
import Ideas from './views/Ideas'
import Pdf from './views/Pdf'
import { ContextProvider } from './Context'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div style={{ background: 'linear-gradient(-15deg, #c65a5d 30%, #445edf 90%)' }} className="App">
          <Switch>
            <React.Fragment>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/ideas" component={Ideas}/>
              <Route exact path="/pdf" component={Pdf}/>
            </React.Fragment>
          </Switch>
        </div>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App



