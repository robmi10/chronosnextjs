import React, { createContext, useEffect, useState } from "react";
import Stripe from "stripe";
export const StripeContext = createContext();
const StripeProvider = ({ children }) => {
  const [prices, setPrices] = useState([]);
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [checkoutstatus, setCheckoutstatus] = useState(false);

  useEffect(() => {
    getStripeData();
  }, []);

  useEffect(() => {
    if (checkoutstatus) {
      checkoutapi();
    }
  }, [checkoutstatus]);

  useEffect(() => {
    console.log("inside cart context");
  }, [setCart]);

  const getStripeData = async () => {
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

    setPrices(prices);
  };

  const checkoutapi = async () => {
    const lineItems = cart.map((option) => {
      return {
        price: option.id,
        quantity: option.quantity,
      };
    });

    console.log({ lineItems });

    console.log({
      lineItemsStringify: JSON.stringify({ lineItems: lineItems }),
    });
    setCheckoutstatus(false);
    try {
      const res = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lineItems: lineItems[0] }),
      });

      const b = await res.json();
      console.log({ b });
      window.location.href = b.data.url;
    } catch (error) {
      console.log({ error });
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
      }}
    >
      {children}
    </StripeContext.Provider>
  );
};

export default StripeProvider;
