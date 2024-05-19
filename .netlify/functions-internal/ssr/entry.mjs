import { renderers } from './renderers.mjs';
import { manifest } from './manifest_TNpm-TZN.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_BOO8rUvH.mjs');
const _page1 = () => import('./chunks/fechas_BfOUwhkL.mjs');
const _page2 = () => import('./chunks/registro_Ce-zwWOM.mjs');
const _page3 = () => import('./chunks/index_A4WTky5I.mjs');

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
    "middlewareSecret": "d7b1f23e-aceb-41fe-bdd1-c8861cf46ed0"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
