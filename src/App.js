import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './Components/Header';
import usePagesContext from './contexts/pages.context';
import { RegisterSchedule } from './pages/RegisterSchedule';
// import {Register} from './pages/Register';

import './styles/App.css';
import { EditModal } from './Components/EditModal'

function App() {
    const { pages } = usePagesContext()

    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className='body'>
            <Switch>
              {pages.map((page, index) => <Route key={index} path={page.path} component={page.component} />)}
              <Route path='*'>
                <Redirect to='/inicio' />
              </Route>
            </Switch>
            {/* <Register /> */}
            <RegisterSchedule />
            {/* <EditModal/> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }

export default App;
