import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n	<meta charset="utf-8" />\r\n	<link rel="icon" href="' + assets2 + `/favicon.png" />\r
	<meta name="viewport" content="width=device-width" />\r
	<meta name="description" content="Abyss is the best and most modern proxy to avoid modern censorship." />\r
	<title>Abyss Web</title>\r
	<link rel="stylesheet" id="default-theme" href="/assets/themes/main.css" />\r
	<script>\r
		!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);\r
		posthog.init('phc_niHBevqccdX7ZeENxp040x2sk2OVDAQejmm0Au99sGn',{api_host:'/sf'})\r
	<\/script>\r
<!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-67GMJVRZLP"><\/script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-67GMJVRZLP'); <\/script>\r
\r
	<script>\r
		/* eslint-disable @typescript-eslint/no-this-alias */\r
		// OP TAB SYSTEM V2.0.0\r
		// CREDITS:\r
		// Code-Alt - Main Developer\r
\r
		// LICENSE:\r
		/*\r
\r
		Copyright (c) 2023 Code-Alt\r
		\r
		Permission is hereby granted, free of charge, to any person obtaining a copy\r
		of this software and associated documentation files (the "Software"), to deal\r
		in the Software without restriction, including without limitation the rights\r
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\r
		copies of the Software, and to permit persons to whom the Software is\r
		furnished to do so, subject to the following conditions:\r
\r
		The above copyright notice and this permission notice shall be included in\r
		all copies or substantial portions of the Software.\r
\r
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\r
		THE SOFTWARE.\r
\r
*/\r
\r
		// DOCS:\r
\r
		// here are some prerequisites:\r
		// you must have a tab container, a btn container, a tab template, and a btn template, and a search bar.\r
		// btw this might be hard to set up, set up your own classes and CSS until you find it satisfactory.\r
\r
		// new TabSystem() - Initializes the TabSystem class, used for holding all the information about the tab system, and it's functions.\r
		// TabSystem.addTab(tab) - Adds a tab to the tab system. Returns the tab.\r
		// TabSystem.getTabTemplate() - Returns the tab template.\r
		// TabSystem.getBtnTemplate() - Returns the tab button template.\r
		// TabSystem.createTabBtn(id) - Creates a tab button with the specified id. Returns the tab button.\r
		// TabSystem.createTabFrame(id) - Creates a tab frame with the specified id. Returns the tab frame.\r
		// TabSystem.setActiveTab(tab) - Sets the active tab to the specified tab.\r
		// TabSystem.getActiveTab() - Returns the active tab.\r
		// TabSystem.getTabs() - Returns all tabs.\r
		// TabSystem.getTabCount() - Returns the amount of tabs.\r
		// TabSystem.genRanId() - Generates a random id. Returns the id.\r
		// TabSystem.deleteTab(tab, force) - Deletes the specified tab. If force is true, it will delete the tab even if it's the last tab.\r
		// TabSystem.deleteTabs(tabs, force) - Deletes the specified tabs. If force is true, it will delete the tabs even if it's the last tab.\r
		// TabSystem.deleteAllTabs() - Deletes all tabs.\r
		// TabSystem.deleteAllTabsExcept(tab) - Deletes all tabs except the specified tab.\r
		// TabSystem.deleteAllTabsExceptThese(tabs) - Deletes all tabs except the specified tabs.\r
		// new Tab() - Initializes the Tab class, used for holding all the information about the tab frame and the button used to activate it.\r
		// Tab.getConnectedElement() - Returns the connected element.\r
		// Tab.getTabElement() - Returns the tab element.\r
		// Tab.setTabElement(tabElement) - Sets the tab element.\r
		// Tab.setConnectedElement(connectedElement) - Sets the connected element.\r
\r
		var dp = 'Starting Page';\r
		// eslint-disable-next-line @typescript-eslint/no-unused-vars\r
		var conf = {};\r
		var mainTS;\r
		var _OPTabSys_callbacks = {\r
			tabChange: [],\r
			tabAdd: [],\r
			tabDelete: []\r
		};\r
