# Using preconnect and preload to improve our webpage speed

> Look at the `demo` directory for an example using `preload`

Let's take a look at a basic HTML page. There is an HTML file, a CSS file, and a request to a font file hosted on akamai.

``` html
<!-- index.html -->
<html>
    <head>
        <link href="./styles.css" rel="stylesheet" type="text/css">
    </head>
</html>
```

``` css
/* styles.css */
@import url('https://akamai.hotwire.com/lato.woff');

body {
    font-family: Lato;
}
```

Let's look at the network waterfall for this webpage.

| Term | Symbol |
| --- | --- |
| dns | 🔍 |
|connect | 🔌 |
| ssl | 👮 |

![Basic waterfall](./assets/carbon-1.png)

For each domain, our browser does a DNS search, connects to the server, and sets up a secure connection. This can lead to very long waterfalls.

We can shorten our waterfalls by using a `preconnect`. 

![Waterfall with preconnect](./assets/carbon-2.png)

# What does the code look like?

``` html
<html>
    <link href="akamai.hotwire.com" rel="preconnect" /> 
    <link href="./styles.css" rel="stylesheet" type="text/css" />
</html>
```

There are other options, such as `preload` where you know the name of the asset.

![Waterfall with preload](./assets/carbon-3.png)

# Real Waterfall
[WebpageTest](https://www.webpagetest.org/result/180410_RQ_28bffb7761ca5a17071e157957cd3ac4/) for hotwire.com

![Waterfall from WebpageTest](./assets/waterfall.png)

By doing the connection to `akamai` earlier, we should be able to finish loading our page faster.

![Edited Waterfall from WebpageTest](./assets/waterfall-edit.png)

# Browser support
[![caniuse - preconnect](./assets/caniuse-preconnect.png)](https://caniuse.com/#search=preconnect)
[![caniuse - preload](./assets/caniuse-preload.png)](https://caniuse.com/#search=preload)