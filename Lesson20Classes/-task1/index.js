"use strict";

class Order {
  constructor(price, city, type) {
    this.id = Math.random().toString(36).substring(2, 9);
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === "Buy" || this.type === "Sell") {
      return true;
    }
    return false;
  }
}

// --- data Test
const order1 = new Order(234, "Lviv", "Sell");

console.log(order1);
