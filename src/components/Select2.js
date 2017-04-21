import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.forceUpdateValue = false;
    this.initialRender = true;
  }

  componentDidMount() {
    this.initSelect2(this.props);
    this.updateValue();
  }

  componentWillReceiveProps(nextProps) {
    this.initialRender = false;
    this.updSelect2(nextProps);
  }

  componentDidUpdate() {
    this.updateValue();
  }

  componentWillUnmount() {
    this.destroySelect2();
  }

  initSelect2(props) {
    const { options } = props;

    this.el = $(ReactDOM.findDOMNode(this));
    // fix for updating selected value when data is changing
    if (this.forceUpdateValue) {
      this.updateSelect2Value(null);
    }
    this.el.select2(this.prepareOptions(options));
    this.attachEventHandlers(props);
  }

  updSelect2(props) {
    const prevProps = this.props;

    if (!shallowEqualFuzzy(prevProps.data, props.data)) {
      this.forceUpdateValue = true;
      this.destroySelect2(false);
      this.initSelect2(props);
      return;
    }

    const { options } = props;
    if (!shallowEqualFuzzy(prevProps.options, options)) {
      this.el.select2(this.prepareOptions(options));
    }

    const handlerChanged = e => prevProps[e[1]] !== props[e[1]];
    if (props.events.some(handlerChanged)) {
      this.detachEventHandlers();
      this.attachEventHandlers(props);
    }
  }

  updateSelect2Value(value) {
    this.el.off(`change.${namespace}`).val(value).trigger('change');

    const onChange = this.props.onChange;
    if (onChange) {
      this.el.on(`change.${namespace}`, onChange);
    }
  }

  updateValue() {
    const { value, defaultValue, multiple } = this.props;
    const newValue = this.prepareValue(value, defaultValue);
    const currentValue = multiple ? this.el.val() || [] : this.el.val();

    if (!this.fuzzyValuesEqual(currentValue, newValue) || this.forceUpdateValue) {
      this.updateSelect2Value(newValue);
      if (!this.initialRender) {
        this.el.trigger('change');
      }
      this.forceUpdateValue = false;
    }
  }

  fuzzyValuesEqual(currentValue, newValue) {
    return (currentValue === null && newValue === '') ||
      shallowEqualFuzzy(currentValue, newValue);
  }

  destroySelect2(withCallbacks = true) {
    if (withCallbacks) {
      this.detachEventHandlers();
    }

    this.el.select2('destroy');
    this.el = null;
  }

  attachEventHandlers(props) {
    props.events.forEach(event => {
      if (typeof props[event[1]] !== 'undefined') {
        this.el.on(event[0], props[event[1]]);
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

  prepareValue(value, defaultValue) {
    const issetValue = typeof value !== 'undefined' && value !== null;
    const issetDefaultValue = typeof defaultValue !== 'undefined';

    if (!issetValue && issetDefaultValue) {
      return defaultValue;
    }
    return value;
  }

  prepareOptions(options) {
    const opt = options;
    if (typeof opt.dropdownParent === 'string') {
      opt.dropdownParent = $(opt.dropdownParent);
    }
    return opt;
  }

  isObject(value) {
    const type = typeof value;
    return type === 'function' || (value && type === 'object') || false;
  }

  makeOption(item) {
    if (this.isObject(item)) {
      const { id, text, ...itemParams } = item;
      return (<option key={`option-${id}`} value={id} {...itemParams}>{text}</option>);
    }

    return (<option key={`option-${item}`} value={item}>{item}</option>);
  }

  render() {
    const { data, value, ...props } = this.props;

    delete props.options;
    delete props.events;
    delete props.onOpen;
    delete props.onClose;
    delete props.onSelect;
    delete props.onChange;
    delete props.onUnselect;

    return (
      <select {...props}>
        {data.map((item, k) => {
          if (this.isObject(item) && this.isObject(item.children)) {
            const { children, text, ...itemParams } = item;
            return (
              <optgroup key={`optgroup-${k}`} label={text} {...itemParams}>
                {children.map((child) => this.makeOption(child))}
              </optgroup>
            );
          }
          return this.makeOption(item);
        })}
      </select>
    );
  }
}
