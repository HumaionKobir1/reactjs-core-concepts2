import logo from './logo.svg';
import './App.css';

function App() {
  const porducts =[
    {name: 'Laptop', price: 200000},
    {name: 'Phone', price: 35000},
    {name: 'watch', price: 2500},
    {name: 'Tablte', price: 24000}
  ]

  return (
    <div className="App">
      {
        porducts.map(product => <Product name={product.name} price = {product.price}></Product>)
      }

      {/* <Product name = 'Laptop' price = "75000"></Product>
      <Product name = 'mobile' price = "20544"></Product>
      <Product name = 'tap' price = "30000"></Product> */}
    </div>
  );
}

function Product(props){
  return(
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
