import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Sri Lankan Leopard",
    "profilePic": "assets/img/speakers/leopard.jpg",
    "about": "Danger with beauty.",
    "details" : "The Sri Lankan leopard or Ceylon leopard (Panthera pardus kotiya) is a leopard subspecues  native to Sri Lanka that was first described in 1956 by the Sri Lankan zoologist Deraniyagala. In 2008, the Sri Lankan leopard was listed as Endangered on the IUCN Red List. The wild population is roughly estimated at 700–950 individuals as of 2015.",
  };


  constructor() {
    let items = [
      {
        "name": "Sri Lankan Elephant",
        "profilePic": "assets/img/speakers/elephantn.jpg",
        "about": "The proudest animal in wild.",
        "details" : "The Sri Lankan elephant (Elephas maximus maximus) is one of three recognized subspecies of the Asian elephant, and native to Sri Lanka. Since 1986, Elephas maximus has been listed as endangered  by IUCN as the population has declined by at least 50% over the last three generations, estimated to be 60–75 years. The species is pre-eminently threatened by habitat loss, degradation and fragmentation.Elephas maximus maximus is the type subspecies of the Asian elephant, first described byCarl Linneus under the binominal Elephas maximus in 1758.    The Sri Lankan elephant population is now largely restricted to the dry zone in the north, east and southeast of Sri Lanka. Elephants are present in Udawalawa National Park, Yala National Park, Lunugamwehera National Park, Minneriya National Park and Minneriya National Park but also live outside protected areas. It is estimated that Sri Lanka has the highest density of elephants in Asia. Human-elephant conflict is increasing due to conversion of elephant habitat to settlements and permanent cultivation."
      },
      {
        "name": "Sri Lankan Jungle fowl",
        "profilePic": "assets/img/speakers/fowl.jpg",
        "about": "Sri Lankan national animal.",
        "details" : "The Sri Lankan jungle fowl (Gallus lafayettii), also known as the Ceylon jungle fowl, is a member of the Galliformes bird order which is endemic to Sri Lanka, where it is the national bird. It is closely related to the red jungle fowl (G. gallus), the wild jungle fowl from which the chicken was domesticated. The specific name of the Sri Lankan junglefowl commemorates the French aristocrat Gilbert du Motier, marguis de La Fayette. In Sinhala, it is known as වළි කුකුළා (wali kukula) and in Tamil, it is known as இலங்கைக் காட்டுக்கோழி (ilaṅkaik kāṭṭukkōḻi). As with other jungle fowl, the Sri Lankan jungle fowl is strongly sexually dimorphic; the male is much larger than the female, with more vivid plumage and a highly exaggerated wattle and comb."
      },
      {
        "name": "Sri Lankan Leopard",
        "profilePic": "assets/img/speakers/leopard.jpg",
        "about": "Danger with beauty",
        "details" : "The Sri Lankan leopard or Ceylon leopard (Panthera pardus kotiya) is a leopard subspecues  native to Sri Lanka that was first described in 1956 by the Sri Lankan zoologist Deraniyagala. In 2008, the Sri Lankan leopard was listed as Endangered on the IUCN Red List. The wild population is roughly estimated at 700–950 individuals as of 2015. "
      },
      {
        "name": "Sr Lankan Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Animal edition of black",
        "details" : "The sloth bear (Melursus ursinus) is an insectivorous bear species native to the Indian subcontinent. It is listed as Vulnerable on the IUCN Red List, mainly because of habitat loss and degradation.[1] It has also been called labiates bear because of its long lower lip and palate used for sucking insects.   Compared to brown and black bears, the sloth bear is lankier, has a long, shaggy fur and a mane around the face, and long, sickle-shaped claws. It evolved from the ancestral brown bear during the Pleistocene and through convergent evolution shares features found in insect-eating mammals.  Sloth bears breed during spring and early summer and give birth near the beginning of winter. They feed on termites, honeybee colonies, and fruits. Sloth bears sometimes attack humans who encroach on their territories. Historically, humans have drastically reduced their habitat and diminished their population by hunting them for food and products such as their bacula and claws.Sloth bears have been tamed and used as performing pets."
      },

      {
        "name": "Sri Lanka Grey Hornbill",
        "profilePic": "assets/img/speakers/grey1.jpg",
        "about": "The bird with reputation.",
        "details" : "Sri Lanka Grey Hornbill is one of the endemic resident bird of Sri Lanka, found in forest habitats. These birds are omnivores and known as Alu Kadatta in the Sinhala Language of Sri Lanka.."
      },
      {
        "name": "Sri Lankan Flying Snake",
        "profilePic": "assets/img/speakers/snake.jpg",
        "about": "Flying Snake.",
        "details" : "The Sri Lankan flying snake (Chrysopelea taprobanica) is a species of gliding snake distributed in India and Sri Lanka. It can glide, as with all species of its genus Chrysopelea, by stretching the body into a flattened strip using its ribs. The snake is known as dangara dandaa.  Medium-sized snake. Head depressed. Eyes are large with round pupils. Ventrals with keels laterally. Vertebral scales are not enlarged. Dorsal scales are smooth or feebly keeled. Dorsal side is greenish yellow or pale green. Orange to red spots can be seen between dark cross bands. Head is black dorsally with yellow and black cross bars. Ventral side is pale green with a series of black lateral spots on each side. "
      },
      {
        "name": "Sri Lankan Krait",
        "profilePic": "assets/img/speakers/mk.jpg",
        "about": "Snake with beauty and danger.",
        "details" : "The Ceylon krait or Sri Lankan krait (Bungarus ceylonicus)[1] is a species of venomous elapid snake which is endemic to the island Sri Lanka, locally known as මුදු කරවලා (mudu karawalaa).  The Sri Lankan krait is small and slender. On hatching, the length of the snake is about 250 mm (9.8 in). The average adult length for this species is 75 cm (29 1⁄2 in) with 90 cm (35 1⁄2 in) being the upper limit.[2] Its black skin is crossed with thin white transverse bands. It has an extraordinarily long lung which it inflates when angry.  Few details are recorded. The Sri Lankan krait is oviparous. It appears that either many females share a common nest, or a single female lays its eggs in several batches, making determination of clutch size difficult. The eggs are cylindrical with rounded ends and measure 30 mm × 17 mm (1 1⁄8 in × 5⁄8 in)."
      },

      {
        "name": "Sri Lanka Crocodile",
        "profilePic": "assets/img/speakers/crocodileo.jpg",
        "about": "Danger in the water.",
        "details" : "Mugger crocodiles have 19 upper teeth on each side; a snout that is 1⅓ to 1½ as long as broad at the base; a rough head but without any ridges; mandibular symphysis extending to the level of the fourth or fifth tooth; pre-maxillo-maxillary suture, on the palate, transverse, nearly straight, or curved forwards; and nasal bones separating the pnemaxillaries above. Four large nuchals forming a square, with a smaller one on each side; two pairs of smaller nuchals on a transverse series behind the occiput. Dorsal shield well separated from the nuchal, the scutes usually in 4, rarely in 6, longitudinal series, those of the two median usually considerably broader than long; 16 or 17 transverse series. Scales on limbs keeled. Fingers webbed at the base; outer toes extensively webbed. A serrated fringe on the outer edge of the leg. Adult blackish olive above: young pale olive, dotted and spotted with black."
      },

      {
        "name": "Grizzled Giant Squirrel",
        "profilePic": "assets/img/speakers/gs.jpg",
        "about": "The amazing squirrel.",
        "details" : "Grizzled Giant Squirrel is a large tree squirrel native to highland riparian forests of Sri Lanka. Ratufa macroura also found in Kerala and Tamil Nadu state of India. In Addition, Sri Lanka island is home to two species of crocodiles, giant python, Sri Lanka wood pigeon,Crested serpent eagle and white-bellied sea eagle."
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
