import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Elephant",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Animal edition of black"
      },
      {
        "name": "Sri Lankan Leopard",
        "profilePic": "assets/img/speakers/leopard.jpg",
        "about": "Iconic animal in Sri Lanka"
      },
      {
        "name": "Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Sri Lankan Elephant",
        "profilePic": "assets/img/speakers/elephantn.jpg",
        "about": "Sri lankan Elephant."
      },
      {
        "name": "Sri Lankan Jungle fowl",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Sri Lankan national animal."
      },
      {
        "name": "Crocodile",
        "profilePic": "assets/img/speakers/crocodileo.jpg",
        "about": "One of the strongest animal in wild."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
