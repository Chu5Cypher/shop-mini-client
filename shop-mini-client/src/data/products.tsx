export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};
export const products: Product[] = [
  { id: 1, name: "RTX-3070", price: 150000, image: "https://placehold.co/400x300?text=RTX-3070", category: "Linh kiện", stock: 12 },
  { id: 2, name: "Bàn phím AULA-F75", price: 420000, image: "https://placehold.co/400x300?text=Ban+phim", category: "Điện tử", stock: 5 },
  { id: 3, name: "Tai nghe Bluetooth", price: 690000, image: "https://placehold.co/400x300?text=Tai+nghe", category: "Điện tử", stock: 0 },
  { id: 4, name: "Card Wifi6", price: 185000, image: "https://placehold.co/400x300?text=Card+Wifi6", category: "Linh kiện", stock: 20 },
  { id: 5, name: "Intel-core i7", price: 550000, image: "https://placehold.co/400x300?text=Intel-core+i7", category: "Linh kiện", stock: 8 },
  { id: 6, name: "Chuột không dây", price: 245000, image: "https://placehold.co/400x300?text=Chuot", category: "Điện tử", stock: 15 },
];
