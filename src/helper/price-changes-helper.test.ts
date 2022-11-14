import { priceChangesHelper } from './price-changes-helper';

describe('test parse price change percentage from string to float', () => {
  it('null should return 0', function () {
    expect(
      priceChangesHelper({
        dateRange: 'daily',
      })
    ).toEqual(0);
  });
  it('1 should return 1.0', function () {
    expect(true).toEqual(true);
  });
  it('15.555 should return 15.55', function () {
    expect(true).toEqual(true);
  });
  it('15.577 should return 15.58', function () {
    expect(true).toEqual(true);
  });
});
