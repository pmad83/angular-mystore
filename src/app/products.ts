export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  type: string;
  alcohol: number;
  volume: number;
  inStock: number;
}

export const products = [
  {
    id: 1,
    name: 'Grand Marnier Cordon Rouge Liqueur',
    price: 104,
    description:
      'Likier wyrabiany na bazie koniaku i esencjonalnego destylatu z gorzkiej pomarańczy z tajemniczym dodatkiem od producenta. Całość dojrzewa w dębowych beczkach, które nadają likierowi gładkości i nut wanilii. W aromacie oprócz gorzkiej pomarańczy pojawiają się nuty toffi i karmelu z delikatną nutą orzechów włoskich i drzewa sandałowego.',
    type: 'Triple sec',
    alcohol: 40,
    volume: 0.7,
    inStock: 15,
  },
  {
    id: 2,
    name: 'Cointreau',
    price: 79,
    description:
      'Najpopularniejszy likier z rodziny curacao. W aromacie dominują nuty gorzkiej i słodkiej pomarańczy. Bardzo wyrazisty, aromatyczny trunek, a przy okazji bardzo pijalny. Lekko wytrawna końcówka pozostawia w ustach przyjemny aromat pomarańczowy.',
    type: 'Triple sec',
    alcohol: 40,
    volume: 0.7,
    inStock: 55,
  },
  {
    id: 3,
    name: 'Bols Blue Curacao',
    price: 69,
    description:
      'Mandarynkowy aromat uzupełniony cytryną i otartą skórką pomarańczową. W ustach pozostawia posmak cukierków pomarańczowych.',
    type: 'Triple sec',
    alcohol: 21,
    volume: 0.7,
    inStock: 0,
  },
  {
    id: 4,
    name: 'Toorank Dream Blue Curacao',
    price: 47,
    description:
      'Budżetowa propozycja od szturmującego rynek Toorank’a. Mało aromatyczny likier, ginący w zbyt skomplikowanych drinkach, ale nadal warty uwagi.',
    type: 'Triple sec',
    alcohol: 20,
    volume: 0.7,
    inStock: 12,
  },

  {
    id: 5,
    name: 'Juanita Blue Curacao',
    price: 27,
    description:
      'Okazuje się, że da się zrobić ten trunek w tak dumpingowej cenie. Smak też jest raczej dumpingowy. Jeśli szukacie curacao tylko po to, by zabarwić drinki to ta marka spisze się idealnie. Niestety, Juanita to nic ponad naturalne (dzięki Bogu!) barwniki i aromaty zmieszane z cukrem oraz alkoholem rolniczym – tak głosi etykieta.',
    type: 'Triple sec',
    alcohol: 21,
    volume: 0.5,
    inStock: 0,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
