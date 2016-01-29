import React, { Component } from 'react';
import Select2 from '../../../src/components/Select2';
import '../../../css/select2.css';

export default class Tags extends Component {
  render() {
    return (
      <div>
        Basic usage<br/>
        <Select2
          multiple
          data={['bug', 'feature', 'documents', 'discussion']}
          options={
            {
              placeholder: 'search by tags',
            }
          }
        />

        <br/><br/>

        With data as an object<br/>
        <Select2
          multiple={false}
          data={[
            { text: 'bug', id: 1 },
            { text: 'feature', id: 2 },
            { text: 'documents', id: 3 },
            { text: 'discussion', id: 4 },
          ]}
          options={{
            placeholder: 'search by tags',
          }}
        />

        <br/><br/>

        With callbacks<br/>
        <Select2
          multiple
          data={['bug', 'feature', 'documents', 'discussion']}
          onOpen={this.cbOpen}
          onClose={this.cbClose}
          onSelect={this.cbSelect}
          onChange={this.cbChange}
          onUnselect={this.cbUnselect}
          options={{
            placeholder: 'search by tags',
          }
        }
        />

        <br/><br/>

        With default value<br/>
        <Select2
          multiple={false}
          defaultValue={2}
          data={[
            { text: 'bug', id: 1 },
            { text: 'feature', id: 2 },
            { text: 'documents', id: 3, disabled: true },
            { text: 'discussion', id: 4 },
          ]}
          options={{
            placeholder: 'search by tags',
          }}
        />

        <br/><br/>

        With default multiple value<br/>
        <Select2
          multiple
          defaultValue={[1, 4]}
          data={[
            { text: 'bug', id: 1 },
            { text: 'feature', id: 2 },
            { text: 'documents', id: 3 },
            { text: 'discussion', id: 4 },
          ]}
          options={{
            placeholder: 'search by tags',
          }}
        />
      </div>
    );
  }
}
