import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './Components/Header';
import usePagesContext from './contexts/pages.context';
import './styles/App.css';
import 'antd/lib/notification/style/index.css'
import EditPage from './pages/EditMenu/EditPage';
import { EditMenu } from './pages/EditMenu';

function App() {
  const { pages } = usePagesContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='body'>
          <Switch>
            {pages.map((page, index) => (
              <Route key={index} path={page.path} component={page.component}/>
            ))}
            <Route path='*'><Redirect to='/inicio' /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;