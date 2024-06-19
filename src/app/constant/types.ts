export type PRODUCT = {
  id: number;
  name: string;
  price: number;
  image: string;
  discount: string;
};



export const products: PRODUCT[] = [
  {
    id: 1,
    name: "Product Name",
    price: 29.99,
    image: "/glub.png",
    discount: "UP to 50% OFF",
  },
  {
    id: 2,
    name: "Product Name",
    price: 39.99,
    image: "/glub.png",
    discount: "UP to 50% OFF",
  },
  {
    id: 3,
    name: "Product Name",
    price: 19.99,
    image: "/glub.png",
    discount: "UP to 50% OFF",
  },
  {
    id: 4,
    name: "Product Name",
    price: 49.99,
    image: "/glub.png",
    discount: "UP to 50% OFF",
  },
  {
    id: 5,
    name: "Product Name",
    price: 59.99,
    image: "/glub.png",
    discount: "UP to 50% OFF",
  },
  {
    id: 6,
    name: "Product Name",
    price: 69.99,
    image: "/glub.png",
    discount: "UP to 50% OFF",
  },
  {
    id: 7,
    name: "Product Name",
    price: 79.99,
    image: "/glub.png",
    discount: "UP to 50% OFF",
  },
  {
    id: 8,
    name: "Product Name",
    price: 79.99,
    image: "/glub.png",
    discount: "UP to 50% OFF",
  },
];

export type CATEGORY = {
  id: number;
  name: string;
  image: string;
};

export const category: CATEGORY[] = [
  { id: 1, name: "Travel Accessories", image: "/bottle.png" },
  { id: 2, name: "Bags", image: "/bottle.png" },
  { id: 3, name: "Health Accessories", image: "/bottle.png" },
  { id: 4, name: "Home Appliances", image: "/bottle.png" },
  { id: 5, name: "Misc Accessories", image: "/bottle.png" },
  { id: 6, name: "Leather Goods", image: "/bottle.png" },
  { id: 7, name: "Laptop Strolleys", image: "/bottle.png" },
  { id: 8, name: "Leather Goods", image: "/bottle.png" },
];
