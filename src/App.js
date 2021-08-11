import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './Components/Header';
import usePagesContext from './contexts/pages.context';
import './styles/App.css';






import {CommerceInfo } from './Components/CommerceInfo'


function App() {
  const { pages } = usePagesContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='body'>
          <Switch>
            {pages.map((page, index) => <Route key={index} path={page.path} component={page.component} />)}
            <Route path='*'><Redirect to='/inicio' /></Route>
          </Switch>
        </div>
      </BrowserRouter>

      <CommerceInfo/>
    </div>
  );
}

export default App;
