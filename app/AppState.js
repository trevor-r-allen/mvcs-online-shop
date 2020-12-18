import Product from "./Models/Product.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  wallet = 0
/**@type {Product[]} */
  cart = []

  /** @type {Product[]} */
  products = [new Product ({name: "Bike", price: 200, imgUrl: "https://wyattbikes.com/wp-content/uploads/2018/07/Vista-4.jpg", description: "Ride it", stock: 10, id: "bike"}), new Product ({name: "Shoes", price: 70, imgUrl: "https://www.adventure-journal.com/wp-content/uploads/2013/02/climbing-shoe-fit-660.jpg", description: "Wear 'em", stock: 50, id: "shoes"}), new Product ({name: "Water Bottle", price: 10, imgUrl: "https://images.squarespace-cdn.com/content/v1/5346a846e4b0101b157468cf/1588488443728-YEJYQOIJ1CU6J543543A/ke17ZwdGBToddI8pDm48kPx25wW2-RVvoRgxIT6HShBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwGbtSA7WutlFA3XjmDXUDFwmxX_uEhqHOBUlPnU0mYmf1Qvd6diXKmxQIX-f1CXeo/Hydro+Flask+Wide+Mouth+32+oz.+Vacuum+Insulated+Stainless+Water+Bottle.jpg", description: "Drink out of it", stock: 100, id: "water-bottle"}), new Product ({name: "Backpack", price: 100, imgUrl: "https://images-na.ssl-images-amazon.com/images/I/712Bt13ReRL._AC_SL1500_.jpg", description: "Put stuff in", stock: 50, id: "backpack"}), new Product ({name: "Snowboard", price: 350, imgUrl: "https://www.theactionadvisor.com/wp-content/uploads/2017/12/Burton-Ripcord-Snowboard-review-color-red-black.jpg", description: "Shred da powder", stock: 15, id: "snowboard"}), new Product ({name: "Carabiner", price: 5, imgUrl: "https://www.mountaineers.org/blog/language-matters-lets-stop-using-the-slang-word-for-carabiner/@@images/bb092c0c-933f-455c-9b6f-71d869cf783d.jpeg", description: "Clip it", stock: 500, id: "carabiner"})] 
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
