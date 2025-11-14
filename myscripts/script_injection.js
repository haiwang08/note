var sc = document.createElement("script");
sc.src = "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js";
var s = document.getElementsByTagName("title")[0];
s.parentNode.insertBefore(sc, s);

var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js";
script.onload = function () {
    console.log("jQuery is ready!");
};
document.body.appendChild(script);

let waitForVideo = setInterval(() => {
    if (flag && (v = $("video")[0])) {
        console.log("Ready!");
        //v.currentTime = 20.5;
        //v.play();
        flag = false;
    }
}, 2000);

clearInterval(secondaryListener);

let ss1 = "";
let ss2 = "";
let ss3 = "";
$("tr").each((i, e) => {
    let jb = $(e);
    let xjb = jb.find("td");
    if (xjb.length == 3) {
        ss1 += xjb.eq(0).text() + ",,,,";
        ss2 += xjb.eq(2).text() + ",,,,";
    }
});

let vv = $("video")[0];
vv.currentTime = 100;
vv.play();

// 爬单词
let t = "";
$("#tablepress-218 tbody tr").each((idx, obj) => {
    let tds = $(obj).find("td");
    t += $(tds[0]).text() + ",";
    t += $(tds[3]).text() + ";";
});
t;
