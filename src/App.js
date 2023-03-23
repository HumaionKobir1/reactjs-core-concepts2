import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const porducts =[
  //   {name: 'Laptop', price: 200000},
  //   {name: 'Phone', price: 35000},
  //   {name: 'watch', price: 2500},
  //   {name: 'Tablte', price: 24000}
  // ];

  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>

    {/* <Counter></Counter> */}

      {/* {
        porducts.map(product => <Product name={product.name} price = {product.price}></Product>)
      }
      <Product name = 'Laptop' price = "75000"></Product>
      <Product name = 'mobile' price = "20544"></Product>
      <Product name = 'tap' price = "30000"></Product> */}
    </div>
  );
}



function ExternalUsers(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);

  return(
    <div>
      <h1>External Users</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}



function User (props) {
  return(
    <div style={{border: '2px solid red', margin: '5px', backgroundColor: 'black', color: 'white'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}



function Counter(){
  const [count, setCount] = useState(55);

  // const increasCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  // shortcut way
  const increasCount = () => setCount(count + 1);
  const dicreasCount = () => setCount(count - 1);

  return(
    <div className=''>
      <h1>Count: {count}</h1>
      <button onClick={increasCount}>Increase</button>
      <button onClick={dicreasCount}>Dicrease</button>
    </div>
  )
}


// function Product(props){
//   return(
//     <div className='product'>
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }

export default App;
