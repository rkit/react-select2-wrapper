# react-select2-wrapper

Wrapper for [Select2](https://select2.github.io/)

## Installation

```
npm install react-select2-wrapper --save
```

## Usage

```js
import Select2 from 'react-select2-wrapper';

<Select2
 multiple={true}
 data={['bug', 'feature', 'documents', 'discussion']}
 options={{
   placeholder: 'search by tags',
 }} />
```

With data as an object
```js
import Select2 from 'react-select2-wrapper';

<Select2
  multiple={false}
  data={[{text: 'bug', id: 1}, {text: 'feature', id: 2}, {text: 'documents', id: 3}, {text: 'discussion', id: 4}]}
  options={{
    placeholder: 'search by tags',
  }} />
```

With callbacks

```js
<Select2
 multiple={true}
 data={['bug', 'feature', 'documents', 'discussion']}
 onOpen={() => { console.log('onOpen'); } }
 onClose={() => { console.log('onClose'); } }
 onSelect={() => { console.log('onSelect'); } }
 onChange={() => { console.log('onChange'); } }
 onUnselect={() => { console.log('onUnselect'); } }
 options={{
   placeholder: 'search by tags',
 }} />
```

## Themes

Default theme in [css/select2.css](css/select2.css)

```js
import 'react-select2-wrapper/css/select2.css';
```

## Development

- Run webpack-dev-server
  ```
  npm run start
  ```

- Run webpack in watch mode
  ```
  npm run watch
  ```

- Run webpack for build
  ```
  npm run build
  ```
