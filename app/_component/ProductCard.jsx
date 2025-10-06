"use client";
import { Heart } from "lucide-react";
import { DialogDemo } from "./DialogDemo";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
export default function ProductCard({ product }) {
  const { cart, addToCart } = useContext(CartContext);
  //   try {
  //     const res = await axios.post("/api/post-cart", {
  //       userId: user?.id,
  //       externalId: product.id,
  //       name: product.title,
  //       price: product.price,
  //       image: product.images[0],
  //       quantity: quantity || 1,
  //     });
  //     fetchUserCart(user?.id);
  //   } catch (err) {
  //     console.log("Error adding to cart", err);
  //   }
  // };
  return (
    <div className="relative">
      <div className="p-5 relative">
        <img src={product.images[0]} alt="product-img" />
        <div className="absolute top-3.5 right-3.5 lg:top-0 lg:right-0 cursor-pointer text-accent group">
          <Heart />
          <span className="text-[10px] absolute top-0 -left-20 bg-white shadow-md p-1 capitalize opacity-0 group-hover:opacity-100 transition-all duration-300">
            add to wishlist
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-md text-primary">{product.title.slice(0, 28)}</p>
        <p className="font-medium mt-2">${product.price}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-5">
        <DialogDemo
          title={"Quick view"}
          image={product.images[0]}
          image2={product.images[1] || product.images[0]}
          image3={product.images[2] || product.images[0]}
          productTitle={product.title}
          productPrice={product.price}
          product={product}
          handelAddToCart={addToCart}
        />
        <Button
          className={"cursor-pointer"}
          onClick={() => {
            const existingProduct = cart?.find(
              (item) => item.externalId === product.id.toString()
            );
            if (existingProduct) {
              Swal.fire({
                title: "Alert",
                text: "Product Already in Your Cart",
                icon: "warning",
              });
            } else {
              addToCart(product);
            }
          }}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
