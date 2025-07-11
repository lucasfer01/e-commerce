// src/utils/sum.test.ts
// import { sum } from '../sum';

import { sum } from "../sum";

describe('sum', () => {
  it('suma correctamente dos números', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
