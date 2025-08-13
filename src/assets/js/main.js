import { menu } from "./menu.js";
import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";

//윈도우가 로드되었을때 그떄 함수실행 메뉴를 실행 
window.addEventListener("load", function () {
    smooth();
    link();
    menu();
    port();
});