export default function ProductDetailsImg({ product }) {
  return (
    <div>
      <img src={product?.image} alt="product-img" />
    </div>
  );
}
