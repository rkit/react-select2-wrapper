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
      data9: ['bug', 'feature', 'documents', 'discussion'],
      placeholder9: 'search by tags',
    };
  }

  example1() {
    const { value1 } = this.state;
    return (
      <div>
        Update `value`<br/>
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
          set `bug` `discussion` value
        </button>
      </div>
    );
  }

  example2() {
    const { value2 } = this.state;
    return (
      <div>
        Update mutated `value`<br/>
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
          add `documents` value
        </button>
      </div>
    );
  }

  example3() {
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
          set `documents` value
        </button>
      </div>
    );
  }

  example4() {
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

  example5() {
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

  example6() {
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

  example7() {
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

  example8() {
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

  example9() {
    const { placeholder9, data9 } = this.state;
    return (
      <div>
        Update Options<br/>
        <Select2
          multiple
          data={data9}
          options={
            {
              placeholder: placeholder9,
            }
          }
        />
        —
        <button onClick={() => this.setState({ placeholder9: 'test', data9: ['feature'] })}>
          set `placeholder` and `data`
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.example1()}<br/>
        {this.example2()}<br/>
        {this.example3()}<br/>
        {this.example4()}<br/>
        {this.example5()}<br/>
        {this.example6()}<br/>
        {this.example7()}<br/>
        {this.example8()}<br/>
        {this.example9()}<br/>
      </div>
    );
  }
}
