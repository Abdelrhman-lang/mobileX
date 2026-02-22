import {
  Container,
  DollarSign,
  Minus,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import Spinner from "./Spinner";
export default function GeneralInfo({
  totalLowStockProducts,
  totalHighStockProducts,
  totalOutOfStock,
  totalPrice,
  totalProducts,
  loading,
}) {
  return (
    <div className="bg-white shadow-xl rounded-lg border-gray-300 p-6 ">
      <h1 className="text-primary text-2xl p-3 mb-4">General Info</h1>
      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-primary text-3xl font-bold">{totalProducts}</h2>
            <span>Total Products</span>
            <Container className="text-green-500" />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-2 border-t border-b lg:border-r lg:border-l lg:border-t-0 lg:border-b-0 p-5">
            <h2 className="text-primary text-3xl font-bold">
              ${totalPrice.toFixed(0)}
            </h2>
            <span>Total Value</span>
            <DollarSign className="text-primary" />
          </div>
          <div className="flex  flex-col items-center justify-center gap-2">
            <h2 className="text-primary text-3xl font-bold">
              {totalLowStockProducts}
            </h2>
            <span>Low Stock</span>
            <TrendingDown className="text-yellow-500" />
          </div>
          <div className="flex  flex-col items-center justify-center gap-2 border-l">
            <h2 className="text-primary text-3xl font-bold">
              {totalHighStockProducts}
            </h2>
            <span>High Stock</span>
            <TrendingUp className="text-green-500" />
          </div>
          <div className="flex  flex-col items-center justify-center gap-2 border-l">
            <h2 className="text-primary text-3xl font-bold">
              {totalOutOfStock}
            </h2>
            <span>Out of Stock</span>
            <Minus className="text-red-500" />
          </div>
        </div>
      )}
    </div>
  );
}
