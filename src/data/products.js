import airpods from "../assets/AirPods_Pro.jpg";
import homepod from "../assets/Apple_HomePod_Mini.jpg";
import appleWatch from "../assets/Apple_Watch_Series_9.jpg";
import nestHub from "../assets/Google_Nest_Hub.webp";
import pixel from "../assets/Google_Pixel_8.webp";
import iphone from "../assets/iPhone_15_Pro.webp";
import macbook from "../assets/MacBook_Air_M2.jpg";
import surface from "../assets/Microsoft_Surface_Pro.avif";
import galaxyWatch from "../assets/Samsung_Galaxy_Watch_6.jpg";
import galaxyS24 from "../assets/Samsung_Galax_S24.jpg";


export const categories = ["All", "Phones", "Laptops", "Watches", "Audio & Home"];

export const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "Phones",
    price: 999,
    image: iphone,
    bg: "#ffffff",
    blurb: "Titanium design, A17 Pro chip and a 48 MP main camera.",
  },
  {
    id: 2,
    name: "Pixel 8",
    brand: "Google",
    category: "Phones",
    price: 699,
    image: pixel,
    bg: "#a68bfa",
    blurb: "Google Tensor G3, a bright display and seven years of updates.",
  },
  {
    id: 3,
    name: "Galaxy S24",
    brand: "Samsung",
    category: "Phones",
    price: 799,
    image: galaxyS24,
    bg: "#ffffff",
    blurb: "Compact flagship with Galaxy AI and a 120 Hz AMOLED screen.",
  },
  {
    id: 4,
    name: "MacBook Air M2",
    brand: "Apple",
    category: "Laptops",
    price: 1099,
    image: macbook,
    bg: "#fafafa",
    blurb: "Thin, silent and fast, with all-day battery life.",
  },
  {
    id: 5,
    name: "Surface Pro",
    brand: "Microsoft",
    category: "Laptops",
    price: 999,
    image: surface,
    bg: "#f0f0f0",
    blurb: "A tablet that works like a laptop, with a detachable keyboard.",
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    brand: "Apple",
    category: "Watches",
    price: 399,
    image: appleWatch,
    bg: "#000000",
    blurb: "Brighter display, double-tap gesture and advanced health sensors.",
  },
  {
    id: 7,
    name: "Galaxy Watch 6",
    brand: "Samsung",
    category: "Watches",
    price: 299,
    image: galaxyWatch,
    bg: "#f4f4f4",
    blurb: "Sleep coaching, body composition and a larger round screen.",
  },
  {
    id: 8,
    name: "AirPods Pro",
    brand: "Apple",
    category: "Audio & Home",
    price: 249,
    image: airpods,
    bg: "#f5f5f7",
    blurb: "Active noise cancellation with Adaptive Audio and a MagSafe case.",
  },
  {
    id: 9,
    name: "HomePod mini",
    brand: "Apple",
    category: "Audio & Home",
    price: 99,
    image: homepod,
    bg: "#fafafa",
    blurb: "Room-filling sound and Siri, in a speaker the size of a softball.",
  },
  {
    id: 10,
    name: "Nest Hub",
    brand: "Google",
    category: "Audio & Home",
    price: 99,
    image: nestHub,
    bg: "#ffffff",
    blurb: "A 7-inch smart display that controls your lights, music and timers.",
  },
];
