import React from 'react';
import 'select2';

export default class Select2 extends React.Component {
  static propTypes = {
    data: React.PropTypes.array,
    events: React.PropTypes.array,
    options: React.PropTypes.object,
    multiple: React.PropTypes.bool,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onUnselect: React.PropTypes.func,
  }

  static defaultProps = {
    data: [],
    events: [
      ['change', 'onChange'],
      ['select2:open', 'onOpen'],
      ['select2:close', 'onClose'],
      ['select2:select', 'onSelect'],
      ['select2:unselect', 'onUnselect'],
    ],
    options: {},
    multiple: false,
  }

  constructor(props) {
    super(props);
    this.el = null;
  }

  componentDidMount() {
    this.el = $(React.findDOMNode(this));
    this.el.select2(this.props.options);

    this.props.events.forEach(event => {
      this.el.on(event[0], this.props[event[1]]);
    });
  }

  componentWillUnmount() {
    this.el.select2('destroy');
  }

  render() {
    return (
      <select multiple={this.props.multiple}>
        {this.props.data.map((item, k) => {
          return (<option key={'option-' + k}>{item}</option>);
        })}
      </select>
    );
  }
}
