import Cart from "@/components/cart";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import { StripeContext } from "@/stripecontext/context";
import { useContext } from "react";

export default function Home() {
  const { open } = useContext(StripeContext);
  return (
    <>
      <Navbar />
      {open && <Cart />}
      <div className=" w-screen h-screen flex justify-center items-center text-4xl font-bold flex-col ">
        <Products />
      </div>
    </>
  );
}
