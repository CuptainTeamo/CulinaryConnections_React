import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import RecipeInBook from './Pages/RecipeInBook';
import AddRecipe from './Pages/AddRecipe';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<RecipeInBook />} />
      <Route path="/AddRecipe" element={<AddRecipe />} />
    </Routes>
    </div>
    
  );
}

export default App;
