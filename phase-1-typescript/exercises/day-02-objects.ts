type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

const firstProduct: Product = { name: "Mop", price: 140, inStock: true };
const secondProduct: Product = { name: "Hose", price: 120 }; // Kulang ang inStock

const products: Product[] = [firstProduct, secondProduct];

products.forEach((product) => {
  console.log(
    `Name: ${product.name} | Price: ${product.price} | In-Stock: ${product.inStock ? "Available" : "Out of Stock"}`,
  );
});
