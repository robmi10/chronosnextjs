import Cart from "@/components/cart";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import About from "@/components/home";
import Infos from "@/components/infos";
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
      <About />
      <Infos />
      <div className=" w-screen h-screen flex justify-center items-center flex-col ">
        <Products />
      </div>
      <Faq />
      <Footer />
    </>
  );
}