\r
		class TabSystem {\r
			constructor(object) {\r
				this.config = {\r
					tabContainer: object.tabContainer || document.getElementById('tabContainer'),\r
					tabTemplate: object.tabTemplate || document.getElementById('tabTemplate'),\r
					btnTemplate: object.btnTemplate || document.getElementById('btnTemplate'),\r
					tabBtnContainer: object.tabBtnContainer || document.getElementById('tabBtnContainer'),\r
					URLBar: object.URLBar || document.getElementById('adrbar'),\r
					tabActiveColor: object.tabActiveColor || '#484848',\r
					tabInactiveColor: object.tabInactiveColor || '#444444d2',\r
					defaultPlaceholder: object.defaultPlaceholder || 'Starting Page',\r
					closePlaceholder: object.closePlaceholder || 'No tab open'\r
				};\r
				conf = this.config;\r
				dp = this.config.defaultPlaceholder;\r
				this.tabs = [];\r
				this.tabCount = 0;\r
				this.activeTab = null;\r
				this.config.tabTemplate.style.display = 'none';\r
				this.config.btnTemplate.style.display = 'none';\r
				mainTS = this;\r
			}\r
\r
			on(event, callback) {\r
				switch (event) {\r
					case 'tabChange':\r
						if (_OPTabSys_callbacks == null) _OPTabSys_callbacks = {};\r
						if (_OPTabSys_callbacks.tabChange == null) _OPTabSys_callbacks.tabChange = [];\r
						_OPTabSys_callbacks.tabChange.push(callback);\r
						break;\r
					case 'tabAdd':\r
						if (_OPTabSys_callbacks == null) _OPTabSys_callbacks = {};\r
						if (_OPTabSys_callbacks.tabAdd == null) _OPTabSys_callbacks.tabAdd = [];\r
						_OPTabSys_callbacks.tabAdd.push(callback);\r
						break;\r
					case 'tabDelete':\r
						if (_OPTabSys_callbacks == null) _OPTabSys_callbacks = {};\r
						if (_OPTabSys_callbacks.tabDelete == null) _OPTabSys_callbacks.tabDelete = [];\r
						_OPTabSys_callbacks.tabDelete.push(callback);\r
						break;\r
					default:\r
						return console.error('Invalid event!');\r
				}\r
			}\r
\r
			addTab(tab) {\r
				this.tabs.push(tab);\r
				this.tabCount++;\r
				if (_OPTabSys_callbacks != null) {\r
					if (_OPTabSys_callbacks.tabAdd != null) {\r
						for (var i = 0; i < _OPTabSys_callbacks.tabAdd.length; i++) {\r
							_OPTabSys_callbacks.tabAdd[i](tab);\r
						}\r
					}\r
				}\r
				return tab;\r
			}\r
\r
			getTabTemplate() {\r
				return this.config.tabTemplate;\r
			}\r
\r
			getBtnTemplate() {\r
				return this.config.btnTemplate;\r
			}\r
\r
			createTabBtn(id) {\r
				const btn = this.getBtnTemplate().cloneNode(true);\r
				if (id == null) id = '';\r
				btn.id = id;\r
				btn.style = btn.style.toString().replace(/display:( )*none(;){0,1}/g, '');\r
				this.config.tabBtnContainer.appendChild(btn);\r
				return btn;\r
			}\r
\r
			createTabFrame(id) {\r
				const frame = this.getTabTemplate().cloneNode(true);\r
				if (id == null) id = '';\r
				frame.id = id;\r
				frame.style.display = 'none';\r
				this.config.tabContainer.appendChild(frame);\r
				return frame;\r
			}\r
\r
			setActiveTab(tab) {\r
				if (_OPTabSys_callbacks != null) {\r
					if (_OPTabSys_callbacks.tabChange != null) {\r
						for (var i = 0; i < _OPTabSys_callbacks.tabChange.length; i++) {\r
							_OPTabSys_callbacks.tabChange[i](tab);\r
						}\r
					}\r
				}\r
				if (!this.tabs.includes(tab) && tab != null) {\r
					this.addTab(tab);\r
				}\r
				if (this.activeTab != null) {\r
					this.activeTab.getConnectedElement().style.background = this.config.tabInactiveColor;\r
					this.activeTab.setSearchBarContent(this.config.URLBar.value);\r
					this.activeTab.setPlaceholder(this.config.URLBar.placeholder);\r
				}\r
				this.config.URLBar.value = '';\r
				if (tab != null && tab.getSearchBarContent()) {\r
					this.config.URLBar.value = tab.getSearchBarContent();\r
				}\r
				this.activeTab = tab;\r
				if (tab != null && this.activeTab.getPlaceholder()) {\r
					this.config.URLBar.placeholder = this.activeTab.getPlaceholder();\r
				}\r
				if (this.activeTab == null) {\r
					this.config.URLBar.placeholder = this.config.closePlaceholder;\r
				}\r
				for (var t = 0; t < this.tabs.length; t++) {\r
					if (this.tabs[t] == tab && tab != null) {\r
						if (this.tabs[t].tabElement != null) {\r
							this.tabs[t].tabElement.style.display = 'initial';\r
						}\r
						if (this.tabs[t].connectedElement != null) {\r
							this.tabs[t].connectedElement.style.backgroundColor = this.config.tabActiveColor;\r
						}\r
					} else {\r
						if (this.tabs[t].tabElement != null && tab != null) {\r
							this.tabs[t].tabElement.style.display = 'none';\r
						}\r
						if (this.tabs[t].connectedElement != null && tab != null) {\r
							this.tabs[t].connectedElement.style.backgroundColor = this.config.tabInactiveColor;\r
						}\r
					}\r
				}\r
			}\r
\r
			getActiveTab() {\r
				return this.activeTab;\r
			}\r
\r
			getTabs() {\r
				return this.tabs;\r
			}\r
\r
			getTabCount() {\r
				return this.tabCount;\r
			}\r
\r
			genRanId() {\r
				return Date.now() + Math.floor(Math.random() * 1000000000);\r
			}\r
\r
			deleteTab(tab, force) {\r
				for (var i = 0; i < this.tabs.length; i++) {\r
					if (this.tabs[i] == tab) {\r
						if (this.tabs[i] == this.activeTab) {\r
							if (this.tabs[i - 1] != null) {\r
								this.setActiveTab(this.tabs[i - 1]);\r
							} else if (this.tabs[i + 1] != null) {\r
								this.setActiveTab(this.tabs[i + 1]);\r
							} else {\r
								if (force != true) {\r
									return alert("You can't delete the last tab!");\r
								} else {\r
									this.setActiveTab(null);\r
								}\r
							}\r
						}\r
						this.tabs[i].connectedElement.remove();\r
						this.tabs[i].tabElement.remove();\r
						this.tabs.splice(i, 1);\r
						this.tabCount--;\r
						if (_OPTabSys_callbacks != null) {\r
							if (_OPTabSys_callbacks.tabDelete != null) {\r
								for (var tC = 0; tC < _OPTabSys_callbacks.tabDelete.length; tC++) {\r
									_OPTabSys_callbacks.tabDelete[tC](this.activeTab);\r
								}\r
							}\r
						}\r
						break;\r
					}\r
				}\r
			}\r
\r
			deleteTabs(tabs) {\r
				const tabsToDelete = tabs.slice();\r
				for (let i = 0; i < tabsToDelete.length; i++) {\r
					const tab = tabsToDelete[i];\r
					if (tab === this.activeTab) {\r
						if (this.tabs[i - 1]) {\r
							this.setActiveTab(this.tabs[i - 1]);\r
						} else if (this.tabs[i + 1]) {\r
							this.setActiveTab(this.tabs[i + 1]);\r
						} else {\r
							this.setActiveTab(null);\r
						}\r
					}\r
					tab.connectedElement.remove();\r
					tab.tabElement.remove();\r
					this.tabs.splice(this.tabs.indexOf(tab), 1);\r
					this.tabCount--;\r
				}\r
				if (_OPTabSys_callbacks?.tabDelete) {\r
					_OPTabSys_callbacks.tabDelete.forEach((callback) => callback(this.activeTab));\r
				}\r
			}\r
\r
			deleteAllTabs() {\r
				this.deleteTabs(this.tabs);\r
			}\r
\r
			deleteAllTabsExcept(tab) {\r
				const tabsToDelete = this.tabs.slice();\r
				tabsToDelete.splice(tabsToDelete.indexOf(tab), 1);\r
				this.deleteTabs(tabsToDelete);\r
			}\r
\r
			deleteAllTabsExceptThese(tabs) {\r
				const tabsToDelete = this.tabs.slice();\r
				tabsToDelete.forEach((tab) => {\r
					if (tabs.includes(tab)) {\r
						tabsToDelete.splice(tabsToDelete.indexOf(tab), 1);\r
					}\r
				});\r
				this.deleteTabs(tabsToDelete);\r
			}\r
\r
			getConfig() {\r
				return this.config;\r
			}\r
		}\r
