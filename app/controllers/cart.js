import Controller from '@ember/controller';

export default class CartController extends Controller {
  get subtotal() {
    return this.model.reduce((acc, item) => {
      return +(Math.round((acc + item.price) * 100) / 100).toFixed(2);
    }, 0);
  }

  get tax() {
    return +(Math.round((0.07 * this.subtotal) * 100) / 100).toFixed(2);
  }

  get total() {
    return +(Math.round((this.tax + this.subtotal) * 100) / 100).toFixed(2);
  }
}
