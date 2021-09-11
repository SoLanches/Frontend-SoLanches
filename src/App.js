import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './Components/Header';
import { LoginCard } from './Components/LoginCard';
import usePagesContext from './contexts/pages.context';
import './styles/App.css';

function App() {
  const { pages } = usePagesContext()

  return (
    <div className="App">
      <BrowserRouter>
      <LoginCard/>
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
