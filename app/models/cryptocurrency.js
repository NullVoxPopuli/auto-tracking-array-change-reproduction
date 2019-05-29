import DS from 'ember-data';
const { Model, attr } = DS;

export default class CryptocurrencyModel extends Model {
  @attr() name;
  @attr() shortName;
}