\r
		class Tab {\r
			constructor(connectedElement, tabFrame, searchBarContent, placeholder) {\r
				this.connectedElement = connectedElement || mainTS.createTabBtn(mainTS.genRanId());\r
				this.tabElement = tabFrame || mainTS.createTabFrame(mainTS.genRanId());\r
				if (searchBarContent == null) searchBarContent = '';\r
				this.searchBarContent = searchBarContent;\r
				if (placeholder == null) placeholder = dp;\r
				this.placeholder = placeholder;\r
				this.connectedElement.addEventListener('click', () => {\r
					if (window.tryClose) {\r
						mainTS.deleteTab(this, window.allowForce);\r
						window.tryClose = false;\r
						return;\r
					}\r
					mainTS.setActiveTab(this);\r
				});\r
			}\r
\r
			getConnectedElement() {\r
				return this.connectedElement;\r
			}\r
\r
			getTabElement() {\r
				return this.tabElement;\r
			}\r
\r
			setTabElement(tabElement) {\r
				this.tabElement = tabElement;\r
			}\r
\r
			setConnectedElement(connectedElement) {\r
				this.connectedElement = connectedElement;\r
			}\r
\r
			setSearchBarContent(searchBarContent) {\r
				this.searchBarContent = searchBarContent;\r
			}\r
\r
			getSearchBarContent() {\r
				return this.searchBarContent;\r
			}\r
\r
			findFirstIFrame() {\r
				return this.tabElement.querySelector('iframe');\r
			}\r
\r
			hasIFrame() {\r
				if (this.findIFrame() != null) {\r
					return true;\r
				} else {\r
					return false;\r
				}\r
			}\r
\r
			setPlaceholder(placeholder) {\r
				this.placeholder = placeholder;\r
			}\r
\r
			getPlaceholder() {\r
				return this.placeholder;\r
			}\r
		}\r
