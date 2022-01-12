import { RichContentSorter } from '../../../src/helperClasses';
import { Channels } from '../../../src';

describe('RichContentSorter Unit tests', () => {
  test('Random Sorting Tests to ensure sorting functionality', () => {
    const sorter = new RichContentSorter({ channel: Channels.WEB });

    const unsortedCard1 = {
      type: 'vertical',
      elements: [
        { type: 'button' },
        { type: 'vertical', elements: [] },
        { type: 'text' },
        { type: 'vertical', elements: [] },
        { type: 'image' },
        { type: 'vertical', elements: [] },
        { type: 'button' },
        { type: 'vertical', elements: [] },
        { type: 'horizontal', elements: [] },
        { type: 'vertical', elements: [] },
        { type: 'map' },
      ],
    };
    const unsortedCard2 = {
      type: 'vertical',
      elements: [{ type: 'map' }, { type: 'vertical', elements: [] }, { type: 'text' }, { type: 'vertical', elements: [] }],
    };
    const unsortedCard3 = {
      type: 'vertical',
      elements: [
        { type: 'button' },
        { type: 'horizontal', elements: [] },
        { type: 'text' },
        { type: 'horizontal', elements: [] },
        { type: 'image' },
        { type: 'horizontal', elements: [] },
        { type: 'button' },
        { type: 'horizontal', elements: [] },
        { type: 'map' },
      ],
    };

    const unsortedCard4 = {
      type: 'vertical',
      elements: [
        { type: 'map' },
        { type: 'horizontal', elements: [] },
        { type: 'image' },
        { type: 'horizontal', elements: [] },
        { type: 'horizontal', elements: [] },
        { type: 'image' },
      ],
    };

    const unsortedCard5 = {
      type: 'vertical',
      elements: [{ type: 'image' }, { type: 'horizontal', elements: [] }],
    };

    const result1 = sorter.sortBody(unsortedCard1);
    const result2 = sorter.sortBody(unsortedCard2);
    const result3 = sorter.sortBody(unsortedCard3);
    const result4 = sorter.sortBody(unsortedCard4);
    const result5 = sorter.sortBody(unsortedCard5);

    const expectedResult1 = {
      elements: [
        {
          type: 'image',
        },
        {
          type: 'map',
        },
        {
          type: 'text',
        },
        {
          type: 'button',
        },
        {
          type: 'button',
        },
        {
          elements: [],
          type: 'horizontal',
        },
        {
          elements: [],
          type: 'vertical',
        },
        {
          elements: [],
          type: 'vertical',
        },
        {
          elements: [],
          type: 'vertical',
        },
        {
          elements: [],
          type: 'vertical',
        },
        {
          elements: [],
          type: 'vertical',
        },
      ],
      type: 'vertical',
    };
    const expectedResult2 = {
      type: 'vertical',
      elements: [{ type: 'map' }, { type: 'text' }, { type: 'vertical', elements: [] }, { type: 'vertical', elements: [] }],
    };
    const expectedResult3 = {
      type: 'vertical',
      elements: [
        { type: 'image' },
        { type: 'map' },
        { type: 'text' },
        { type: 'button' },
        { type: 'button' },
        { type: 'horizontal', elements: [] },
        { type: 'horizontal', elements: [] },
        { type: 'horizontal', elements: [] },
        { type: 'horizontal', elements: [] },
      ],
    };
    const expectedResult4 = {
      type: 'vertical',
      elements: [
        { type: 'image' },
        { type: 'image' },
        { type: 'map' },
        { type: 'horizontal', elements: [] },
        { type: 'horizontal', elements: [] },
        { type: 'horizontal', elements: [] },
      ],
    };
    const expectedResult5 = { type: 'vertical', elements: [{ type: 'image' }, { type: 'horizontal', elements: [] }] };

    expect(result1).toEqual(expectedResult1);
    expect(result2).toEqual(expectedResult2);
    expect(result3).toEqual(expectedResult3);
    expect(result4).toEqual(expectedResult4);
    expect(result5).toEqual(expectedResult5);
  });
});
