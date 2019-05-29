import Route from '@ember/routing/route';

export default class ShowRoute extends Route {
  async model(params) {
    const abbreviation = params.id;

    return { abbreviation };
  }
}
