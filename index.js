//console.log('My App');

const express = require('express');
const app = express();
const port = 3000;
//const port = 3050;


app.get('/', (req, res) => {
  res.send('Hola mi server en Express!!!');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta (EndPoint)');
});

app.get('/home', (req, res) => {
  res.send('Hola, esto es el Home!!!');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 2000
    }
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    {
      id,
      name: 'Product X',
      price: 0
    }
  );
});


// OJO!!! EndPoint temporal para Pruebas!!!
app.get('/categories', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Category 1'
    },
    {
      id: 2,
      name: 'Category 2'
    }
  ]);
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});


app.listen(port, () => {
  console.log('Mi port: ' + port);
});
