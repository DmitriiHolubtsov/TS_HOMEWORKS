function formatProductInfo(product) {
    const { name, price, available } = product;
    const availability = available ? 'Yes' : 'No';
    return `Item: ${name}, Price: ${price} USD, Is available: ${availability}`;
  }
  
  const product = {
    name: 'Phone',
    price: 15000,
    available: true
  };
  
  const productInfo = formatProductInfo(product);
  console.log(productInfo); 