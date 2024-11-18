import { nanoid } from "nanoid";

export let clothes = [
  {
    id: "1", // changed to string
    name: "Classic T-Shirt",
    image: "src/assets/logo.png",
    priceCents: 1999,
    gender: "Unisex",
    category: "T-shirts",
    color: "Red",
    stock: 50,
    description:
      "A comfortable classic t-shirt available in red and black for everyday wear.",
    isFavorite: false,
    rating: { stars: 4.1, reviews: 278 },
  },
  {
    id: "2", // changed to string
    name: "Denim Jacket",
    image: "src/assets/logo.png",
    priceCents: 4999,
    gender: "Men",
    category: "Jackets",
    color: "Blue",
    stock: 20,
    description:
      "A stylish denim jacket perfect for layering, available in blue and black.",
    isFavorite: false,
    rating: { stars: 3.9, reviews: 136 },
  },
  {
    id: "3", // changed to string
    name: "Chic Blouse",
    image: "src/assets/logo.png",
    priceCents: 2999,
    gender: "Women",
    category: "Blouses",
    color: "White",
    stock: 15,
    description:
      "A chic blouse available in white and pink for a polished look.",
    isFavorite: false,
    rating: { stars: 4.5, reviews: 412 },
  },
  {
    id: "4", // changed to string
    name: "Cargo Pants",
    image: "src/assets/logo.png",
    priceCents: 3999,
    gender: "Unisex",
    category: "Pants",
    color: "Green",
    stock: 25,
    description: "Durable cargo pants with multiple pockets.",
    isFavorite: false,
    rating: { stars: 3.4, reviews: 89 },
  },
  {
    id: "5", // changed to string
    name: "Running Sneakers",
    image: "src/assets/logo.png",
    priceCents: 10999,
    gender: "Unisex",
    category: "Shoes",
    color: "Black",
    stock: 30,
    description:
      "Lightweight running sneakers for optimal performance, available in black and white.",
    isFavorite: false,
    rating: { stars: 5.0, reviews: 952 },
  },
  {
    id: "6", // changed to string
    name: "Leather Boots",
    image: "src/assets/logo.png",
    priceCents: 8999,
    gender: "Women",
    category: "Shoes",
    color: "Brown",
    stock: 10,
    description: "Stylish leather boots for any occasion.",
    isFavorite: false,
    rating: { stars: 4.0, reviews: 220 },
  },
  {
    id: "7", // changed to string
    name: "Casual Dress",
    image: "src/assets/logo.png",
    priceCents: 5499,
    gender: "Women",
    category: "Dresses",
    color: "Pink",
    stock: 12,
    description: "A casual dress available in floral pattern and solid pink.",
    isFavorite: false,
    rating: { stars: 3.7, reviews: 134 },
  },
  {
    id: "8", // changed to string
    name: "Sports Shorts",
    image: "src/assets/logo.png",
    priceCents: 2499,
    gender: "Unisex",
    category: "Shorts",
    color: "Grey",
    stock: 40,
    description:
      "Comfortable sports shorts available in grey and black for all your activities.",
    isFavorite: false,
    rating: { stars: 4.6, reviews: 303 },
  },
  {
    id: "9", // changed to string
    name: "Wool Sweater",
    image: "src/assets/logo.png",
    priceCents: 5999,
    gender: "Men",
    category: "Sweaters",
    color: "Navy",
    stock: 18,
    description: "A cozy wool sweater to keep you warm.",
    isFavorite: false,
    rating: { stars: 3.8, reviews: 98 },
  },
  {
    id: "10", // changed to string
    name: "Formal Shirt",
    image: "src/assets/logo.png",
    priceCents: 3999,
    gender: "Men",
    category: "Shirts",
    color: "White",
    stock: 22,
    description:
      "A crisp formal shirt available in white and blue for special occasions.",
    isFavorite: false,
    rating: { stars: 4.0, reviews: 179 },
  },
  {
    id: "11", // changed to string
    name: "Summer Sandals",
    image: "src/assets/logo.png",
    priceCents: 2999,
    gender: "Women",
    category: "Shoes",
    color: "Pink",
    stock: 0,
    description: "Comfortable sandals perfect for summer days.",
    isFavorite: false,
    rating: { stars: 2.8, reviews: 65 },
  },
  {
    id: "12", // changed to string
    name: "Track Jacket",
    image: "src/assets/logo.png",
    priceCents: 4499,
    gender: "Unisex",
    category: "Jackets",
    color: "Black",
    stock: 15,
    description: "A stylish track jacket for sports and leisure.",
    isFavorite: false,
    rating: { stars: 4.1, reviews: 312 },
  },
  {
    id: "13", // changed to string
    name: "Jeans",
    image: "src/assets/logo.png",
    priceCents: 4999,
    gender: "Unisex",
    category: "Pants",
    color: "Blue",
    stock: 0,
    description: "Classic blue jeans for casual wear.",
    isFavorite: false,
    rating: { stars: 4.5, reviews: 438 },
  },
  {
    id: "14", // changed to string
    name: "Graphic Hoodie",
    image: "src/assets/logo.png",
    priceCents: 3999,
    gender: "Unisex",
    category: "Hoodies",
    color: "Grey",
    stock: 30,
    description:
      "A cozy hoodie with a fun graphic design, available in grey and navy.",
    isFavorite: false,
    rating: { stars: 3.1, reviews: 87 },
  },
  {
    id: "15", // changed to string
    name: "Sweatpants",
    image: "src/assets/logo.png",
    priceCents: 3499,
    gender: "Unisex",
    category: "Pants",
    color: "Black",
    stock: 25,
    description:
      "Comfortable sweatpants available in black and grey for lounging or workouts.",
    isFavorite: false,
    rating: { stars: 4.8, reviews: 362 },
  },
  {
    id: "16", // changed to string
    name: "Beach Cover-Up",
    image: "src/assets/logo.png",
    priceCents: 2499,
    gender: "Women",
    category: "Cover-ups",
    color: "Cyan",
    stock: 15,
    description: "Light and breezy cover-up for beach days.",
    isFavorite: false,
    rating: { stars: 2.9, reviews: 52 },
  },
  {
    id: "17", // changed to string
    name: "Polo Shirt",
    image: "src/assets/logo.png",
    priceCents: 2999,
    gender: "Men",
    category: "Shirts",
    color: "Green",
    stock: 20,
    description:
      "A classic polo shirt available in green and navy for smart casual looks.",
    isFavorite: false,
    rating: { stars: 3.7, reviews: 144 },
  },
  {
    id: "18", // changed to string
    name: "Maxi Skirt",
    image: "src/assets/logo.png",
    priceCents: 3999,
    gender: "Women",
    category: "Skirts",
    color: "Purple",
    stock: 12,
    description: "Flowy maxi skirt for a feminine touch.",
    isFavorite: false,
    rating: { stars: 4.1, reviews: 209 },
  },
  {
    id: "19", // changed to string
    name: "Lightweight Jacket",
    image: "src/assets/logo.png",
    priceCents: 5999,
    gender: "Unisex",
    category: "Jackets",
    color: "Olive",
    stock: 20,
    description:
      "Perfect for transitional weather, this jacket is lightweight and stylish.",
    isFavorite: false,
    rating: { stars: 4.7, reviews: 391 },
  },
  {
    id: "20", // changed to string
    name: "Bikini Set",
    image: "src/assets/logo.png",
    priceCents: 3999,
    gender: "Women",
    category: "Swimwear",
    color: "Red",
    stock: 18,
    description: "A stylish bikini set for beach outings.",
    isFavorite: false,
    rating: { stars: 3.2, reviews: 123 },
  },
];

console.log(clothes.length);
