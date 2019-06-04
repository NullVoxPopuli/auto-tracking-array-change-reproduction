import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    const cryptos = [];

    cryptos.push(this.store.createRecord('cryptocurrency', {
      shortName: 'ETH',
      name: 'Ethereum'
    }));

    cryptos.push(this.store.createRecord('cryptocurrency', {
      shortName: 'BTC',
      name: 'Bitcoin'
    }));

    cryptos.push(this.store.createRecord('cryptocurrency', {
      shortName: 'TRX',
      name: 'Tron'
    }));

    cryptos.push(this.store.createRecord('cryptocurrency', {
      shortName: 'BCH',
      name: 'Bitcoin Cash'
    }));

    return { cryptos };
  }
}
