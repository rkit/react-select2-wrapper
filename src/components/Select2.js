import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'select2';
import shallowEqualFuzzy from 'shallow-equal-fuzzy';

export default class Select2 extends Component {
  static propTypes = {
    defaultValue: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.array,
      PropTypes.string,
    ]),
    value: PropTypes.oneOfType([
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
  };

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
  };

  constructor(props) {
    super(props);
    this.el = null;
  }

  componentDidMount() {
    this.initSelect2();
    this.props.events.forEach(event => {
      this.el.on(event[0], this.props[event[1]]);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.el && nextProps.value !== this.props.value) {
      this.setValue(nextProps.value);
    }
  }

  componentDidUpdate(prevProps) {
    if (!shallowEqualFuzzy(prevProps.data, this.props.data)) {
      this.destroySelect2();
      this.initSelect2();
    }
  }

  componentWillUnmount() {
    this.props.events.forEach(event => {
      this.el.off(event[0], this.props[event[1]]);
    });
    this.destroySelect2();
  }

  setValue(value) {
    const elVal = this.el.val();
    if (!shallowEqualFuzzy(elVal, value)) {
      this.el.val(value).trigger('change');
    }
  }

  initSelect2() {
    if (this.el) { return; }
    this.el = $(ReactDOM.findDOMNode(this));
    this.el.select2(this.props.options);
    const { defaultValue, value } = this.props;
    if (defaultValue === (void 0) && value !== (void 0)) {
      this.setValue(value);
    }
  }

  destroySelect2() {
    if (!this.el) { return; }
    this.el.select2('destroy');
    this.el = null;
  }

  isObject(value) {
    const type = typeof value;
    return type === 'function' || (value && type === 'object') || false;
  }

  render() {
    const { data, value, ...params } = this.props;
    return (
      <select {...params}>
        {data.map((item, k) => {
          if (this.isObject(item)) {
            const { id, text, ...itemParams } = item;
            return (<option key={`option-${k}`} value={id} {...itemParams}>{text}</option>);
          }

          return (<option key={`option-${k}`} value={item}>{item}</option>);
        })}
      </select>
    );
  }
}
