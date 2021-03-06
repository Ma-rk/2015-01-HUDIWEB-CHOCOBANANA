/**
 * Created by jjungmac on 2015. 4. 5..
 * Edited by dahye on 2015. 4. 18 ('findIndex', 'ajax', 'echo' function added)
 */
(function () {
	'use strict';

    ubuntudo.utility.typeCheck = function (object) {
        var rtn = '';
        if (typeof object === 'object') {
            rtn = Object.prototype.toString
                .call(Object)
                .split(' ')[1]
                .replace(']', '');
        } else {
            rtn = typeof object;
        }
        return rtn;
    };

    //ajax로 대체하여 중복제거해야 할듯 - 다혜
    ubuntudo.utility.getJSONData = function (url, callback) {
        var util = ubuntudo.utility;
        var request = new XMLHttpRequest();

        request.open("GET", url, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send();

        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                var result = request.responseText;
                result = JSON.parse(result);
                if (util.typeCheck(callback) === "function") {
                    callback(result);
                }
            }
        };
    };

    //ajax로 대체하여 중복제거해야 할듯 - 다혜
    ubuntudo.utility.postJSONData = function (url, param , callback) {
        var util = ubuntudo.utility;
        var request = new XMLHttpRequest();

        request.open("POST", url, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(param);

        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                var result = request.responseText;
                result = JSON.parse(result);
                if(util.typeCheck(callback) === "function") {
                    callback(result);
                }
            }
        };
    };


    //getJSONData와 postJSONData 중복제거용 - 다혜
    ubuntudo.utility.ajax = function (object) {
        var method = object.method;
        var uri = object.uri;
        var param = object.param;
        var callback = object.callback;
        //var context = object.context;
        //var object = {"method": null, 등등}을 돌면서 object의 value채워넣기

        var util = ubuntudo.utility;
        var request = new XMLHttpRequest();
        //this.insId = insId++;
        request.open(method, uri, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(param);

        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                var result = request.responseText;
                result = JSON.parse(result);
                if(util.typeCheck(callback) === "function") {
                    callback(result);
                }
            }
        };
    };

	//getJSONData와 postJSONData 중복제거용 - 다혜
	ubuntudo.utility.ajaxEcho = function (object) {
		var method = object.method;
		var uri = object.uri;
		var param = object.param;
		var callback = object.callback;
		//var context = object.context;
		//var object = {"method": null, 등등}을 돌면서 object의 value채워넣기

		var util = ubuntudo.utility;
		var request = new XMLHttpRequest();
		//this.insId = insId++;
		request.open(method, uri, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.send(param);

		request.onreadystatechange = function () {
			if (request.readyState === 4 && request.status === 200) {
				var result = request.responseText;
				result = JSON.parse(result);
				if(util.typeCheck(callback) === "function") {
					callback(result);
					setTimeout( function() {
						util.ajaxEcho(object);
					},5000);
				}
			}
		};
	};



    ubuntudo.utility.echo = function (val) {
        return val;
    };

    ubuntudo.utility.findIndex = function findIndex(object, key, value) {
        //var util = ubuntudo.utility;
        var length = Object.keys(object).length;
        for(var index = 0; index < length; index++) {
            if(object[index][key] === value) {
                return index;
            }
        }
    };

	ubuntudo.utility.stream = function (url,progress,finished) {
		var xhr = new XMLHttpRequest();
		var received = 0;
		var util = ubuntudo.utility;
		xhr.open("get", url, true);
		xhr.onreadystatechange = function () {
			var result;
			if (xhr.readyState === 3) {
				result = xhr.responseText.substring(received);
				received += result.length;
				// progress 콜백 호출
				progress(result);
			} else if (xhr.readyState === 4) {
				if(util.typeCheck(finished) === "function") {
					finished(JSON.parse(xhr.responseText));
				}
			}
		};
		xhr.send(null);
		return xhr;
	};

	ubuntudo.utility.longPoll = function (object) {
		var method = object.method;
		var uri = object.uri;
		var param = object.param;
		var callback = object.callback;
		var request = new XMLHttpRequest();
		var util = ubuntudo.utility;
		request.onreadystatechange = function() {
			if (request.readyState === 4) {
				// 응답이 완료되면 서버로 재연결 요청보내기
				var result = request.responseText;
				result = JSON.parse(result);
				if (util.typeCheck(callback) === "function") {
					callback(result);
				}
			}
		};
		request.open(method, uri, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.send(param);
		};
})();
