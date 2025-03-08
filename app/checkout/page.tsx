import CartProducts from "../_component/CartProducts";
import AdderssCheckout from "../_component/mobile/checkout/AdderssCheckout";
import GoToPayment from "../_component/mobile/checkout/GoToPayment";
import HeaderCheckout from "../_component/mobile/checkout/HeaderCheckout";
import SendingType from "../_component/mobile/checkout/SendingType";

function page() {
  return (
    <div className="w-full h-full bg-base-200 ">
      <HeaderCheckout />
      <AdderssCheckout />
      <div className=" divider divider-start px-6 ">
        <h1 className=" font-bold text-lg">لیست سفارشات شما</h1>
      </div>
      <div className="px-6 w-full h-4/12 flex justify-center items-center">
        <CartProducts />
      </div>
      <div className=" divider divider-start px-6 ">
        <h1 className=" font-bold text-lg"> نوع ارسال</h1>
      </div>
      <SendingType />
      <GoToPayment />
    </div>
  );
}

export default page;