\r
		window.TabSystem = TabSystem;\r
		window.Tab = Tab;\r
		window.allowForce = true;\r
	<\/script>\r
	` + head + `\r
</head>\r
\r
<body data-sveltekit-preload-data="hover">\r
	<script src="/school/uv.bundle.js"><\/script>\r
    <script src="/school/uv.config.js"><\/script>\r
	<script>\r
		navigator.serviceWorker.register("/sw.js", {\r
		scope: "/clas",\r
	  });\r
	<\/script>\r
	<script>\r
		class ThemeSystem {\r
			constructor() {\r
				this.config = {}; // is there even a need for this\r
				this.themes = [];\r
				this.themeCount = 0;\r
				this.activeTheme = null;\r
				this.lastTheme = null;\r
			}\r
\r
			getThemeFromName(name) {\r
				for (let i = 0; i < this.themes.length; i++) {\r
					if (this.themes[i].getName() == name) {\r
						return this.themes[i];\r
					}\r
				}\r
				return null;\r
			}\r
\r
			addTheme(theme) {\r
				for (let i = 0; i < this.themes.length; i++) {\r
					if (this.themes[i].getName() == theme.getName()) {\r
						console.error('A theme with the name ' + theme.getName() + ' already exists!');\r
						return;\r
					}\r
				}\r
				if (this.lastTheme != theme) {\r
					this.themes.push(theme);\r
					this.themeCount++;\r
				}\r
				return theme;\r
			}\r
\r
			setActiveTheme(theme) {\r
				if (this.activeTheme != null) {\r
					this.activeTheme.disable();\r
				}\r
				this.activeTheme = theme;\r
				this.activeTheme.apply();\r
			}\r
\r
			getActiveTheme() {\r
				return this.activeTheme;\r
			}\r
\r
			getThemes() {\r
				return this.themes;\r
			}\r
\r
			getThemeCount() {\r
				return this.themeCount;\r
			}\r
\r
			genRanId() {\r
				return (\r
					Math.random().toString(36).substring(2, 15) +\r
					Math.random().toString(36).substring(2, 15)\r
				);\r
			}\r
\r
			deleteTheme(theme) {\r
				if (this.themeCount > 1 || force == true) {\r
					for (let i = 0; i < this.themes.length; i++) {\r
						if (this.themes[i].id == theme.id) {\r
							this.themes.splice(i, 1);\r
							this.themeCount--;\r
							if (this.activeTheme.id == theme.id) {\r
								this.setActiveTheme(this.themes[0]);\r
							}\r
						}\r
					}\r
				}\r
			}\r
\r
			deleteThemes(themes) {\r
				if (this.themeCount > 1) {\r
					for (let i = 0; i < themes.length; i++) {\r
						this.deleteTheme(themes[i]);\r
					}\r
				}\r
			}\r
\r
			genCSS(css) {\r
				var style = document.createElement('style');\r
				style.innerHTML = css;\r
				style.disabled = true;\r
				document.head.appendChild(style);\r
				return style;\r
			}\r
\r
			genCSSFile(url, enabled) {\r
				for (let i = 0; i < this.themes.length; i++) {\r
					if (this.themes[i].getCSSElem() && this.themes[i].getCSSElem().href == url) {\r
						console.error('A theme with the url ' + url + ' already exists!');\r
						return;\r
					}\r
				}\r
				var link = document.createElement('link');\r
				link.rel = 'stylesheet';\r
				link.href = url;\r
				document.head.appendChild(link);\r
				link.disabled = true;\r
				if (enabled) link.disabled = false;\r
				return link;\r
			}\r
\r
			getConfig() {\r
				return this.config;\r
			}\r
		}\r
