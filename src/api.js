const PRODUCTS = [
  { id: 1, name: "Apple iPhone 15" },
  { id: 2, name: "Samsung Galaxy S24" },
  { id: 3, name: "Xiaomi 13" },
  { id: 4, name: "MacBook Pro M3" },
  { id: 5, name: "Dell XPS 15" },
  { id: 6, name: "Sony WH-1000XM5" },
  { id: 7, name: "iPad Pro" },
  { id: 8, name: "Logitech MX Master 3" },
]

export function searchProducts(query, page = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {

        if (!query) {
          resolve([]);
        }
        else {
          const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
          resolve(results);

        }
      }
      catch (err) {
        reject(err);
      }
    }, 200)
  })
}