interface ProductCardProps {
  product: {
    id: string;
    title: string;
    description: string;
    price: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold">{product.title}</h3>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-green-600 font-bold mt-2">{product.price} ₽</p>
    </div>
  );
};

export default ProductCard;