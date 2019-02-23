let defaultCity = '广州';
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {

}
//localStorage就是本地存储api，将数据本地存储起来
//如果用户关闭了本地存储的功能或者使用了隐身模式会导致程序抛出异常，所以我们要使用try{}catch
export default {
    city: defaultCity
}