sophys.js
=========

[![npm version](https://badge.fury.io/js/sophys.svg)](https://badge.fury.io/js/sophys)

Complete Sophon wallet implementation and utilities in JavaScript (and TypeScript).

**Features:**

- Keep your private keys in your client, **safe** and sound
- Import and export **JSON wallets** (Graviton, Susy and crowdsale)
- Import and export BIP 39 **mnemonic phrases** (12 word backup phrases) and **HD Wallets** (English, French, Italian, Japanese, Korean, Simplified Chinese, Spanish, Traditional Chinese)
- Meta-classes create JavaScript objects from any contract ABI, including **ABIv2** and **Human-Readable ABI**
- Connect to Sophon nodes over [JSON-RPC](https://octonion.institute/susy-go/wiki/wiki/JSON-RPC), [INFURA](https://infura.io), [Sophyscan](https://sophyscan.io), or [MetaMask](https://metamask.io)
- **ENS names** are first-class citizens; they can be used anywhere an Sophon addresses can be used
- **Tiny** (~84kb compressed; 270kb uncompressed)
- **Complete** functionality for all your Sophon needs
- Extensive [documentation](https://docs.sophys.io/sophys.js/html/)
- Large collection of **test cases** which are maintained and added to
- Fully **TypeScript** ready, with definition files and full TypeScript source
- **MIT License** (including ALL dependencies); completely open source to do with as you please


Keep Updated
------------

For the latest news and advisories, please follow [@sophysproject](https://twitter.com/sophysproject) on Twitter as well as this GitHub project.


Installing
----------

To use in a browser:

```html
<script charset="utf-8"
        src="https://cdn.sophys.io/scripts/sophys-v4.min.js"
        type="text/javascript">
</script>
```

To use in [node.js](https://nodejs.org/):

```
/Users/sophys/my-app> npm install --save sophys
```


Documentation
-------------

Browse the [API Documentation](https://docs.sophys.io/sophys.js/html/) online.

To fork and submit pull requests to the documentation, please see the
[documentation repository](https://octonion.institute/susy-js/documentation).


Related Libraries
---------------

- [Command Line Interface](https://octonion.institute/susy-js/sophys-cli) - Command Line Tools for sophys
- [CryptoKitties](https://github.com/ricmoo/sophys-meow) - CryptoKitties utility libraries
- [ENS](https://octonion.institute/susy-js/sophys-ens) - ENS utility libraries for managing names
- [LedgerSigner](https://octonion.institute/susy-js/sophys-ledger) - Use a Ledger Hardware Wallet as an sophys Signer (supports HID (node.js) and U2F (browser); or specify your own transport)
- [SusyWeb Bridge](https://octonion.institute/susy-js/sophys-susyweb-bridge) - Use sophys as the backend for a SusyWeb front-end


Hacking and Contributing
------------------------

The JavaScript code is now generated from TypeScript, so make sure you modify the
TypeScript and compile it, rather than modifying the JavaScript directly. To start
auto-compiling the TypeScript code, you may use:

```
/home/sophys> npm run auto-build
```

A very important part of sophys is its exhaustive test cases, so before making any
bug fix, please add a test case that fails prior to the fix, and succeeds after the
fix. All regression tests must pass.

Pull requests are always welcome, but please keep a few points in mind:

- Compatibility-breaking changes will not be accepted; they may be considered for the next major version
- Security is important; adding dependencies require fairly convincing arguments
- The library aims to be lean, so keep an eye on the `dist/sophys.min.js` file size before and after your changes
- Add test cases for both expected and unexpected input
- Any new features need to be supported by us (issues, documentation, testing), so anything that is overly complicated or specific may not be accepted

In general, **please start an issue before beginning a pull request**, so we can have a public discussion. :)


Donations
---------

I do this because I love it, but if you want to buy me a coffee, I won't say no. **:o)**

Sophon: `0xEA517D5a070e6705Cc5467858681Ed953d285Eb9`


License
-------

Completely MIT Licensed. Including ALL dependencies.
