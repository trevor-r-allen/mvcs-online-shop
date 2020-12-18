import ProductsController from "./Controllers/ProductsController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  productsController = new ProductsController();
}

window["app"] = new App();
