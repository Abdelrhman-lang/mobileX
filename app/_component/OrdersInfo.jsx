import { ArrowBigRight } from "lucide-react";
import Spinner from "./Spinner";

export default function OrdersInfo({
  orders,
  setViewOrderDetails,
  setselectedOrderId,
  loading,
}) {
  return (
    <main>
      <h4 className="heading font-medium text-4xl mb-3 capitalize">
        {" "}
        my orders
      </h4>
      <div className="heading text-lg font-bold   mt-10 text-accent text-center hidden md:grid md:grid-cols-4 md:gap-10">
        <p>order id</p>
        <p>status</p>
        <p>created at</p>
        <p>view</p>
      </div>
      {loading ? (
        <div className="flex items-center justify-center mt-10">
          <Spinner />
        </div>
      ) : (
        <ul className="mt-5">
          {orders.map((order) => {
            return (
              <li
                key={order.id}
                className="bg-white shadow-md mb-5 rounded-lg p-4 flex flex-col gap-3 text-sm md:grid md:grid-cols-4 md:gap-10 md:text-center"
              >
                <div className="flex justify-between md:block">
                  <span className="font-semibold md:hidden">Order ID:</span>
                  <p>{order.id}</p>
                </div>
                <div className="flex justify-between md:block">
                  <span className="font-semibold md:hidden">Status:</span>
                  <p>{order.status}</p>
                </div>
                <div className="flex justify-between md:block">
                  <span className="font-semibold md:hidden">Created At:</span>
                  <p>{order.createdAt.slice(0, 10)}</p>
                </div>
                <div className="flex justify-between md:justify-center">
                  <span className="font-semibold md:hidden">View:</span>
                  <button
                    className="flex items-center justify-center text-primary cursor-pointer"
                    onClick={() => {
                      setViewOrderDetails(true);
                      setselectedOrderId(order.id);
                    }}
                  >
                    <ArrowBigRight />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
