import Product from "./Product";

function Products({ products }) {
  return (
    <div className="products padding">
      {products.map((product) => {
        return <Product {...product} key={`product__${product.id}`} />;
      })}
    </div>
  );
}

export default Products;
