import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/FoodItem';
import ErrorMessage from './components/ErrorMessage';

function App() {
  let foodItems = ['dal', 'paneer', 'rice', 'chapati', 'coldrink'];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodItems items = {foodItems}></FoodItems> 
    </>
  );
}

export default App
