import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Button } from './Components/Button';

import { Header } from './Components/Header';
import usePagesContext from './contexts/pages.context';
import './styles/App.css';
import icon from "./assets/icons/bell.svg"

function App() {
  const { pages } = usePagesContext()

  return (
    <div className="App">
      <BrowserRouter>
      <Button title="Criar" icon={icon} />
        <div className='body'>
          <Switch>
            {pages.map((page, index) => <Route key={index} path={page.path} component={page.component} />)}
            <Route path='*'><Redirect to='/inicio' /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
