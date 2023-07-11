import { createApp } from "vue";

/**
 * @description 加载所有plugins
 * @param {ReturnType<typeof createApp>} app 整个应用的实例
 */

export function loadAllPlugins(app: ReturnType<typeof createApp>): void {
    const files = require.context(".", true, /\.ts$/);
    files.keys().forEach((key: any) => {
        if (typeof files(key).default === "function") {
            if (key !== "./index.ts") {
                files(key).default(app);
            }
        }
    });
}
