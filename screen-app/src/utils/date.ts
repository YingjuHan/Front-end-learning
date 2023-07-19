import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");
moment.suppressDeprecationWarnings = true; // 禁用弃用警告

const weeks = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
];

function getWeekByData(date: Date): string {
    const weekIndex = date.getDay();
    return weeks[weekIndex];
}

export function getCurDatetime(): string {
    return (
        moment().format("YYYY-MM-DD") +
        " " +
        getWeekByData(new Date()) +
        " " +
        moment().format("HH:mm:ss")
    );
}
