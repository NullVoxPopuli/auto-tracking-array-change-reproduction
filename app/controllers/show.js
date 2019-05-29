import Controller from '@ember/controller';

export default class ShowController extends Controller {

  get abbreviation() {
    return this.model.abbreviation;
  }

  // because this getter has a dependency on abbreviation,
  // and abbreviation has a dependency on the model,
  // and the model changes as the route changes,
  // this should get re-computed on route navigation, yeah?
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
