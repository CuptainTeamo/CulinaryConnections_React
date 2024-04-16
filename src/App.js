import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import RecipeInBook from './Pages/RecipeInBook';
import AddRecipe from './Pages/AddRecipe';
import RecipeDetailPage from './Pages/RecipeDetailPage';
import SearchRecipe  from './Pages/SearchByIngredient';
import { Route, Routes } from "react-router-dom";
import SignupPage from './Pages/SignupPage';
import CreateCookbookPage from './Pages/CreateCookbookPage';
import CookbookProfile from './Components/CookbookProfile/CookbookProfile';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/Signup' element={<SignupPage />}/>
      <Route path='/Login' element={<LoginPage />}/>
      <Route path='/CreateCookbook' element={<CreateCookbookPage />}/>
      <Route path="/Book" element={<RecipeInBook />} />
      <Route path="/AddRecipe" element={<AddRecipe />} />
      <Route path="/RecipeDetail" element={<RecipeDetailPage />} />
      <Route path="/Searching" element={<SearchRecipe/>}/>
      <Route path="/CookbookProfile" element={<CookbookProfile />} />

      <Route path="/RecipeDetail/:id" element={<RecipeDetailPage />} />
    </Routes>
    </div>
  );
}

export default App;
