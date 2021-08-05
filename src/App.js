import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Button } from './Components/Button';
import usePagesContext from './contexts/pages.context';

import './styles/App.css';

function App() {
  const { pages } = usePagesContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Button title="Cadastre-se"/>
        <div className='body'>
          <Switch>
            {pages.map((page, index) => <Route key={index} path={page.path} component={page.component} />)}
            <Route path='*'><Redirect to='/' /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
