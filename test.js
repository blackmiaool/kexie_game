// ==UserScript==
// @name         zhihu-helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com
// @match        https://www.zhihu.com/*
// @grant           GM_addStyle
// @grant           GM_setValue
// @grant           GM_getValue
// ==/UserScript==

(function () {
    'use strict';
    var concatPre = Array.prototype.concat;
    Array.prototype.concat = function (b) {
        function checkExtra(arr){
            return arr && arr.slice && typeof arr[3] == "string" && arr[3] == "著作权归作者所有，转载请联系作者获得授权。";
        }
        if (checkExtra(this)||checkExtra(b)) {
            return [];
        } else {
            return concatPre.apply(this, arguments);
        }

    };
    /*
    window.getSelection = function () {
        return false
    };*/
    //delete window.getSelection;
    $(document.body).on("click", "a", function (e) {
        var $a = $(this);
        var href = $a.attr("href");
        href = href.match(/link.zhihu.com\/\?target=([\s\S]+)/);
        if (href) {
            href = decodeURIComponent(href[1]);
            $a.attr("href", href);
        }
    });
    var tipStyle = "color: white;font-size: 22px;display: inline-block;position: absolute;top: 0;bottom: 0;line-height: 22px;margin: auto;height: 22px;";
    $(".zu-top").append($("<span style='" + tipStyle + "left: 10px;" + "'>民主</span>"))
        .append($("<span style='" + tipStyle + "right: 10px;" + "'>自由</span>"));
    //
    //
    //prevent comment from black list
    (function () {
        var blacklist = GM_getValue("blacklist");
        if (blacklist === undefined) {
            GM_setValue("blacklist", "{}");
            blacklist = {};
        } else {
            blacklist = JSON.parse(blacklist);
        }

        function dailyDo(action, name) {
            var d = GM_getValue(name + "-daily");
            var today = (new Date()).format("yyyyMMdd");
            if (!d) {
                d = today;
                GM_setValue(name + "-daily", d);
                action();
            } else {
                if (parseInt(d) < parseInt(today)) {
                    action();
                    GM_setValue(name + "-daily", today);
                }
            }
        }

        function a2uid($a) {
            return $a.attr("href").match(/\/people\/(.*)/)[1];
        }
        Date.prototype.format = function (format) {
            var zeros = ["", "0", "00", "000"];
            var c = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S+": this.getMilliseconds(),
            };
            if (/(y+)/.test(format))
                format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in c) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (c[k]) : ((zeros[RegExp.$1.length] + c[k]).substr(("" + c[k]).length)));
                }
            }
            return format;
        };
        dailyDo(fetchBlackList, "blacklist");

        function doRemove() {
            $(".Avatar").each(function () {
                var $dom = $(this);
                if (blacklist[a2uid($dom.parent())]) {
                    console.log("found!");
                    $dom.parent().parent().remove();
                }
            });
        }

        function readBlackList($wrap) {
            blacklist = {};
            $wrap.find(".item-card a:not(.avatar-link)").each(function () {
                blacklist[a2uid($(this))] = 1;
            });
            console.log(blacklist);
            GM_setValue("blacklist", JSON.stringify(blacklist));
            alert("黑名单已读取,黑名单中用户的评论将被屏蔽:" + JSON.stringify(blacklist));
        }

        function fetchBlackList() {
            $.get("https://www.zhihu.com/settings/filter", function (data) {
                readBlackList($(data));
            });
        }
        $(document).ajaxComplete(function (event, xhr, settings) {
            if (settings.url.match(/comments$/)) {
                setTimeout(doRemove, 100);
            }
        });

        if (location.href.match("settings\/filter")) {
            var $readBtn = $("<button class='zu-top-add-question' style='width:130px;'>读取黑名单列表</button>");
            $("#section-blocked-users>.settings-section-title>h2").append($readBtn);
            $readBtn.on("click", function () {
                readBlackList($(document.body));

            });
        }
    })();


    //end
})();