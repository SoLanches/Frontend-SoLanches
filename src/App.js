import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './Components/Header';
import usePagesContext from './contexts/pages.context';
import './styles/App.css';
import 'antd/lib/notification/style/index.css';

import { ReactComponent as IconPadding } from './assets/icons/iconPadding.svg'

function App() {
  const { pages } = usePagesContext();

  return (
    <div className='App'>
      <Header />
      <div className='body'>
        <Switch>
          {pages.map((page, index) => (
            <Route key={index} path={page.path} component={page.component} />
          ))}
          <Route path='*'>
            <Redirect to='/inicio' />
          </Route>
        </Switch>
      </div>
      <div className='iconPadding'>
        <IconPadding />
      </div>
    </div>
  );
}

export default App;
