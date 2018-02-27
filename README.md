# The better-Masonry

Fully customizable Masonry layout at your service.

## To use this package

**1. Add this to packgage.json of your project**

> $ "the-better-masonry":"git+https://github.com/sahusoftcom/the-better-masonry.git"

**2. Run the following command in your project directory**

> $ npm install

**3. How to use**

### #1 Page Switch Animation

> import Masonry from "the-better-masonry";

**PROPS**,

| Name               | Type            | Default | Description                                                                             |
| ------------------ | --------------- | ------- | --------------------------------------------------------------------------------------- |
| data               | array           |   []    | Input Data                                                                              |
| renderItem         | React Component | null    | React Component to render the item                                                      |
| noOfColumns        | number          |    1    | No of columns in Masonry                                                                |
| onEndReached       | function        | ()=>{}  | Called when list reaches the end of layout. Can be used to repopulate data or load more.|
| setOffset          | function        | ()=>{}  | returns the vertical scroll offset of the Masonry                                       |
| style              | style object    |   {}    | Styling for the entire Masonry                                                          |



```javascript
 <Masonry
    setOffset={y => (this.offsetY = y)}
    style={{ backgroundColor: this.state.backgroundColor }}
    noOfColumns={3}
    data={['Apple','Mango','Guava','Pineapple','Raisins','Grapes','Pomegranate']}
    renderItem={(item) => (<Text>{item}</Text>)}
  />
```
**note**
**always use odd number of items in the data array**

## Credits

[ReactNative](https://facebook.github.io/react-native/)
