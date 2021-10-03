import { Header } from './Components/Header';
import { ReactComponent as IconPadding } from './assets/icons/iconPadding.svg'
import { Routes } from './Routes'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='body'>
        <Routes />
      </div>
      <div className='iconPadding'>
        <IconPadding />
      </div>
    </div>
  );
}

export default App;
