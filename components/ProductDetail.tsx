import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 100, description: 'Description 1 Description Description Description Description Description Description Description Description Description Description Description Description DescriptionDescription Description Description Description Description Description' },
  { id: 2, name: 'Product 2', price: 200, description: 'Description 2 Description Description Description Description Description Description Description Description Description Description Description Description DescriptionDescription Description Description Description Description Description' },
  { id: 3, name: 'Product 3', price: 50, description: 'Description 3 Description Description Description Description Description Description Description Description Description Description Description Description DescriptionDescription Description Description Description Description Description' },
  { id: 4, name: 'Product 4', price: 400, description: 'Description 4 Description Description Description Description Description Description Description Description Description Description Description Description DescriptionDescription Description Description Description Description Description' },
];

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <div>Product not found</div>;

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price} EUR</p>

      <Link href="/">
        <button style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
          Back to Product List
        </button>
      </Link>
    </div>
  );
};

export default ProductDetail;