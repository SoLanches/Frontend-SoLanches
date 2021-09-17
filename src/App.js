import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Header } from './Components/Header';
import usePagesContext from './contexts/pages.context';
import './styles/App.css';
import 'antd/lib/notification/style/index.css'

function App() {
  const { pages } = usePagesContext()

  const [commerce, setCommerce] = useState({
    "name": "",
    "phone": "",
    "cnpj": "",
    "social_medias": {
      "email": "",
      "instagram": "", 
      "facebook": "", 
    },
    "address": {
      "city": "", 
      "district": "", 
      "street": "", 
      "number": "", 
    },
    "password": "",
    "schedule": {},
    "profileImage": "",
    "category": {}
  });

  useEffect(() => {
    console.log(commerce)
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="body">
          <Switch>
            {pages.map((page, index) => (
              <Route key={index} path={page.path} component={page.component}/>
            ))}
            <Route path='*'><Redirect to='/inicio' /></Route>
          </Switch>
          {/* <RegisterData.Provider value={{commerce, setCommerce}}>
            <Register />
            <RegisterSchedule />
            <PhotoRegister />
          </RegisterData.Provider> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
