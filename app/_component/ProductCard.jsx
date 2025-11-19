"use client";
import { Heart } from "lucide-react";
import { DialogDemo } from "./DialogDemo";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import { WhislistContext } from "@/context/WhislistContext";
import Link from "next/link";
export default function ProductCard({ product }) {
  const { cart, addToCart } = useContext(CartContext);
  const { addToWhislist, userWhislist } = useContext(WhislistContext);
  return (
    <div className="relative">
      <div className="p-5 relative">
        <Link href={`/product-details/${product.id}`}>
          <img src={product.image} alt="product-img" />
        </Link>
        <button
          onClick={() => {
            const existingItem = userWhislist?.find(
              (item) => Number(item.externalId) === product.id
            );
            if (existingItem) {
              Swal.fire({
                title: "Alert",
                text: "Product Already in Your Wishlist",
                icon: "warning",
              });
            } else {
              addToWhislist(product);
            }
          }}
          className="absolute top-3.5 right-3.5 lg:top-0 lg:right-0 cursor-pointer text-accent group"
        >
          <Heart />
          <span className="text-[10px] absolute top-0 -left-20 bg-white shadow-md p-1 capitalize opacity-0 group-hover:opacity-100 transition-all duration-300">
            add to wishlist
          </span>
        </button>
      </div>
      <div className="text-center">
        <p className="text-md text-primary">{product.title.slice(0, 28)}</p>
        <p className="font-medium mt-2">${product.price}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-5">
        <div className="hidden lg:flex">
          <DialogDemo
            title={"Quick view"}
            image={product.image}
            productTitle={product.title}
            productPrice={product.price}
            productDescription={product.description}
            product={product}
            handelAddToCart={addToCart}
          />
        </div>

        <Button
          className={"cursor-pointer"}
          onClick={() => {
            const existingProduct = cart?.find(
              (item) => item.productId === product.id
            );
            if (existingProduct) {
              Swal.fire({
                title: "Alert",
                text: "Product Already in Your Cart",
                icon: "warning",
              });
            } else {
              if (product?.quantity > 1) {
                addToCart(product);
              } else {
                Swal.fire({
                  title: "sooory....",
                  text: "Product Out of Stock",
                  icon: "error",
                });
              }
            }
          }}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
