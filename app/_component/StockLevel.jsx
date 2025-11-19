import Spinner from "./Spinner";

export default function StockLevel({ recentProducts, loading }) {
  return (
    <div className="bg-white shadow-xl rounded-lg border-gray-300 p-6">
      <h2 className="text-primary text-2xl py-3 mb-4">Recent Added Products</h2>
      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : recentProducts.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-300 text-2xl">
          <h3>No Products Found</h3>
        </div>
      ) : (
        <div className="flex flex-col gap-5 ">
          {recentProducts?.map((product) => {
            const stockLevel =
              product.quantity === 0
                ? 0
                : product.quantity <= product.lowStock
                  ? 1
                  : 2;

            const bgColors = ["bg-red-600", "bg-yellow-600", "bg-green-600"];
            const textColors = [
              "text-red-600",
              "text-yellow-600",
              "text-green-600",
            ];
            return (
              <div
                className="flex justify-between items-center border-b border-gray-300 pb-3"
                key={product.id}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${bgColors[stockLevel]}`}
                  />
                  <p>{product.title}</p>
                </div>
                <p className={`${textColors[stockLevel]}`}>
                  {product.quantity} in stock
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
