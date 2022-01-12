import { IRichContentSorter, ICarousel, ICard, Channels, ICardElement, Channel } from '../types';

export class RichContentSorter implements IRichContentSorter {
  private channel: Channel;

  constructor({ channel }: { channel: Channel }) {
    this.channel = channel;
  }

  private isCard(object: { type?: string }): boolean {
    return Object.prototype.hasOwnProperty.call(object, 'elements') && object.type !== 'carousel';
  }

  /**
   * Sorts the elements of each card in the body the following order(Top->Bottom): Image->Map->Title->Subtitle->Button->horizontal->vertical.
   * Throws an Error if a card contains an element with an ineligible type.
   * @param {{ type?: string }} body the body  that should be sorted
   * @returns {object} the sorted body
   * @memberof RichContentSorter
   */
  public sortBody(body: { type?: string }): object {
    try {
      const eligibleElementTypes = ['text', 'image', 'button', 'horizontal', 'vertical'];
      if (this.channel === Channels.ABC) {
        eligibleElementTypes.push('map');
      }
      if (this.channel === Channels.WEB) {
        eligibleElementTypes.push('map');
      }
      if (body.type === 'carousel') {
        const carousel = body as ICarousel;
        carousel.elements = carousel.elements.map((element) => {
          if (this.isCard(element)) {
            return this.sortCard(element, eligibleElementTypes);
          }
          return element;
        });
        return carousel;
      }
      if (body.type === 'vertical' || body.type === 'horizontal') {
        const card = body as ICard;
        return this.sortCard(card, eligibleElementTypes);
      }
      return body;
    } catch (e) {
      throw new Error(`The following error occured while trying to sort the cards of the rich content JSON: ${e.message}`);
    }
  }

  private elementComparisonText(el1: { type: string }, el2: { type: string }): number {
    if (el1.type === 'text' && el2.type === 'text') {
      const text1 = el1 as ICardElement;
      const text2 = el2 as ICardElement;
      if (text1.tag === 'title' && text2.tag === 'subtitle') {
        return -1;
      }
      if (text1.tag === 'subtitle' && text2.tag === 'title') {
        return 1;
      }
    }
    if (el1.type === 'text' && el2.type === 'button') {
      return -1;
    }
    if (el1.type === 'button' && el2.type === 'text') {
      return 1;
    }
    return 0;
  }

  private elementComparisonVertical(el1: { type: string }, el2: { type: string }): number {
    if (el1.type === 'vertical' && el2.type === 'image') {
      return 1;
    }
    if (el1.type === 'image' && el2.type === 'vertical') {
      return -1;
    }
    if (el1.type === 'vertical' && el2.type === 'text') {
      return 1;
    }
    if (el1.type === 'text' && el2.type === 'vertical') {
      return -1;
    }
    if (el1.type === 'vertical' && el2.type === 'button') {
      return 1;
    }
    if (el1.type === 'button' && el2.type === 'vertical') {
      return -1;
    }
    if (el1.type === 'vertical' && el2.type === 'map') {
      return 1;
    }
    if (el1.type === 'map' && el2.type === 'vertical') {
      return -1;
    }
    if (el1.type === 'vertical' && el2.type === 'horizontal') {
      return 1;
    }
    if (el1.type === 'horizontal' && el2.type === 'vertical') {
      return -1;
    }

    return 0;
  }

  private elementComparisonHorizontal(el1: { type: string }, el2: { type: string }): number {
    if (el1.type === 'horizontal' && el2.type === 'image') {
      return 1;
    }
    if (el1.type === 'image' && el2.type === 'horizontal') {
      return -1;
    }
    if (el1.type === 'horizontal' && el2.type === 'text') {
      return 1;
    }
    if (el1.type === 'text' && el2.type === 'horizontal') {
      return -1;
    }
    if (el1.type === 'horizontal' && el2.type === 'button') {
      return 1;
    }
    if (el1.type === 'button' && el2.type === 'horizontal') {
      return -1;
    }
    if (el1.type === 'horizontal' && el2.type === 'map') {
      return 1;
    }
    if (el1.type === 'map' && el2.type === 'horizontal') {
      return -1;
    }

    return 0;
  }

  private elementComparisonImage(el1: { type: string }, el2: { type: string }): number {
    if (el1.type === 'image' && el2.type === 'text') {
      return -1;
    }
    if (el1.type === 'text' && el2.type === 'image') {
      return 1;
    }
    if (el1.type === 'image' && el2.type === 'button') {
      return -1;
    }
    if (el1.type === 'button' && el2.type === 'image') {
      return 1;
    }
    if (el1.type === 'image' && el2.type === 'map') {
      return -1;
    }
    if (el1.type === 'map' && el2.type === 'image') {
      return 1;
    }

    return 0;
  }

  private elementComparisonMap(el1: { type: string }, el2: { type: string }): number {
    if (el1.type === 'map' && el2.type === 'button') {
      return -1;
    }
    if (el1.type === 'button' && el2.type === 'map') {
      return 1;
    }
    if (el1.type === 'map' && el2.type === 'text') {
      return -1;
    }
    if (el1.type === 'text' && el2.type === 'map') {
      return 1;
    }
    return 0;
  }

  /**
   * Sorts the elements of a card in the following order(Top->Bottom): Image->Map->Title->Subtitle->Button->horizontal->vertical.
   * Throws an Error if the card contains an element whith an inelegible type.
   * @private
   * @param {ICard} card the card that sould be sorted
   * @param {string[]} eligibleTypes types of elements that are allowed in the card
   * @returns {ICard} the sorted card
   * @memberof RichContentSorter
   */
  private sortCard(card: ICard, eligibleTypes: string[]): ICard {
    card.elements = card.elements.map((el) => {
      if (!eligibleTypes.includes(el.type)) {
        throw new Error(`Card element contains unknown type '${el.type}'`);
      } else if (el.type === 'horizontal' || el.type === 'vertical') {
        const innerCard = el as ICard;
        return this.sortCard(innerCard, eligibleTypes);
      } else {
        return el;
      }
    });

    card.elements = card.elements.sort((el1, el2) => {
      const t1 = this.elementComparisonText(el1, el2);
      if (t1 !== 0) {
        return t1;
      }

      const t2 = this.elementComparisonVertical(el1, el2);
      if (t2 !== 0) {
        return t2;
      }

      const t3 = this.elementComparisonHorizontal(el1, el2);
      if (t3 !== 0) {
        return t3;
      }
      const t4 = this.elementComparisonImage(el1, el2);
      if (t4 !== 0) {
        return t4;
      }

      const t5 = this.elementComparisonMap(el1, el2);
      if (t5 !== 0) {
        return t5;
      }
      return 0;
    });

    return card;
  }
}
