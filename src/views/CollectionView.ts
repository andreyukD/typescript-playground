import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");

    //to do - fix
    var that = this;
    setTimeout(function () {
      for (let model of that.collection.models) {
        const itemParent = document.createElement("div");
        that.renderItem(model, itemParent);
        templateElement.content.append(itemParent);
      }

      that.parent.append(templateElement.content);
    }, 2000);
  }
}
