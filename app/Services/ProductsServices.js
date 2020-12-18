import { ProxyState } from "../AppState.js"

class ProductServices{
  fattenWallet() {
    let wallet = ProxyState.wallet
    wallet += 100
    ProxyState.wallet = wallet
  }
  
  buyProduct({product}){
    let products = ProxyState.products
    let index = products.indexOf(product)
    let wallet = ProxyState.wallet
    if (products[index].stock > 0){
      if (wallet >= product[index].price){
        wallet -= product[index].price
        products[index].stock -= 1
      }
      ProxyState.products = products
      ProxyState.wallet = wallet
    }

  }
}


export const productServices = new ProductServices