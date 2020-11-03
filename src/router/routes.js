
// const home = ()=>import("@v/home")
import home from "@v/home"
/**
 * 在主框架内显示
 */
const frameIn = [
    {
        path: "/",
        name: "home",
        component: home
    }
];

/**
 * 在主框架之外显示
 */
const frameOut = [
    // 登录
    // {
    //     path: "login",
    //     name: "login",
    //     component: () => import("@v/login")
    // },
    // {
    //     path: "home",
    //     name: "home",
    //     component: () => import("@v/home")
    // }
];
//
// /**
//  * 错误页面
//  */
// const errorPage = [
//   {
//     path: "*",
//     name: "404",
//     component: _import("system/error/404")
//   }
// ]
//
// // 导出需要显示菜单的
// export const frameInRoutes = frameIn

// 重新组织后导出
export default [
    ...frameIn,
    ...frameOut
    // ...errorPage
];
