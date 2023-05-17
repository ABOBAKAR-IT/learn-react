import React from 'react';
import SalesBill from './SalesBill';

const App = () => {
  const billData = {
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '123-456-7890',
    products: [
      { name: 'Product 1', price: 10 },
      { name: 'Product 2', price: 20 },
      { name: 'Product 3', price: 30 }
    ],
    total: 60
  };

  return (
    <div>
      <SalesBill billData={billData} />
    </div>
  );
}

export default App;
