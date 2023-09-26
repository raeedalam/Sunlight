export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/games.json","assets/images/amongus.png","assets/images/logo.png","assets/news.json","assets/themes/main.css","assets/themes.json","favicon.png","school/uv.bundle.js","school/uv.bundle.js.map","school/uv.client.js","school/uv.client.js.map","school/uv.config.js","school/uv.handler.js","school/uv.handler.js.map","school/uv.sw.js","school/uv.sw.js.map","sw.js"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".css":"text/css",".js":"application/javascript",".map":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.66516c99.js","app":"_app/immutable/entry/app.00698aad.js","imports":["_app/immutable/entry/start.66516c99.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.89419f7b.js","_app/immutable/entry/app.00698aad.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.42cf63c6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
