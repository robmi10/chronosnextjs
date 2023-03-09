import React, { createContext, useEffect, useState } from "react";
import Stripe from "stripe";
export const StripeContext = createContext();
const StripeProvider = ({ children }) => {
  const [prices, setPrices] = useState([]);
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [checkoutstatus, setCheckoutstatus] = useState(false);
  const [cartstatus, setCartstatus] = useState(false);
  const [totalquantity, setTotalquantity] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    getStripeData();
  }, [cart]);

  useEffect(() => {
    let cartStorage = localStorage.getItem("cart");
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    if (cartStorage && !cart.length > 0) {
      setCart(JSON.parse(cartStorage));
    }
  }, [cartstatus]);

  useEffect(() => {
    setCartstatus(!cartstatus);
    if (checkoutstatus) {
      checkoutapi();
    }
  }, [checkoutstatus]);

  const getStripeData = async () => {
    let cartStorage = localStorage.getItem("cart");
    const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET ?? "", {
      apiVersion: "2020-08-27",
    });

    const response = await stripe.prices.list({
      limit: 10,
      expand: ["data.product"],
    });

    const prices = response.data.filter((price) => {
      return price.active;
    });

    const cartItems = prices.map((option) => {
      return {
        id: option.id,
        quantity: 0,
        info: option,
      };
    });

    setPrices(prices);
    if (cart.length <= 0 && !cartStorage) {
      setCart(cartItems);
    }
  };

  const checkoutapi = async () => {
    let lineItemArray = [];
    cart.map((option) => {
      if (option.quantity > 0) {
        lineItemArray.push({ price: option.id, quantity: option.quantity });
      }
    });

    try {
      const res = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lineItems: lineItemArray }),
      });
      const b = await res.json();
      window.location.href = b.data.url;
      await setCheckoutstatus(false);
      await setCart([]);
      await localStorage.removeItem("cart");
    } catch (error) {
      setCheckoutstatus(false);
      console.error({ error });
    }
  };

  return (
    <StripeContext.Provider
      value={{
        prices,
        setPrices,
        cart,
        setCart,
        open,
        setOpen,
        checkoutstatus,
        setCheckoutstatus,
        cartstatus,
        setCartstatus,
        totalquantity,
        setTotalquantity,
        menu,
        setMenu,
      }}
    >
      {children}
    </StripeContext.Provider>
  );
};

export default StripeProvider;
