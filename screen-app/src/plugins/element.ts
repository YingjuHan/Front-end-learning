import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default function loadComponent(app: any) {
    app.use(ElementPlus, {
        size: "small",
        zIndex: 3000,
    });
}
