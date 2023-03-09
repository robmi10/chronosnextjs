import Cart from "@/components/cart";
import Faq from "@/components/faq";
import About from "@/components/home";
import Infos from "@/components/infos";
import Menu from "@/components/menu";
import Products from "@/components/products";
import { StripeContext } from "@/stripecontext/context";
import { useContext, useEffect } from "react";

export default function Home() {
  const { open, menu, cartstatus, totalquantity, prices } =
    useContext(StripeContext);

  useEffect(() => {
    console.log({ menu });
  }, [cartstatus, totalquantity]);

  return (
    <>
      {open && <Cart />}
      {menu && <Menu />}
      <About />
      <div id="infonow">
        <Infos />
      </div>
      <div id="shop">
        <Products />
      </div>
      <div id="faq">
        <Faq />
      </div>
    </>
  );
}
