enum Shape {Ace, Diamond, Spaed, Clover}

enum CardNumber {
  One = 0x1,
  Two = 0x2,
  Three = 0x3,
  Four = 0x4,
  Five = 0x5,
  Six = 0x6,
  Seven = 0x7,
  Eight =0x8,
  Nine = 0x9,
  Ten = 0xa,
  J = 0xb,
  Q = 0xc,
  K = 0xd
}

interface Card {
  number: CardNumber;
  shape: Shape;
}

let card: Card = {
  number: CardNumber.One,
  shape: Shape.Ace,
};

card.number;
card.shape;

// class MyCard {
//   number: CardNumber;
//   shape: Shape;
// }
