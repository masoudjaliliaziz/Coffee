import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/app/_lib/serviceTypes";

type CartItem = {
  product: Product;
  quantity: number;
  price: number;
  roast: string;
  weight: string;
  machine: string;
};

type CardSlice = CartItem[];

const initialState: CardSlice = [];

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        product: Product;
        quantity: number;
        price: number;
        roast: string;
        weight: string;
        machine: string;
      }>
    ) => {
      const { product, quantity, price, roast, weight, machine } =
        action.payload;

      // بررسی اینکه محصول قبلاً در سبد خرید هست یا نه
      const existingProductIndex = state.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.roast === roast &&
          item.weight === weight &&
          item.machine === machine
      );

      if (existingProductIndex !== -1) {
        // اگر محصول با ویژگی‌های مشابه پیدا شد، تعداد و قیمت رو آپدیت می‌کنیم
        state[existingProductIndex].quantity += quantity;
        state[existingProductIndex].price =
          state[existingProductIndex].quantity * product.price;
      } else {
        // اگر محصول جدید بود، اون رو اضافه می‌کنیم
        state.push({
          product,
          quantity,
          price,
          roast,
          weight,
          machine,
        });
      }
    },
    // اکشن‌های دیگه برای حذف یا تغییر سبد خرید می‌تونید اینجا اضافه کنید
  },
});

export const { addToCart } = cardSlice.actions;
export default cardSlice.reducer;
