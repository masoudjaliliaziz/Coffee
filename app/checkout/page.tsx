import AdderssCheckout from "../_component/mobile/checkout/AdderssCheckout";
import HeaderCheckout from "../_component/mobile/checkout/HeaderCheckout";

function page() {
  return (
    <div className="w-full h-full bg-base-200 ">
      <HeaderCheckout />
      <AdderssCheckout />
    </div>
  );
}

export default page;
