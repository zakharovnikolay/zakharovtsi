import React, { useState } from 'react';

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
}

interface ButtonProps {
  size: "small" | "medium" | "large";
  color: "primary" | "secondary";
  title: string;
  onClick: () => void;
}

const Button = ({ size, color, title, onClick }: ButtonProps) => {
  const defaultClass = "flex items-center rounded-full py-1 px-4 border size-fit transition-colors";
  const classes = {
    borders: {
      primary: "border-blue-500 bg-blue-500 text-white hover:bg-blue-600",
      secondary: "border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    },
    sizes: {
      small: "text-sm py-1 px-3",
      medium: "text-base py-2 px-4",
      large: "text-lg py-3 px-6",
    },
  };

  return (
    <button
      className={`${defaultClass} ${classes.sizes[size]} ${classes.borders[color]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold">{product.title}</h3>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-green-600 font-bold mt-2">{product.price} ₽</p>
    </div>
  );
};

const AddingProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    title: '',
    description: '',
    price: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProduct = () => {
    if (newProduct.title && newProduct.description && newProduct.price) {
      const productWithId = {
        ...newProduct,
        id: Date.now().toString()
      };
      
      setProducts(prev => [...prev, productWithId]);
      setNewProduct({ title: '', description: '', price: '' });
      setIsModalOpen(false);
    } else {
      alert('Заполните все поля!');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Товары</h1>
        <Button
          size="medium"
          color="primary"
          title="Добавить товар"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Добавить товар</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-gray-700">Название</label>
                <input
                  type="text"
                  name="title"
                  value={newProduct.title}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Введите название"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-gray-700">Описание</label>
                <input
                  type="text"
                  name="description"
                  value={newProduct.description}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Введите описание"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-gray-700">Цена</label>
                <input
                  type="text"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Введите цену"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <Button
                size="medium"
                color="secondary"
                title="Отмена"
                onClick={() => setIsModalOpen(false)}
              />
              <Button
                size="medium"
                color="primary"
                title="Добавить"
                onClick={handleAddProduct}
              />
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500">
            Нет добавленных товаров
          </div>
        )}
      </div>
    </div>
  );
};

export default AddingProduct;