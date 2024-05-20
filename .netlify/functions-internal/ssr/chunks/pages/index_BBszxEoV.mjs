/* empty css                           */
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_PAIvI_4S.mjs';
import 'kleur/colors';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import { $ as $$Image, a as $$Layout } from './fechas_CJ3epAoc.mjs';

const aloHero = new Proxy({"src":"/_astro/alo-hero.CGVLicEg.webp","width":1500,"height":1875,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USUARIO/Documents/XXX NOSE/a-site/src/assets/alo-hero.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "ASTON MARTIN F1 RACING", "pageDesc": "The official Aston Martin Aramco Formula One\xAE Team Store. Shop team and driver F1 merchandise, apparel, and accessories T-shirts, polos, caps, jackets and sweaters." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="mx-auto grid grid-cols-1 lg:grid-cols-2"> <div class="my-10 mx-auto text-center"> <h1 class="text-4xl font-bold">ASTON MARIN F1 RACING</h1> <h2 class="my-20 text-2xl uppercase">amr-24</h2> <p class="uppercase text-6xl mr-60 my-10">i / am</p> <p class="text-balance text-2md leading-loose">Become an I / AM member and get 10% off your first order, plus early access to exclusive product launches and releases.</p> <button class="bg-green-600 hover:bg-green-800 transition delay-200 rounded my-10 px-10 py-1"><a href="./registro">JOIN / AM</a></button> </div> <div> ${renderComponent($$result2, "Image", $$Image, { "src": aloHero, "width": 500, "alt": "hero", "class": "mx-auto" })} </div> </article> ` })}`;
}, "C:/Users/USUARIO/Documents/XXX NOSE/a-site/src/pages/index.astro", void 0);

const $$file = "C:/Users/USUARIO/Documents/XXX NOSE/a-site/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