\r
		class Theme {\r
			constructor(elem, name) {\r
				if (typeof elem == 'object') {\r
					this.csselem = elem;\r
				} else {\r
					this.url = elem;\r
				}\r
				this.store = elem;\r
				this.name = name;\r
				// check for a duplicate theme\r
				for (let i = 0; i < tHs.getThemes().length; i++) {\r
					if (tHs.getThemes()[i].getName() == this.name) {\r
						console.error('A theme with the name ' + this.name + ' already exists!');\r
						delete this;\r
						return;\r
					}\r
				}\r
			}\r
\r
			apply() {\r
				if (typeof this.store == 'object') {\r
					this.csselem.disabled = false;\r
				} else {\r
					this.csselem = tHs.genCSSFile(this.url, true);\r
				}\r
			}\r
\r
			disable() {\r
				if (typeof this.store == 'object') {\r
					this.csselem.disabled = true;\r
				} else {\r
					this.csselem.remove();\r
					this.csselem = null;\r
				}\r
			}\r
\r
			setName(name) {\r
				this.name = name;\r
			}\r
\r
			getName() {\r
				return this.name;\r
			}\r
\r
			getURL() {\r
				return this.url;\r
			}\r
\r
			setURL(url) {\r
				this.url = url;\r
			}\r
\r
			getCSSElem() {\r
				return this.csselem;\r
			}\r
\r
			setCSSElem(elem) {\r
				this.csselem = elem;\r
			}\r
		}\r
\r
		window.tHs = new ThemeSystem();\r
\r
		var darkTheme = new Theme(document.getElementById('default-theme'), 'Abyss Default'); // this sucks\r
		tHs.addTheme(darkTheme);\r
		tHs.setActiveTheme(darkTheme);\r
		window.theme = localStorage.getItem('theme') || 'Abyss Default';\r
		function themeSwitch(sel) {\r
			tHs.setActiveTheme(tHs.getThemeFromName(sel.value));\r
			localStorage.setItem('theme', sel.value);\r
			document.querySelectorAll('select').forEach((e) => {\r
				e.value = sel.value;\r
			});\r
		}\r
		function handleAutocomplete(data) {\r
			var datalist = document.getElementById('autofill-results');\r
			datalist.innerHTML = '';\r
			data[1].forEach((element) => {\r
				var option = document.createElement('option');\r
				option.value = element;\r
				datalist.appendChild(option);\r
			});\r
		}\r
		const recordKeys = (elem, timeLimit) => {\r
			if (!elem) return;\r
			elem.placeholder = 'Press a key...';\r
			let oldPK = window.panicKeys;\r
			panicKeys = null;\r
			let savePush = [];\r
			let firstKeyHit = false;\r
			const removePanic = () => {\r
				savePush = null;\r
				document.removeEventListener('keydown', keydownHandler);\r
				document.removeEventListener('click', cancel);\r
				window.panicKeys = savePush;\r
				localStorage.setItem('panicKeys', savePush);\r
				elem.placeholder = "Removed Panic Keys";\r
			};\r
			const cancel = () => {\r
				document.removeEventListener('keydown', keydownHandler);\r
				document.removeEventListener('click', cancel);\r
				if (savePush.length == 0) {\r
					savePush = oldPK;\r
					elem.placeholder = 'Canceled Recording';\r
				}\r
				window.panicKeys = savePush;\r
				localStorage.setItem('panicKeys', JSON.stringify(savePush));\r
			};\r
			const keydownHandler = (e) => {\r
				if (e.key == "Escape") return removePanic();\r
				if (!firstKeyHit) {\r
					firstKeyHit = true;\r
					setTimeout(() => {\r
						cancel();\r
					}, timeLimit);\r
				}\r
				savePush.push(e.key);\r
				elem.placeholder = 'Selected Panic Keys: ' + savePush.join(' + ');\r
			};\r
			document.addEventListener('keydown', keydownHandler);\r
			const runAgain = () => {\r
				document.removeEventListener('click', runAgain);\r
				document.addEventListener('click', cancel);\r
			}\r
			document.addEventListener('click', runAgain);\r
		};\r
		const cloakTitle = (title) => {\r
			if (title.trim() == '') {\r
				title = 'Raeed';\r
			}\r
			document.title = title;\r
			localStorage.setItem('title', title);\r
		};\r
