# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## To update

Whenever you want to update anything in this repo you have to run these commands:

```
npm run build
npm run deploy
```

The `npm run deploy` will push the results to the `gh-pages` branch which will update the page as you see it.

# To host with Cloudflare

https://akashml.com

## GH repo config

1. Navigate to the repo Settings -> [Pages](https://github.com/andy108369/akashML/settings/pages)
2. Build and deployment:
Source: `Deploy from a branch`
Branch: `gh-pages`, `/ (root)`

3. Custom domain: `akashml.com` (re-do it if you change DNS records)

## Cloudflare config

> Use TLS Full (NO strict) SSL/TLS Cloudflare setting
> Use **Proxied** `Proxy status` for both DNS records

- Point CNAME akashml.com to andy108369.github.io
- Point CNAME www to andy108369.github.io
