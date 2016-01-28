import React, { Component } from 'react';
import Select2 from '../../../src/components/Select2';
import '../../../css/select2.css';
import $ from 'jquery';
/* eslint react/jsx-no-bind: 0, arrow-spacing: 0 */
export default class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: ['feature'],
      value2: null,
    };
  }
  render() {
    const { value1, value2 } = this.state;
    return (
      <div>
        Basic usage<br/>
        <Select2
          multiple
          data={['bug', 'feature', 'documents', 'discussion']}
          value={ value1 }
          onChange={(e)=> {
            this.setState({ value1: $(e.target).val() });
          }}
          options={
            {
              placeholder: 'search by tags',
            }
          }
        />
        <button onClick={ ()=> this.setState({ value1: ['bug', 'discussion'] }) }>Set 'bug' 'discussion' value</button>
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
          defaultValue={ 1 }
          value={ value2 }
          onChange={ (e)=> {
            this.setState({ value2: +$(e.target).val() });
          }}
          options={{
            placeholder: 'search by tags',
          }}
        />
        <button onClick={ ()=> this.setState({ value2: 3 }) }>Set 'documents' value</button>
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
