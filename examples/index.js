import React from 'react';
import Select2 from '../src/components/Select2';

React.render(
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
    }} />,
  document.getElementById('app')
);
