import React from 'react';

import translate from '../translate/translate';
import {
  assetsPath,
} from '../actions/utils';

class Polling extends React.Component {
  constructor() {
    super();
    this.openExternalURL = this.openExternalURL.bind(this);
  }

  openExternalURL(url) {
    window.open(url, '_system');
  }

  render() {
    return (
      <div className="polling-wrapper" onClick={ () => this.openExternalURL('https://veruscoin.io')}>
        <img
          className="under-construction-image"
          src={ `${assetsPath.polling}/under_construction.svg` } />
        <div className="under-construction-text">
        { translate('POLLS.COMING_SOON') }
        </div>
        <div className="under-construction-link">https://veruscoin.io</div>
      </div>
    );
  }
}

export default Polling;

