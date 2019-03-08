# Guide

## Usage

### Basic usage

```js
import Select2 from 'react-select2-wrapper';
…

<Select2
  multiple
  data={['bug', 'feature', 'documents', 'discussion']}
  options={
    {
      placeholder: 'search by tags',
    }
  }
/>
```

### Data as an object

```js
<Select2
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
```

### Callbacks

```js
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
```

### Default value

```js
<Select2
  defaultValue={2} // or as string | array
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
```

### Default multiple value

```js
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
```

### Value

Also possible to change the current value using `value` property

```js
const { value } = this.props;
…
<Select2
  value={ value }
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
```

### Option Groups

```js
<Select2
  multiple
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
```

### Parent element for dropdown

```js
<Select2
  options={{
    dropdownParent: '#element'
  …
```

### Properties

You can pass any properties such as `class`, `id`, `data-*` attributes

```js
<Select2 className="selector" … />
```

### Access to select2

You can access to select2 as follows
```js
// assign a ref attribute
<Select2 ref="tags" />
// somewhere in your code, access via `this.refs`
this.refs.tags.el
```

### Full version

Some options are only available with [`Select2.full.js`](https://select2.org/getting-started/builds-and-modules).
To use that version instead:

```js
import Select2 from 'react-select2-wrapper/lib/components/Select2.full';
````

Everything else will be the same as before.

## Themes

Default theme in [css/select2.css](../css/select2.css)

```js
import 'react-select2-wrapper/css/select2.css';
```
