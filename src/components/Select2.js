import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'select2';

export default class Select2 extends Component {
  static propTypes = {
    defaultValue: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.array,
      PropTypes.string,
    ]),
    data: PropTypes.array,
    events: PropTypes.array,
    options: PropTypes.object,
    multiple: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onSelect: PropTypes.func,
    onChange: PropTypes.func,
    onUnselect: PropTypes.func,
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
    this.el = $(ReactDOM.findDOMNode(this));
    this.el.select2(this.props.options);

    this.props.events.forEach(event => {
      this.el.on(event[0], this.props[event[1]]);
    });
  }

  componentWillUnmount() {
    this.el.select2('destroy');
  }

  render() {
    const { data, ...params } = this.props;

    return (
      <select {...params}>
        {data.map((item, k) => {
          if (typeof item === 'string' ||
            ((!!item && typeof item === 'object') && Object.prototype.toString.call(item) === '[object String]')) {
            return (<option key={'option-' + k} value={item}>{item}</option>);
          }
          return (<option key={'option-' + k} value={item.id}>{item.text}</option>);
        })}
      </select>
    );
  }
}
