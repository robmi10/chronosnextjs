import Cart from "@/components/cart";
import Faq from "@/components/faq";
import About from "@/components/home";
import Infos from "@/components/infos";
import Products from "@/components/products";
import { StripeContext } from "@/stripecontext/context";
import { useContext, useEffect } from "react";

export default function Home() {
  const { open, cartstatus, totalquantity, prices } = useContext(StripeContext);

  useEffect(() => {}, [cartstatus, totalquantity]);

  return (
    <>
      {open && <Cart />}
      <About />
      <div id="infonow">
        <Infos />
      </div>
      <Products />
      <Faq />
    </>
  );
}
