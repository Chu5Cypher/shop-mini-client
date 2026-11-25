export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  { id: 1, name: "RTX-3070", price: 150000, image: "/images/rtx5090.jpg", category: "Linh kiện", stock: 12 },
  { id: 2, name: "Bàn phím AULA-F75", price: 420000, image: "/images/aulaf75.jpg", category: "Điện tử", stock: 5 },
  { id: 3, name: "Tai nghe Bluetooth", price: 690000, image: "/images/headphone-bluetooth.jpg", category: "Điện tử", stock: 0 },
  { id: 4, name: "Card Wifi6E", price: 185000, image: "/images/cardwifi.jpg", category: "Linh kiện", stock: 20 },
  { id: 5, name: "Intel-core i7", price: 550000, image: "/images/intel-corei7.jpg", category: "Linh kiện", stock: 8 },
  { id: 6, name: "Chuột không dây", price: 245000, image: "/images/chuotkhongday.jpg", category: "Điện tử", stock: 15 },
];