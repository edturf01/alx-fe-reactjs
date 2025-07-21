import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="App">
      <h1>Recipes</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default App;
