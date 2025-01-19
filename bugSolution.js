To fix this issue, ensure that the `keyExtractor` function always returns a unique key for each item in the data array. Here's how you can modify the code to use UUIDs for unique keys:

```javascript
import { v4 as uuidv4 } from 'uuid';

const data = [ 
  { id: uuidv4(), name: 'Item 1' }, 
  { id: uuidv4(), name: 'Item 2' }, 
  { id: uuidv4(), name: 'Item 3' } 
];

<FlatList
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

Alternatively, if your data already has a unique identifier, ensure you're using that property correctly in the `keyExtractor`.  If not, generate a unique identifier during data processing before passing it to the FlatList.