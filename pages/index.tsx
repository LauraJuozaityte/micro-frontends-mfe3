import ProductList from '../components/ProductList';
import Link from 'next/link';

const ProductListPage = () => {
  return (
    <div>
      <h1>Shop - Index / Product List Page (3002)</h1>
      <ProductList />

      <Link href="http://localhost:3000">
        <button style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
          Back to Home Page
        </button>
      </Link>
    </div>
  );
};

export default ProductListPage;