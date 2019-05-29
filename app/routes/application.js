import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    const cryptos = await this.store.findAll('cryptocurrency');

    return { cryptos };
  }
}
