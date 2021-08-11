import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CommerceCategoryCard } from './Components/CommerceCategoryCard';

import { Header } from './Components/Header';
import usePagesContext from './contexts/pages.context';

import './styles/App.css';

function App() {
  const { pages } = usePagesContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <CommerceCategoryCard/>
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
