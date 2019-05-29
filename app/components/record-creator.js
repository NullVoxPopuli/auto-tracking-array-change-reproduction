import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default class RecordCreatorComponent extends Component {
  @service store;

  @tracked name;
  @tracked shortName;

  @action async save() {
    if (isEmpty(this.name) || isEmpty(this.shortName)) {
      console.error('gotta type in stuff');
      return;
    }

    const record = this.store.createRecord('cryptocurrency', {
      name: this.name,
      shortName: this.shortName,
    });

    await record.save();
    this.name = '';
    this.shortName = '';
    console.log('created', this.name, record);
  }
}
