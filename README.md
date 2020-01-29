# react-formatted-string

A utility for replacing a string with a React component or another string.

## Installation

    npm install react-formatted-string

## Usage

### Single replacement

```javascript
import formattedString from "react-formatted-string";

const App = () => {
  const siteLink = formattedString(
    "Check out my {0}",
    <a href="https://google.com">website.</a>
  );

  return (
    <main>
      <h1>Hello World!</h1>
      <p>{siteLink}</p>
    </main>
  );
  /**
   * <main>
   *    <h1>Hello World!</h1>
   *    Check out my <a href="https://google.com">website.</a>
   * </main>
   */
};
```

### Multiple replacements

```javascript
import formattedString from "react-formatted-string";

const Pricing = () => {
  const price = formattedString(
    "Product Price: {0}{1}",
    "£310",
    <div className="promo">(or buy 2 for £550)</div>
  );

  return <div className="product-price">{price}</div>;
  /**
   * <div class="product-price">
   *    Product Price: £310<div class="promo">(or buy 2 for £550)
   * </div>
   */
};
```
