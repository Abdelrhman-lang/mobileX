"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Swal from "sweetalert2";
import { CartContext } from "@/context/CartContext";
export function DialogDemo({
  title,
  image,
  productTitle,
  productPrice,
  productDescription,
  product,
  handelAddToCart,
}) {
  const [quantity, setQuantity] = useState(1);
  const { cart } = useContext(CartContext);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={"cursor-pointer"}>
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] pb-40">
        <DialogHeader>
          <DialogTitle className={"text-center mb-10 heading text-accent"}>
            Product Info
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation]}
              className="swiper"
            >
              <SwiperSlide>
                <img src={image} alt="product-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image} alt="product-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image} alt="product-img" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            {product?.quantity > 1 ? (
              <span className="text-xs bg-[#44bb9e] text-white p-1 capitalize font-medium block mb-5 w-fit">
                in stock
              </span>
            ) : (
              <span className="text-xs bg-[#eb1426] text-white p-1 capitalize font-medium block mb-5 w-fit">
                out of stock
              </span>
            )}
            <h4 className="text-2xl heading mb-2.5">{productTitle}</h4>
            <p className="text my-8 text-accent text-sm">
              {productDescription}
            </p>
            <p className="font-medium text-2xl heading">${productPrice}</p>
            <div className="mt-10">
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
            <div className="mt-6">
              <Button
                onClick={() => {
                  const existingProduct = cart.find(
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
                      handelAddToCart(product, quantity);
                    } else {
                      Swal.fire({
                        title: "Sooooory.....",
                        text: "Product Out of Stock",
                        icon: "error",
                      });
                    }
                  }
                }}
                className={
                  "w-full !py-8 rounded-none bg-muted text-lg cursor-pointer"
                }
              >
                Add To Cart
              </Button>
            </div>
            <div className="mt-7 text-center">
              <Link href={""} className="capitalize underline text-accent">
                view full info
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