\r
\r
		let savedFavicon;\r
		if (document.querySelector("link[rel*='icon']")) {\r
			savedFavicon = document.querySelector("link[rel*='icon']").href;\r
		}\r
\r
		const cloakFavicon = (url) => {\r
			if (url.trim() == '') {\r
				url = savedFavicon;\r
			}\r
			let link = document.querySelector("link[rel*='icon']") || document.createElement('link');\r
			link.type = 'image/x-icon';\r
			link.rel = 'shortcut icon';\r
			link.href = url;\r
			document.getElementsByTagName('head')[0].appendChild(link);\r
			localStorage.setItem('favicon', url);\r
		};\r
\r
		const cloakURL = (url) => {\r
			if (url.trim() == '') {\r
				url = 'https://google.com';\r
			}\r
			if (/^:\\/{0,2}/.test(url)) {\r
				url = url.replace(/^:\\/{0,2}/, 'https://');\r
			}\r
			if (!isUrl(url)) {\r
				url = 'https://www.google.com/search?q=' + url;\r
			}\r
			if (!hasHttpPrefix(url)) {\r
				url = 'https://' + url;\r
			}\r
			window.panicURL = url;\r
			localStorage.setItem('panicURL', url);\r
		};\r
\r
		window.panicURL = localStorage.getItem('panicURL') || 'https://google.com';\r
		window.panicKeys = JSON.parse(localStorage.getItem('panicKeys')) || null;\r
\r
		// record keys and when one happens, listen for another in quick succession, and if it matches the array, redirect to panicURL\r
		let hitKeys = [];\r
		let hitKeyRetention = false;\r
		const keydownHandler = (e) => {\r
			if (window.panicKeys == null) return;\r
			if (!hitKeyRetention) {\r
				hitKeyRetention = true;\r
				setTimeout(() => {\r
					hitKeyRetention = false;\r
					hitKeys = [];\r
				}, 1000);\r
			}\r
			hitKeys.push(e.key);\r
			if (hitKeys.length >= window.panicKeys.length) {\r
				let hitKeysSet = new Set(hitKeys);\r
				let panicKeysSet = new Set(window.panicKeys);\r
				if (\r
					new Set([...hitKeysSet].filter((x) => panicKeysSet.has(x))).size === panicKeysSet.size\r
				) {\r
					window.open(window.panicURL);\r
				}\r
			}\r
		};\r
		document.addEventListener('keyup', keydownHandler);\r
\r
		if (localStorage.getItem('title')) {\r
			document.title = localStorage.getItem('title');\r
		}\r
\r
		if (localStorage.getItem('favicon')) {\r
			let link = document.querySelector("link[rel*='icon']") || document.createElement('link');\r
			link.type = 'image/x-icon';\r
			link.rel = 'shortcut icon';\r
			link.href = localStorage.getItem('favicon');\r
			document.getElementsByTagName('head')[0].appendChild(link);\r
		}\r
\r
		const updateGames = async () => {\r
			await fetch('/assets/games.json')\r
				.then((data) => data.json())\r
				.then((data) => {\r
					let allButton = document.createElement('button');\r
					allButton.innerText = 'All';\r
					allButton.className = 'all';\r
					allButton.title = 'All';\r
					document.querySelector('.gameCategoryButtons').appendChild(allButton);\r
					for (let i = 0; i < Object.keys(data).length; i++) {\r
						let category = Object.keys(data)[i];\r
						let categoryButton = document.createElement('button');\r
						categoryButton.innerText = category;\r
						categoryButton.className = category;\r
						categoryButton.title = category;\r
						document.querySelector('.gameCategoryButtons').appendChild(categoryButton);\r
						for (let j = 0; j < data[category].length; j++) {\r
							let game = data[category][j];\r
							let gameCard = createGameCard(game.name, game.image, game.url);\r
							gameCard.classList.add(category.toString());\r
							document.querySelector('.gameCategories').appendChild(gameCard);\r
						}\r
					}\r
				});\r
		};\r
