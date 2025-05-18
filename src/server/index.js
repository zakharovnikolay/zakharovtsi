const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: '1', title: 'Ноутбук', description: 'Мощный игровой ноутбук', price: '75000' },
  { id: '2', title: 'Смартфон', description: 'Флагман 2023 года', price: '65000' }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const { title, description, price } = req.body;
  
  if (!title || !description || !price) {
    return res.status(400).json({ error: 'Все поля обязательны для заполнения' });
  }

  if (isNaN(parseFloat(price))) {
    return res.status(400).json({ error: 'Цена должна быть числом' });
  }

  const newProduct = {
    id: Date.now().toString(),
    title,
    description,
    price: parseFloat(price).toFixed(2)
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});