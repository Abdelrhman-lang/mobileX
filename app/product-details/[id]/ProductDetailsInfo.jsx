import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";

export default function ProductDetailsInfo({
  productDetails,
  quantity,
  setQuantity,
  addToCart,
  addToWhislist,
  cart,
  userWhislist,
}) {
  return (
    <div className="px-5 lg:px-0">
      <div>
        {productDetails?.quantity >= 1 ? (
          <span className="block heading capitalize text-sm bg-green-500 w-fit p-0.5 text-white font-semibold">
            in stock
          </span>
        ) : (
          <span className="block heading capitalize text-sm bg-red-500 w-fit p-0.5 text-white font-semibold">
            out of stock
          </span>
        )}
        <h4 className="heading text-primary mt-6 text-3xl font-bold">
          {productDetails?.title}
        </h4>
        <p className="mt-8 heading text-2xl">${productDetails?.price}</p>
        <p className="text my-8 text-accent text-sm">
          {productDetails?.description}
        </p>
        <div>
          <span className="text-accent text-sm block mb-2 ">QTY:</span>
          <div className="flex items-center gap-8 py-5 px-5 border w-fit text-accent">
            <span
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              <Minus className="w-3.5 h-3.5 cursor-pointer" />
            </span>
            <span>{quantity}</span>
            <span onClick={() => setQuantity(quantity + 1)}>
              <Plus className="w-3.5 h-3.5 cursor-pointer" />
            </span>
          </div>
        </div>
        <div className="mt-8 pb-8">
          <Button
            onClick={() => {
              const existingItem = cart?.find(
                (p) => p.productId === productDetails.id
              );
              if (existingItem) {
                Swal.fire({
                  title: "Alert",
                  text: "Product Already in Your Cart",
                  icon: "warning",
                });
              } else {
                if (productDetails?.quantity >= 1) {
                  addToCart(productDetails, quantity);
                } else {
                  Swal.fire({
                    title: "Soooooory.......",
                    text: "Product Out of Stock",
                    icon: "error",
                  });
                }
              }
            }}
            className={
              "w-full rounded-none bg-accent py-7 px-6 mb-3.5 cursor-pointer uppercase"
            }
          >
            Add To Cart
          </Button>
          <Button
            onClick={() => {
              const existingItem = userWhislist?.find(
                (item) => item.productId === productDetails.id
              );
              if (existingItem) {
                Swal.fire({
                  title: "Alert",
                  text: "Product Already in Your Wishlist",
                  icon: "warning",
                });
              } else {
                addToWhislist(productDetails);
              }
            }}
            className={
              "w-full rounded-none bg-[#f2f2f2] py-7 px-6 mb-3.5 cursor-pointer text-primary uppercase hover:text-white"
            }
          >
            Add To Wishlist
          </Button>
        </div>
      </div>
    </div>
  );
}
