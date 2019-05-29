import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NavigationComponent extends Component {
  @service router;

  @tracked shortName = '';

  @action go() {
    this.router.transitionTo('show', { id: this.shortName });
    this.shortName = '';
  }
}
