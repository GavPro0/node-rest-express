//console.log('My App');

const express = require('express');
const { faker } = require('@faker-js/faker');

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
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt (faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products);
});


app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
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


app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
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
