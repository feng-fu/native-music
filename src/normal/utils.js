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

exports.fetchRequest = function(url, obj){
	obj = obj || {}
	return fetch(url, obj).then(res=>res.json()).then(resJson=>resJson)
		   .catch(err=>err)
}