import type { CurrencyKey } from "../../globalUtils/formatPrice";

export interface IProductCardProps {
  // Название товара
  title: string;  
  // Страна происхождения
  origin: string;
  // Цена (копейки)
  price: number;
  // Локализация валюты
  currency: CurrencyKey;
  // Изображение товара
  imageUrl: string
}