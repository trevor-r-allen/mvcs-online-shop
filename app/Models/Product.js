export default class Product{
  constructor({name, price, imgUrl, description, stock, id}){
    this.name = name
    this.price = price
    this.imgUrl = imgUrl
    this.description = description
    this.stock = stock
    this.id = id
  }

get Template() {
  return /*html*/`<div class="col">
    <div class="card"> 
    <img src="${this.imgUrl}" class="img-fluid rounded-sm">
    <h5>${this.name}</h5>
    <h6>$${this.price}</h6>
    <p>${this.description} Stock:${this.stock}</p>
    <button type="button" class="btn btn-success" onclick="app.productsController.buyProduct(${this})">BUY NOW</button>
    </div>
    </div>`

}
}