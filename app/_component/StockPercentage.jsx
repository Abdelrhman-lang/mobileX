import Spinner from "./Spinner";

export default function StockPercentage({
  hightStockProductsPercentage,
  totalHighStockProducts,
  lowStockProductsPercentage,
  totalLowStockProducts,
  outOfStockProductsPercentage,
  totalOutOfStockProducts,
  loading,
}) {
  return (
    <div className="bg-white shadow-xl rounded-lg border-gray-300 p-6">
      <h3 className="text-primary text-2xl py-3 mb-6">Stock Percentage</h3>
      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center mb-5">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
              <div
                className="absolute inset-0 rounded-full border-8"
                style={{
                  borderColor:
                    hightStockProductsPercentage >= 60
                      ? "#22c55e"
                      : hightStockProductsPercentage >= 20
                        ? "#eab308"
                        : "#ef4444",
                  clipPath:
                    "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p
                    className="text-2xl"
                    style={{
                      color:
                        hightStockProductsPercentage >= 60
                          ? "#22c55e"
                          : hightStockProductsPercentage >= 20
                            ? "#eab308"
                            : "#ef4444",
                    }}
                  >
                    {hightStockProductsPercentage}%
                  </p>
                  <p>in Stock</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <p className="w-3 h-3 rounded-full bg-green-500"></p>
              <p>
                {hightStockProductsPercentage}% in Stock (
                {totalHighStockProducts} Product)
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="w-3 h-3 rounded-full bg-yellow-500"></p>
              <p>
                {lowStockProductsPercentage}% in Stock ({totalLowStockProducts}{" "}
                Products)
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="w-3 h-3 rounded-full bg-red-500"></p>
              <p>
                {outOfStockProductsPercentage}% in Stock (
                {totalOutOfStockProducts} Products)
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
