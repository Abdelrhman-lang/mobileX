import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductDetailsInfo({
  productDetails,
  quantity,
  setQuantity,
}) {
  return (
    <div className="px-5 lg:px-0">
      <div className="border-b">
        <span className="block heading capitalize text-sm bg-green-500 w-fit p-0.5 text-white font-semibold">
          in stock
        </span>
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
            className={
              "w-full rounded-none bg-accent py-7 px-6 mb-3.5 cursor-pointer uppercase"
            }
          >
            Add To Cart
          </Button>
          <Button
            className={
              "w-full rounded-none bg-[#f2f2f2] py-7 px-6 mb-3.5 cursor-pointer text-primary uppercase hover:text-white"
            }
          >
            Add To Wishlist
          </Button>
        </div>
      </div>
      <div className="pt-8">
        <p>
          <span className="text-accent uppercase">sku:</span>
          <span className="ms-1">{productDetails?.sku}</span>
        </p>
        <p>
          <span className="text-accent capitalize">brand:</span>
          <span className="ms-1">{productDetails?.brand}</span>
        </p>
        <p>
          <span className="text-accent capitalize">Category:</span>
          <span className="ms-1">{productDetails?.category}</span>
        </p>
        <p>
          <span className="text-accent capitalize">weight:</span>
          <span className="ms-1">{productDetails?.weight} Kg</span>
        </p>
        <p>
          <span className="text-accent capitalize">warranty information:</span>
          <span className="ms-1">{productDetails?.warrantyInformation}</span>
        </p>
        <p>
          <span className="text-accent capitalize">return policy:</span>
          <span className="ms-1">{productDetails?.returnPolicy}</span>
        </p>
      </div>
    </div>
  );
}
