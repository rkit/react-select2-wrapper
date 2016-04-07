import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import shallowEqualFuzzy from 'shallow-equal-fuzzy';
import $ from 'jquery';
import 'select2';

const namespace = 'react-select2-wrapper';

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
      [`change.${namespace}`, 'onChange'],
      [`select2:open.${namespace}`, 'onOpen'],
      [`select2:close.${namespace}`, 'onClose'],
      [`select2:select.${namespace}`, 'onSelect'],
      [`select2:unselect.${namespace}`, 'onUnselect'],
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
  }

  componentWillReceiveProps(nextProps) {
    if (this.el && nextProps.value !== this.props.value) {
      this.setValue(nextProps.value);
    }
  }

  componentDidUpdate(prevProps) {
    if (!shallowEqualFuzzy(prevProps.data, this.props.data)) {
      this.destroySelect2(false);
      this.initSelect2(false);
    }

    const handlerChanged = e => prevProps[e[1]] !== this.props[e[1]];

    if (this.props.events.some(handlerChanged)) {
      this.detachEventHandlers();
      this.attachEventHandlers();
    }
  }

  componentWillUnmount() {
    this.destroySelect2();
  }

  setValue(value) {
    const elVal = this.props.multiple ? this.el.val() || [] : this.el.val();
    if (!shallowEqualFuzzy(elVal, value)) {
      this.el.val(value).trigger('change');
    }
  }

  initSelect2(withCallbacks = true) {
    if (this.el) { return; }
    const { defaultValue, value, options } = this.props;

    if (typeof options.dropdownParent === 'string') {
      options.dropdownParent = $(options.dropdownParent);
    }

    this.el = $(ReactDOM.findDOMNode(this));
    this.el.select2(options);

    if (withCallbacks) {
      this.attachEventHandlers();
    }

    if (typeof defaultValue === 'undefined' && typeof value !== 'undefined') {
      this.setValue(value);
    }
  }

  destroySelect2(withCallbacks = true) {
    if (!this.el) { return; }

    if (withCallbacks) {
      this.detachEventHandlers();
    }

    this.el.select2('destroy');
    this.el = null;
  }

  attachEventHandlers() {
    this.props.events.forEach(event => {
      if (typeof this.props[event[1]] !== 'undefined') {
        this.el.on(event[0], this.props[event[1]]);
      }
    });
  }

  detachEventHandlers() {
    this.props.events.forEach(event => {
      if (typeof this.props[event[1]] !== 'undefined') {
        this.el.off(event[0]);
      }
    });
  }

  isObject(value) {
    const type = typeof value;
    return type === 'function' || (value && type === 'object') || false;
  }

  makeOption(item, k) {
    if (this.isObject(item)) {
      const { id, text, ...itemParams } = item;
      return (<option key={`option-${k}`} value={id} {...itemParams}>{text}</option>);
    }

    return (<option key={`option-${k}`} value={item}>{item}</option>);
  }

  render() {
    const { data, value, ...params } = this.props;
    return (
      <select {...params}>
        {data.map((item, k) => {
          if (this.isObject(item) && this.isObject(item.children)) {
            const { children, text, ...itemParams } = item;
            return (
              <optgroup key={`optgroup-${k}`} label={text} {...itemParams}>
                {children.map((child, k2) => this.makeOption(child, `${k}-${k2}`))}
              </optgroup>
            );
          }
          return this.makeOption(item, k);
        })}
      </select>
    );
  }
}
