import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  @tracked color = 'red';

  get productImage() {
    type = '';
    if (this.color === 'black')
      type = 'Parallel-';
    return `/assets/images/${this.type}BT1-010.png`;
  }

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }
}
