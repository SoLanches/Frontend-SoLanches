
import './styles/App.css';
import { CategoryCard }from './Components/CategoryCard'
import lunch from './Assets/lunch.svg'

function App() {
  return (
    <div className="App">
      <CategoryCard
    title="Todas" imageUrl={lunch}/>
    </div>

  );
}

export default App;
