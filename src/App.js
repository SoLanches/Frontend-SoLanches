import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './Components/Header';
import { CategoryCard } from './Components/CategoryCard';
import  icon from './assets/images/lunch.svg' ;
import usePagesContext from './contexts/pages.context';
import './styles/App.css';

function App() {
  const { pages } = usePagesContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <CategoryCard title="Todas" imageUrl={icon} />
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
