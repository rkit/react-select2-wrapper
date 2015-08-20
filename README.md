# React-Select2
React wrapper for [Select2](https://select2.github.io/)

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

Default theme in [src/css/select2.css](src/css/select2.css)

## Development

* Watch mode
  ```
  npm run watch
  ```

* Build for production
  ```
  npm run build
  ```
