import Controller from '@ember/controller';

export default class ShowController extends Controller {

  get abbreviation() {
    return this.model.abbreviation;
  }

  get cryptocurrencies() {
    return this.store.peekAll('cryptocurrency').fiilter(crypto => {
      return crypto.shortName === this.abbreviation;
    });
  }
}
