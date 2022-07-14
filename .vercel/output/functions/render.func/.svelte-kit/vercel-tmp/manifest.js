export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","images/netlify_deploy.png","images/netlify_env.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"immutable/start-8a2c8611.js","imports":["immutable/start-8a2c8611.js","immutable/chunks/index-bf1ed64f.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
