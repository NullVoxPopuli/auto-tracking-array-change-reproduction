import Component, { tracked } from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class RecordCreatorComponent extends Component {
  @service store;

  @tracked name;
  @tracked shortName;

  @action save() {
    const record = this.store.createRecord('cryptocurrency', {
      name: this.name,
      shortName: this.shortName,
    });

    record.save();
  }
}
