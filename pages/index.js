import Cart from "@/components/cart";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import About from "@/components/home";
import Infos from "@/components/infos";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import { StripeContext } from "@/stripecontext/context";
import { useContext, useEffect } from "react";

export default function Home() {
  const { open, cart, cartstatus, totalquantity, prices } =
    useContext(StripeContext);

  useEffect(() => {}, [cartstatus, totalquantity]);

  return (
    <>
      {open && <Cart />}
      <About />
      <Infos />
      <Products />
      <Faq />
    </>
  );
}
