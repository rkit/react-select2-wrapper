import React, { Component } from 'react';
import Select2 from '../../../src/components/Select2';
import '../../../css/select2.css';

export default class Tags extends Component {
  render() {
    return (
      <div>
      Using ['value', 'value2']
        <Select2
          multiple={true}
          data={['bug', 'feature', 'documents', 'discussion']}
          onOpen={() => { console.log('onOpen'); } }
          onClose={() => { console.log('onClose'); } }
          onSelect={() => { console.log('onSelect'); } }
          onChange={() => { console.log('onChange'); } }
          onUnselect={() => { console.log('onUnselect'); } }
          options={{
            placeholder: 'search by tags',
          }} />
          <br/>
          <br/>
          Using {'{'}id: 'x', text:'foo'{'}'}
          <Select2
            multiple={false}
            data={[
              {text: 'Bug', id: 0},
              {text: 'Feature', id: 1},
              {text: 'Documents', id: 2},
              {text: 'Discussion', id: 'UUID'},
            ]}
            onOpen={() => { console.log('onOpen'); } }
            onClose={() => { console.log('onClose'); } }
            onSelect={() => { console.log('onSelect'); } }
            onChange={() => { console.log('onChange'); } }
            onUnselect={() => { console.log('onUnselect'); } }
            options={{
              placeholder: 'search by tags',
            }} />
      </div>
    );
  }
}
