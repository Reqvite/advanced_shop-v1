import {describe, expect, it} from 'vitest';
import {formateDate} from './formateDate';

const correctTestDate = '2024-06-19T08:15:21.066+00:00';
const correctReturnData = '19.06.2024';
const incorrectDate = '[]';
const incorrectReturnData = 'Invalid Date';

describe('formateDate helper test', () => {
  it('correct data', () => {
    const date = formateDate(correctTestDate);

    expect(date).toEqual(correctReturnData);
  });

  it('incorrect data', () => {
    const date = formateDate(incorrectDate);

    expect(date).toEqual(incorrectReturnData);
  });
});
