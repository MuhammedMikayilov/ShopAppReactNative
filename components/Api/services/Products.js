import { HttpClient } from "../HttpClient";

class ProductService extends HttpClient {
  constructor() {
    super("https://rn-shop-app-39251-default-rtdb.firebaseio.com");
  }

  getAllProducts() {
    return this.get("products.json");
  }
  createProducts(body) {
    return this.post("products.json", body);
  }
  updateProducts(id, body) {
    return this.put("products.json", body, id);
  }
  deleteProducts(id) {
    return this.delete("products.json", id);
  }
}

export const productsService = new ProductService();
