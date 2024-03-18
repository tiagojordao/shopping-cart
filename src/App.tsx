import { useState } from 'react';

import Navbar from './lib/nav/Navbar';
import ShoppingCart from './lib/shoppingCart/ShoppingCart';

export default function App() {

  const [itemAmount, setItemAmount] = useState<number>(0);

  return (
    <>
      <Navbar
        itemAmount = {itemAmount}
      />
      <ShoppingCart 
        setItemAmount = {setItemAmount}
      />
    </>
  )
}
