import React, { Component } from 'react';
import Select2 from '../../../src/components/Select2';
import '../../../css/select2.css';

export default class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: ['feature'],
      value2: ['feature'],
      value3: null,
      data7: [
        { text: 'bug', id: 1 },
        { text: 'feature', id: 2 },
        { text: 'documents', id: 3 },
        { text: 'discussion', id: 4 },
      ],
    };
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
        <button onClick={() => this.setState({ value1: ['bug', 'discussion'] })}>
          set 'bug' 'discussion' value
        </button>
      </div>
    );
  }

  renderBasicUsageMutated() {
    const { value2 } = this.state;
    return (
      <div>
        Basic usage with mutated value<br/>
        <Select2
          multiple
          data={['bug', 'feature', 'documents', 'discussion']}
          value={ value2 }
          options={
            {
              placeholder: 'search by tags',
            }
          }
        />
        —
        <button onClick={
          () => {
            const items = value2;
            items.push('documents');
            this.setState({ value2: items });
          }}
        >
          set 'feature' 'documents' value
        </button>
      </div>
    );
  }

  renderDataAsObject() {
    const { value3 } = this.state;
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
          value={ value3 }
          options={{
            placeholder: 'search by tags',
          }}
        />
        —
        <button onClick={() => this.setState({ value3: 3 })}>
          set 'documents' value
        </button>
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
          onOpen={() => console.log('onOpen')}
          onClose={() => console.log('onClose')}
          onSelect={() => console.log('onSelect')}
          onChange={() => console.log('onChange')}
          onUnselect={() => console.log('onUnselect')}
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
    const { data7 } = this.state;
    return (
      <div>
        Dynamic update data<br/>
        <Select2
          defaultValue={1}
          data={ data7 }
          options={{
            placeholder: 'search by tags',
          }}
        />
        —
        <button onClick={() => this.setState({
          data7: [
            { text: 'bug_new', id: 1 },
            { text: 'feature_new', id: 2 },
            { text: 'documents_new', id: 3 },
            { text: 'discussion_new', id: 4 },
          ],
        })}
        >
          reload data value
        </button>
      </div>
    );
  }

  renderOptGroups() {
    return (
      <div>
        Option Groups<br/>
        <Select2
          multiple
          defaultValue={[1, 4]}
          data={[
            { text: 'Development',
              children: [
                { text: 'bug', id: 1 },
                { text: 'feature', id: 2 },
              ],
            },
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


  render() {
    return (
      <div>
        {/* example 1 */}
        {this.renderBasicUsage()}<br/>
        {/* example 2 */}
        {this.renderBasicUsageMutated()}<br/>
        {/* example 3 */}
        {this.renderDataAsObject()}<br/>
        {/* example 4 */}
        {this.renderCallbacks()}<br/>
        {/* example 5 */}
        {this.renderDefaultValue()}<br/>
        {/* example 6 */}
        {this.renderDefaultMultipleValue()}<br/>
        {/* example 7 */}
        {this.renderDynamicUpdateData()}<br/>
        {/* example 8 */}
        {this.renderOptGroups()}
      </div>
    );
  }
}
