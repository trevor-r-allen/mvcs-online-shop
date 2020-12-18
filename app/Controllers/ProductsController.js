import { ProxyState } from "../AppState.js"
import { productServices } from "../Services/ProductsServices.js"

function _drawWallet(){
let wallet = ProxyState.wallet
document.getElementById("wallet").innerText = `$$ ${wallet} $$`
}

function _draw(){
  console.log()
  let products = ProxyState.products
  let template = ''
  products.forEach(product => {
    template += product.Template
  });
  document.getElementById(`products`).innerHTML = template
  _drawWallet()
}


export default class ProductsController{
constructor(){
  ProxyState.on("wallet", _drawWallet)
  ProxyState.on("products", _draw)
  _draw()
  _drawWallet()
}
  fattenWallet() {
  productServices.fattenWallet()
}
buyProduct({product}){
  console.log("buy product")
  productServices.buyProduct(product)
}
}