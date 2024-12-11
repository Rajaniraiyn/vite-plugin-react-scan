import type { IndexHtmlTransformHook, PluginOption } from 'vite';

export default function vitePluginReactScan(): PluginOption {

    const handler: IndexHtmlTransformHook = (html: string) => {
        return {
          html,
          tags: [
            {
              tag: 'script',
              attrs: {
                type: 'module',
                src: "https://unpkg.com/react-scan/dist/auto.global.js"
              },
              injectTo: 'body'
            }
          ]
        };
      }


  return {
    name: 'vite-plugin-react-scan',
    apply: 'serve',
    transformIndexHtml: {
        order: "post",
        handler: handler,

        // deprecated options
        // added for backwards compatibility
        enforce: 'post',
        transform: handler,
    }
  };
}