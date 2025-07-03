import { useCallback, type FC, type SyntheticEvent } from 'react';
import viteLogo from '/vite.svg'
import type { IProductCardProps } from './ProductCard.types';
import { formatPrice } from '../../globalUtils/formatPrice';
import './ProductCard.styles.css'

const ProductCard: FC<IProductCardProps> = (props) => {
  const {
    currency,
    imageUrl,
    origin,
    price,
    title
  } = props;

  const handleImageLoadError = useCallback((event: SyntheticEvent<HTMLImageElement, Event>) => {
    if (viteLogo) {
       
      event.currentTarget.src = viteLogo;
      event.currentTarget.classList.add('image-error')
    }
  }, []);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={imageUrl} 
          alt={title} 
          className="product-image"
          onError={handleImageLoadError}
        />
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-origin">Страна: {origin}</p>
        <p className="product-price">{formatPrice(price, currency)}</p>
      </div>
    </div>
  )
}

export default ProductCard;