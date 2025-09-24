"use client";
import { useUser } from "@clerk/nextjs";
import BreadCramp from "../_component/BreadCramp";
import { useContext, useEffect, useState } from "react";
import AccountInfo from "../_component/AccountInfo";
import OrdersInfo from "../_component/OrdersInfo";
import { OrderContext } from "@/context/OrderContext";
import OrderDetails from "../_component/OrderDetails";

export default function UsreAccountPage() {
  const { user } = useUser();
  const [activeList, setIsActiveList] = useState("orders");
  const { orders, fetchUserOrders, loading } = useContext(OrderContext);
  const [viewOrderDetails, setViewOrdersDetails] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  useEffect(() => {
    fetchUserOrders(user?.id);
  }, [user]);
  const list = [
    { id: 1, title: "Account information", category: "info" },
    { id: 2, title: "Adresses", category: "addresse" },
    { id: 3, title: "Orders", category: "orders" },
    { id: 4, title: "Whislist", category: "wish" },
    { id: 5, title: "LogOut" },
  ];
  return (
    <section>
      <BreadCramp />

      <div className="custom-container">
        <div className="mt-16 mb-5 text-center">
          <h1 className="heading text-primary text-4xl md:text-5xl font-bold px-5 lg:px-0">
            welcome, {user?.fullName}
          </h1>
          <p className="mt-4 max-w-[500px] mx-auto capitalize text text-sm px-5 md:px-0">
            From your "My Account" page you have the ability to view your recent
            account activity and update your account information. Just select a
            link below.
          </p>
        </div>
        <div className="mt-20 flex flex-col md:flex-row gap-5 px-5 lg:px-0">
          <div className="lg:w-1/4">
            <ul className="border text-lg">
              {list.map((item) => {
                return (
                  <li
                    onClick={() => setIsActiveList(item.category)}
                    className={`ps-8 py-4 pe-4 border-b last:border-b-0 font-medium cursor-pointer ${
                      item.category === activeList
                        ? "bg-[#F2F3F5] text-primary"
                        : "bg-transparent text-accent"
                    }`}
                    key={item.id}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-1 pt-2.5 lg:pe-14 lg:ps-24">
            {activeList === "info" ? (
              <AccountInfo
                username={user?.fullName}
                email={user?.primaryEmailAddress?.emailAddress}
                orders={orders.length}
              />
            ) : activeList === "orders" ? (
              viewOrderDetails === true ? (
                <OrderDetails
                  setViewOrderDetails={setViewOrdersDetails}
                  orderId={selectedOrderId}
                />
              ) : (
                <OrdersInfo
                  orders={orders}
                  setViewOrderDetails={setViewOrdersDetails}
                  setselectedOrderId={setSelectedOrderId}
                  loading={loading}
                />
              )
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
