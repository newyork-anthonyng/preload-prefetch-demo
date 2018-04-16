# Using prefetch and preload to improve our webpage speed

``` html
<!-- index.html -->
<html>
    <head>
        <link href="./styles.css" rel="stylesheet" type="text/css" />
    </head>
</html>

<!-- styles.css-->
@import url('https://akama.hotwire.com/lato.woff');

body {
    font-family: Lato;
}
```

dns = 🔍
connect = 🔌
ssl = 👮

+----+----+----+----------------+
| 🔍 | 🔌 | 👮 | 📄 hotwire.com  |
+----+----+----+----------------+

                                +---------------------------+
                                | 🎨 hotwire.com/styles.css |
                                +---------------------------+

                                                            +----+----+----+--------------------------------+
                                                            | 🔍 | 🔌 | 👮 | 🖊️ akamai.hotwire.com/lato.woff |
                                                            +----+----+----+--------------------------------+

This is what our waterfall looks like. For each domain, our browser has to do a DNS search, Connect to the server, and then set up SSL. This can lead to very long waterfalls.

We can shorten our waterfalls by using a `prefetch`. 

+----+----+----+----------------+
| 🔍 | 🔌 | 👮 | 📄 hotwire.com  |
+----+----+----+----------------+

                                +---------------------------+
                                | 🎨 hotwire.com/styles.css |
                                +---------------------------+

                                +----+----+----+            +---------------------------------+
                                | 🔍 | 🔌 | 👮  |            | 🖊️ akamai.hotwire.com/lato.woff |
                                +----+----+----+            +---------------------------------+

# How does the code look like?
``` html
<html>
    <link href="akamai.hotwire.com" rel="preconnect" /> 
    <link href="./styles.css" rel="stylesheet" type="text/css" />
</html>
```

There are other options, such as `preload` where you know the name of the asset.

+----+----+----+----------------+
| 🔍 | 🔌 | 👮 | 📄 hotwire.com  |
+----+----+----+----------------+

                                +---------------------------+
                                | 🎨 hotwire.com/styles.css |
                                +---------------------------+

                                +----+----+----+---------------------------------+
                                | 🔍 | 🔌 | 👮  | 🖊️ akamai.hotwire.com/lato.woff |
                                +----+----+----+---------------------------------+

# Real Waterfall
[WebpageTest](https://www.webpagetest.org/result/180410_RQ_28bffb7761ca5a17071e157957cd3ac4/) for hotwire.com

![Waterfall from WebpageTest](./assets/waterfall.png)

By doing the connection to akamai.hotwire.com earlier, we may be able to finish loading faster.

![Edited Waterfall from WebpageTest](./assets/waterfall-edit.png)

If we do the Pre

# Browser support
[![caniuse - preconnect](./assets/caniuse-preconnect.png)](https://caniuse.com/#search=preconnect)
[![caniuse - preload](./assets/caniuse-preload.png)](https://caniuse.com/#search=preload)