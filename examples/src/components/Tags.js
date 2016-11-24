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
      value10: null,
      onChange10: () => {
        console.log('onChange');
      },
      data7: [
        { text: 'bug', id: 1 },
        { text: 'feature', id: 2 },
        { text: 'documents', id: 3 },
        { text: 'discussion', id: 4 },
      ],
      data9: ['bug', 'feature', 'documents', 'discussion'],
      data10: [
        { text: 'bug', id: 1 },
        { text: 'feature', id: 2 },
        { text: 'documents', id: 3 },
        { text: 'discussion', id: 4 },
      ],
      placeholder9: 'search by tags',
    };
  }

  example1() {
    const { value1 } = this.state;
    return (
      <div>
        Set `bug` `discussion`<br/>
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
          Update
        </button>
      </div>
    );
  }

  example2() {
    const { value2 } = this.state;
    return (
      <div>
        Set mutated `documents`<br/>
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
          Update
        </button>
      </div>
    );
  }

  example3() {
    const { value3 } = this.state;
    return (
      <div>
        Set `documents`<br/>
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
          Update
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
        Set a new data<br/>
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
          Update
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
        Set placeholder and a new data<br/>
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
        <button onClick={() => this.setState({
          placeholder9: 'test',
          data9: ['feature'],
        })}
        >
          Update
        </button>
      </div>
    );
  }

  example10() {
    const { value10, data10, onChange10 } = this.state;
    return (
      <div>
        Add a new item and set a new `onChange` event<br/>
        <Select2
          multiple={false}
          data={data10}
          defaultValue={ 1 }
          value={ value10 }
          onChange={onChange10}
          options={{
            placeholder: 'search by tags',
          }}
        />
        —
        <button onClick={() => this.setState({
          value10: 5,
          data10: [
            { text: 'bug', id: 1 },
            { text: 'feature', id: 2 },
            { text: 'documents', id: 3 },
            { text: 'discussion', id: 4 },
            { text: 'tester', id: 5 },
          ],
          onChange10: () => {
            console.log('onChange!');
          },
        })}
        >
          Update
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
        {this.example10()}<br/>
      </div>
    );
  }
}
