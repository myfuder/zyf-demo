function dataFormat(avg) {
    return (avg && avg.isNaN) || avg === "NaN" || avg === undefined||avg === null
        ? "--"
        : avg;
}

function shallowCopy(objOrArr) {
    var type = objOrArr instanceof Array ? "arr" : "obj";
    var newObjOrArr = objOrArr instanceof Array ? [] : {};
    if (type === "arr") {
        newObjOrArr = JSON.parse(JSON.stringify(objOrArr));
    } else {
        for (var key in objOrArr) {
            if (objOrArr.hasOwnProperty(key)) {
                newObjOrArr[key] =
                    typeof objOrArr[key] === "object"
                        ? shallowCopy(objOrArr[key])
                        : objOrArr[key];
            }
        }
    }
    return newObjOrArr;
}
//防抖函数
function debounce(fn, wait) {
    var timeout = null;
    return function() {
        const context = this;
        const args = arguments;
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(function() {
            fn.apply(context, args);
        }, wait);
    };
}
//节流函数
function throttle(func, delay) {
    var timer = null;
    var startTime = Date.now();
    return function() {
        var curTime = Date.now();
        var remaining = delay - (curTime - startTime);
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        if (remaining <= 0) {
            func.apply(context, args);
            startTime = Date.now();
        } else {
            timer = setTimeout(func, remaining);
        }
    };
}
function loadMap() {
    return new Promise(function(resolve, reject) {
        if (window.AMap) {
            resolve(window.AMap);
        } else {
            let script = document.createElement("script");
            script.type = "text/javascript";
            script.src =
                "//webapi.amap.com/maps?v=1.4.15&key=d6fb3c04f9ff8f5866af4a443d55e960";
            script.onerror = reject;
            script.onload = function() {
                resolve(window.AMap);
            };
            document.head.appendChild(script);
        }
    }).then(avg => {
        return new Promise(function(resolve, reject) {
            if (window.AMapUI) {
                resolve([avg, window.AMapUI]);
            } else {
                let script2 = document.createElement("script");
                script2.type = "text/javascript";
                script2.src = "//webapi.amap.com/ui/1.0/main.js?v=1.0.11";
                script2.onerror = reject;
                script2.onload = function() {
                    resolve([avg, window.AMapUI]);
                };
                document.head.appendChild(script2);
            }
        });
    });
}
/**
 * 获取本地存储数据
 * @returns {any}
 */
function fetch(key) {
    return JSON.parse(window.sessionStorage.getItem(key));
}

/**
 * 向本地写入数据
 * @param items
 */
function save(key, items) {
    window.sessionStorage.setItem(key, JSON.stringify(items));
}
//中国标准时间转为指定格式日期 fmt为格式可为“yyyy-mm-dd" date为中国标准时间
function dateFtt(fmt, date) {
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                    ? o[k]
                    : ("00" + o[k]).substr(("" + o[k]).length)
            );
    return fmt;
}
// 对象转为formdata格式
function objectToFormData(obj, form, namespace) {
    var fd = form || new FormData();
    var formKey;
    if (obj instanceof Array) {
        var baseType = false;
        for (var item of obj) {
            if (!(typeof item === "object" && !(item instanceof File))) {
                baseType = true;
                break;
            }
        }
        if (baseType) {
            fd[namespace] = obj.join(",");
        } else {
            var i = 0;
            for (var item of obj) {
                if (typeof item === "object" && !(item instanceof File)) {
                    this.objectToFormData(item, fd, namespace + "[" + i + "]");
                } else {
                    fd.append(namespace + "[" + i + "]", obj);
                    fd[namespace + "[" + i + "]"] = obj;
                }
                i++;
            }
        }
    } else {
        for (var property in obj) {
            if (obj.hasOwnProperty(property) && obj[property]) {
                if (namespace) {
                    formKey = namespace + "." + property;
                } else {
                    formKey = property;
                }
                if (
                    typeof obj[property] === "object" &&
                    !(obj[property] instanceof File)
                ) {
                    // 此处将formKey递归下去很重要，因为数据结构会出现嵌套的情况
                    this.objectToFormData(obj[property], fd, formKey);
                } else {
                    fd[formKey] = obj[property];
                }
            }
        }
    }
    return fd;
}
function isEmptyObj(obj) {
    if (Object.prototype.toString.call(obj) == "[object Object]") {
        for (let key in obj) {
            if (typeof obj[key] != "number" && !obj[key]) {
                return false;
            }
        }
        return true;
    } else {
        return "not object";
    }
}
function fIEVersion(){
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(navigator.userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    return fIEVersion
}
function isIEAndSE(){
    var isIE11 = navigator.userAgent.indexOf('Trident') > -1 && navigator.userAgent.indexOf("rv:11.0") > -1;
    return navigator.userAgent.toLowerCase().indexOf('se 2.x')>-1&&isIE11||(!isNaN(fIEVersion())&&!fIEVersion()<10)
}

//判断两个日期相差天数
function getDays(strDateStart, strDateEnd) {
    var strSeparator = "-"; //日期分隔符
    var oDate1;
    var oDate2;
    var iDays;
    oDate1 = strDateStart.split(strSeparator);
    oDate2 = strDateEnd.split(strSeparator);
    var strDateS = new Date(oDate1[0], oDate1[1] - 1, oDate1[2]);
    var strDateE = new Date(oDate2[0], oDate2[1] - 1, oDate2[2]);
    iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数
    return iDays;
}
//获取指定该日期前几天（负数），后几天日期（正数）
function getNextDate(date, day) {
    var dd = new Date(date);
    dd.setDate(dd.getDate() + day);
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
    return y + "-" + m + "-" + d;
};
//日期排序方法
function ForwardRankingDate(data) {
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = 0; j < data.length - 1 - i; j++) {
            if (Date.parse(data[j]) > Date.parse(data[j+1])) {
                var temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    return data;
}
export default {
    dataFormat,
    shallowCopy,
    dateFtt,
    debounce,
    throttle,
    loadMap,
    fetch,
    save,
    isEmptyObj,
    objectToFormData,
    fIEVersion,
    isIEAndSE,
    getDays,
    getNextDate,
    ForwardRankingDate
};
