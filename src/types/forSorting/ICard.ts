import { ICardElement } from './ICardElement';

export interface ICard {
  type: string;

  elements: (ICardElement | ICard)[];
}
