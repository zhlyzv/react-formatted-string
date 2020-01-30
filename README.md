# react-formatted-string

A safe and easy way to do string replacement with React components.

[![Netlify Status](https://api.netlify.com/api/v1/badges/306e7831-1a83-4973-b9ec-9bd22d26f7e6/deploy-status)](https://app.netlify.com/sites/agitated-kirch-d29104/deploys)

[Test coverage report](https://react-formatted-string.netlify.com/)

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
