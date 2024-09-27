import React from 'react';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 50 },
  { id: 4, name: 'Product 4', price: 400 },
];

const ProductList = () => (
  <div>
    <h1>Shop - Products List Component (3002)</h1>
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>
            {product.name} - ${product.price}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;