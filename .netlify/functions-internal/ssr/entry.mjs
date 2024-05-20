import { renderers } from './renderers.mjs';
import { manifest } from './manifest_bUCUheUv.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_Mk4s5DJh.mjs');
const _page1 = () => import('./chunks/fechas_DzzAuiLo.mjs');
const _page2 = () => import('./chunks/registro_D0rrKkQv.mjs');
const _page3 = () => import('./chunks/index_Bp81NdDx.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/fechas.astro", _page1],
    ["src/pages/registro.astro", _page2],
    ["src/pages/index.astro", _page3]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "6ca9c05f-dca2-4162-a0fd-dc546c5dee34"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
