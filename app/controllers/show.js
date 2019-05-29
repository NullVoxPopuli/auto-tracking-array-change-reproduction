import Controller from '@ember/controller';

export default class ShowController extends Controller {

  get abbreviation() {
    return this.model.abbreviation;
  }

  get cryptocurrencies() {
    return this.store.peekAll('cryptocurrency').filter(crypto => {
      return crypto.shortName === this.abbreviation;
    });
  }

  get allRecords() {
    return this.store.peekAll('cryptocurrency');
  }

  get allShortNames() {
    return this.allRecords.map(crypto => crypto.shortName).join(', ');
  }
}
