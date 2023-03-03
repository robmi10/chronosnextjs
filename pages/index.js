import Products from "@/components/products";

export default function Home() {
  return (
    <>
      <div className=" w-screen h-screen flex justify-around items-center text-4xl font-bold flex-col ">
        <div>BIOTWR HEMSIDA</div> <Products />
      </div>
    </>
  );
}