\r
		const createGameCard = (name, image, url) => {\r
			let gC = document.getElementById('abyssCardTemplate')?.cloneNode(true);\r
			gC.removeAttribute('id');\r
			gC.style.display = 'inline-block';\r
			gC.querySelector('img').setAttribute('src', image);\r
			gC.querySelector('img').setAttribute('alt', name);\r
			gC.querySelector('h1').innerText = name;\r
			gC.querySelector('a').href = url;\r
			return gC;\r
		};\r
\r
		function isUrl(val = '') {\r
			if (\r
				/(https:\\/\\/www\\.|http:\\/\\/www\\.|https:\\/\\/|http:\\/\\/)?[a-zA-Z]{2,}(\\.[a-zA-Z]{2,})(\\.[a-zA-Z]{2,})?\\/[a-zA-Z0-9]{2,}|((https:\\/\\/www\\.|http:\\/\\/www\\.|https:\\/\\/|http:\\/\\/)?[a-zA-Z]{2,}(\\.[a-zA-Z]{2,})(\\.[a-zA-Z]{2,})?)|(https:\\/\\/www\\.|http:\\/\\/www\\.|https:\\/\\/|http:\\/\\/)?[a-zA-Z0-9]{2,}\\.[a-zA-Z0-9]{2,}\\.[a-zA-Z0-9]{2,}(\\.[a-zA-Z0-9]{2,})?/g.test(\r
					val\r
				)\r
			)\r
				return true;\r
			return false;\r
		}\r
		function hasHttpPrefix(val = '') {\r
			if (/^http(s?):\\/\\//.test(val)) return true;\r
			return false;\r
		}\r
		const runService = async (url) => {\r
			if (url.trim() == '') return;\r
			if (ts.getActiveTab() == null) {\r
				openNewtab();\r
			}\r
			ts.getActiveTab().getTabElement().querySelector('.mainStart').style.display = 'none';\r
			if (/^(abyss:)(\\/)*[a-z]*/.test(url)) {\r
				url = url.replace(/^(abyss:)(\\/)*/, '');\r
				document.getElementById('adrbar').value = '';\r
				switch (url) {\r
					case 'newtab':\r
						document.getElementById('adrbar').placeholder =\r
							ts.getConfig().defaultPlaceholder;\r
						if (ts.getActiveTab().getTabElement().querySelectorAll('.extFrame')) {\r
							ts.getActiveTab()\r
								.getTabElement()\r
								.querySelectorAll('.extFrame')\r
								.forEach(frame => {\r
									frame.remove();\r
								});\r
						}\r
						if (ts.getActiveTab().findFirstIFrame()) {\r
							ts.getActiveTab().findFirstIFrame().remove();\r
						}\r
						ts.getActiveTab().getTabElement().querySelector('.mainStart').style.display = 'initial';\r
						ts.getActiveTab().getConnectedElement().querySelector('span').innerText = 'New Tab';\r
						return;\r
					case 'games':\r
						document.getElementById('adrbar').placeholder =\r
							'Abyss Games (abyss://games)';\r
						if (ts.getActiveTab().getTabElement().querySelectorAll('.extFrame')) {\r
							ts.getActiveTab()\r
								.getTabElement()\r
								.querySelectorAll('.extFrame')\r
								.forEach(frame => {\r
									frame.remove();\r
								});\r
						}\r
						var extensionsTemplate = document\r
							.getElementById('games-temp')\r
							.cloneNode(true);\r
						extensionsTemplate.id = '';\r
						extensionsTemplate.style.display = 'initial';\r
						extensionsTemplate\r
							.querySelector('.gameCategoryButtons')\r
							.querySelectorAll('button')\r
							.forEach((btn) => {\r
								btn.addEventListener('click', () => {\r
									extensionsTemplate\r
										.querySelector('.gameCategoryButtons')\r
										.querySelectorAll('button')\r
										.forEach((btn) => {\r
											btn.style.background = '#111';\r
										});\r
									btn.style.background = '#212121';\r
									if (btn.className != 'all') {\r
										extensionsTemplate\r
											.querySelector('.gameCategories')\r
											.querySelectorAll('div')\r
											.forEach((elem) => {\r
												elem.style.display = 'none';\r
											});\r
										extensionsTemplate\r
											.querySelector('.gameCategories')\r
											?.querySelectorAll('.' + btn.className)\r
											.forEach((elem) => {\r
												elem.style.display = 'inline-block';\r
											});\r
									} else {\r
										extensionsTemplate\r
											.querySelector('.gameCategories')\r
											.querySelectorAll('div')\r
											.forEach((elem) => {\r
												elem.style.display = 'inline-block';\r
											});\r
									}\r
								});\r
							});\r
						let tb = extensionsTemplate.querySelector('.gameCategoryButtons');\r
						if (tb) {\r
							tb.addEventListener(\r
								'wheel',\r
								(evt) => {\r
									evt.preventDefault();\r
									if (evt.deltaY >= -15 && evt.deltaY <= 15 && tb) {\r
										tb.scrollLeft += evt.deltaY * 40;\r
									} else {\r
										if (!tb) return; // fuck off eslint\r
										tb.scrollLeft += evt.deltaY * 5;\r
									}\r
								},\r
								{ passive: false }\r
							);\r
						}\r
						ts.getActiveTab().getTabElement().appendChild(extensionsTemplate);\r
						ts.getActiveTab().getConnectedElement().querySelector('span').innerText = 'Games';\r
						return;\r
					case 'settings':\r
						document.getElementById('adrbar').placeholder =\r
							'Abyss Settings (abyss://settings)';\r
						if (ts.getActiveTab().getTabElement().querySelectorAll('.extFrame')) {\r
							ts.getActiveTab()\r
								.getTabElement()\r
								.querySelectorAll('.extFrame')\r
								.forEach(frame => {\r
									frame.remove();\r
								});\r
						}\r
						var settingsTemplate = document\r
							.getElementById('settings-temp')\r
							.cloneNode(true);\r
						settingsTemplate.id = '';\r
						settingsTemplate.style.display = 'initial';\r
						settingsTemplate.querySelector('#themeSelect').removeAttribute('id');\r
						ts.getActiveTab().getTabElement().appendChild(settingsTemplate);\r
						ts.getActiveTab().getConnectedElement().querySelector('span').innerText = 'Settings';\r
						return;\r
					default:\r
						if (ts.getActiveTab().getTabElement().querySelectorAll('.extFrame')) {\r
							ts.getActiveTab()\r
								.getTabElement()\r
								.querySelectorAll('.extFrame')\r
								.forEach((frame) => {\r
									frame.remove();\r
								});\r
						}\r
						var invalidMainTemplate = document\r
							.getElementById('invalid-temp')\r
							.cloneNode(true);\r
						invalidMainTemplate.id = '';\r
						invalidMainTemplate.style.display = 'initial';\r
						ts.getActiveTab().getTabElement().appendChild(invalidMainTemplate);\r
						ts.getActiveTab().getConnectedElement().querySelector('span').innerText = 'Invalid';\r
						return;\r
				}\r
			} else {\r
				if (ts.getActiveTab().getTabElement().querySelectorAll('.extFrame')) {\r
					ts.getActiveTab()\r
						.getTabElement()\r
						.querySelectorAll('.extFrame')\r
						.forEach((frame) => {\r
							frame.remove();\r
						});\r
				}\r
				if (/^:\\/{0,2}/.test(url)) {\r
					url = url.replace(/^:\\/{0,2}/, 'https://');\r
				}\r
				if (!isUrl(url)) {\r
					url = 'https://www.google.com/search?q=' + url;\r
				}\r
				if (!hasHttpPrefix(url)) {\r
					url = 'https://' + url;\r
				}\r
				document.getElementById('adrbar').value = '';\r
				document.getElementById('adrbar').placeholder = url;\r
				var iframe = document.createElement('iframe');\r
				iframe.src = '/class/' +  __uv$config.encodeUrl(url);\r
				iframe.className = 'extFrame';\r
				iframe.style.width = '100%';\r
				iframe.style.height = 'calc(100% - 133px)';\r
				iframe.style.border = 'none';\r
				iframe.style.background = '#111';\r
				ts.getActiveTab().getTabElement().appendChild(iframe);\r
				ts.getActiveTab().getConnectedElement().querySelector('span').innerText = 'Website';\r
			}\r
		};\r
	<\/script>\r
	<div style="display: contents">` + body + "</div>\r\n</body>\r\n\r\n</html>\r\n",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1g6p43f"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_public_env as c,
  set_assets as d,
  set_building as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_private_env as s
};
