export default function ProductDetailsImg({ product }) {
  return (
    <div>
      <img src={product?.images[0]} alt="product-img" />
    </div>
  );
}
