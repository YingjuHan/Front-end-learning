import ElementPlus from "element-plus";
import 'element-plus/theme-chalk/src/index.scss'//引入样式

 // eslint-disable-next-line
export default function loadComponent(app: any): void {
    app.use(ElementPlus, {
        size: "small",
        zIndex: 3000,
    });
}
