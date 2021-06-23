# SushiSwap Interface

[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

An open source interface for SushiSwap -- a protocol for decentralized exchange of Ethereum tokens.

- Website: [sushi.com](https://sushi.com/)
- Interface: [app.sushi.com](https://app.sushi.com)
- Docs: [sushiswap.gitbook.io](https://sushiswap.gitbook.io)
- Twitter: [@SushiSwap](https://twitter.com/sushiswap)
- Reddit: [/r/SushiSwap](https://www.reddit.com/r/SushiSwap)
- Discord: [SushiSwap](https://discord.gg/Y7TF6QA)

## Accessing the SushiSwap Interface

To access the Sushiswap Interface, use an IPFS gateway link from the
[latest release](https://github.com/sushiswap/sushiswap-interface/releases/latest),
or visit [app.sushi.com](https://app.sushi.com).

## Listing a token

Please see the
[@sushiswap/default-token-list](https://github.com/sushiswap/default-token-list)
repository.

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

Note that the interface only works on networks where both
[(Uni|Sushi)swap V2](https://github.com/sushiswap/sushiswap/tree/master/contracts/uniswapv2) and
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Contributions

**Please open all pull requests against the `master` branch.**
CI checks will run against all PRs.


# Extension (LOGO & Banner)

### Logo
logo file in public/images. There are 4 files
  - apple-touch-icon.png (512x512)
  - favicon-16x16.png
  - favicon-32x32.png
  - logo-192x192.png
  - logo-512x512.png
### Main logo
- main logo. It's in `assets/images/logo.png (size perfer is 512x512)`
- in code file. It's in `src/components/AppBar.tsx (line 49)`
- SAKE banner is in `src/pages/Swap/index.tsx (lines 613-673)`

### Text config farm path
- `src/assets/farms` both v1 and v2 are this.
- `src/assets/farms/bkc`
- `src/assets/farms/bsc`
- `src/assets/farms/matic`
In code they is in `src/pages/Yield/hooks/`
- `src/pages/Yield/hooks/masterchefv1/useFarms.ts` for v1
- `src/pages/Yield/hooks/masterchefv2/useFarms.ts` for v2

