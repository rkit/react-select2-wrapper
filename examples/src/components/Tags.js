import React, { Component } from 'react';
import Select2 from '../../../src/components/Select2';
import '../../../css/select2.css';

export default class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: ['feature'],
      value2: null,
      data6: [
        { text: 'bug', id: 1 },
        { text: 'feature', id: 2 },
        { text: 'documents', id: 3 },
        { text: 'discussion', id: 4 },
      ],
    };

    this.changeExample1 = this.changeExample1.bind(this);
    this.changeExample2 = this.changeExample2.bind(this);
    this.changeExample6 = this.changeExample6.bind(this);
  }

  changeExample1() {
    this.setState({ value1: ['bug', 'discussion'] });
  }

  changeExample2() {
    this.setState({ value2: 3 });
  }

  changeExample6() {
    this.setState({ data6: [
      { text: 'bug_new', id: 1 },
      { text: 'feature_new', id: 2 },
      { text: 'documents_new', id: 3 },
      { text: 'discussion_new', id: 4 },
    ] });
  }

  cbOpen() {
    console.log('onOpen');
  }

  cbClose() {
    console.log('cbClose');
  }

  cbSelect() {
    console.log('cbSelect');
  }

  cbChange() {
    console.log('cbChange');
  }

  cbUnselect() {
    console.log('cbUnselect');
  }

  renderBasicUsage() {
    const { value1 } = this.state;
    return (
      <div>
        Basic usage<br/>
        <Select2
          multiple
          data={['bug', 'feature', 'documents', 'discussion']}
          value={ value1 }
          options={
            {
              placeholder: 'search by tags',
            }
          }
        />
        —
        <button onClick={this.changeExample1}>set 'bug' 'discussion' value</button>
      </div>
    );
  }

  renderDataAsObject() {
    const { value2 } = this.state;
    return (
      <div>
        Data as an object<br/>
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
          options={{
            placeholder: 'search by tags',
          }}
        />
        —
        <button onClick={this.changeExample2}>set 'documents' value</button>
      </div>
    );
  }

  renderCallbacks() {
    return (
      <div>
        Callbacks<br/>
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
      </div>
    );
  }

  renderDefaultValue() {
    return (
      <div>
        Default value<br/>
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
      </div>
    );
  }

  renderDefaultMultipleValue() {
    return (
      <div>
        Default multiple value<br/>
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

  renderDynamicUpdateData() {
    const { data6 } = this.state;
    return (
      <div>
        Dynamic update data<br/>
        <Select2
          defaultValue={1}
          data={ data6 }
          options={{
            placeholder: 'search by tags',
          }}
        />
        —
        <button onClick={this.changeExample6}>reload data value</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {/* example 1 */}
        {this.renderBasicUsage()}<br/>
        {/* example 2 */}
        {this.renderDataAsObject()}<br/>
        {/* example 3 */}
        {this.renderCallbacks()}<br/>
        {/* example 4 */}
        {this.renderDefaultValue()}<br/>
        {/* example 5 */}
        {this.renderDefaultMultipleValue()}<br/>
        {/* example 6 */}
        {this.renderDynamicUpdateData()}
      </div>
    );
  }
}
