/* 
** url 请求网址
** obj => {
		headers:{
	
		},
		body: JSON.stringify({
			// 参数列表
		})
		// 也可以是 'key=value&key1=value1'的形式
   }
*/

let body = '&showapi_appid=34383&showapi_sign=8a31cc27032f4356bedc2d53950d43dd';

exports.fetchRequest = async function(url, obj){
	obj = obj || {}
	obj.body += body
	obj.method = obj.method || 'GET'
	var result = await fetch(`${url}?${obj.body}`).then(res=>res.json()).then(resJson=>resJson)
		   .catch(err=>err)

	console.log(result)
	return result
}