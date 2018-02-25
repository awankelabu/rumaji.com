/*
* @Author: Imam
* @Date:   2018-02-25 03:18:52
* @Last Modified by:   Imam
* @Last Modified time: 2018-02-26 02:06:02
*/
$(document).ready(function () {
	var $formsub = $('form#subemail')
	
	var USER = 'ruru18'
	var APIKEY = '99860d3d9b5033bb430f53cd8762e116-us17'
	var DOMAIN = 'http://localhost:8080/v2'
	// var DOMAIN = 'https://api.rumaji.com/v2' 

	function requestLayer (method, url, body = null) {

		url = DOMAIN+url

		var options = {}
		options['method'] = method
		if(body) options['body'] = body
		options['headers'] = {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		}
		if(options.headers) options.headers = new Headers(options.headers)
		console.log(options)
		return fetch(url, options)
			.then(resp => resp.json())
	}
	
	$formsub.submit(function(e) {
		e.preventDefault()
		var $email = $('#email')
		// check if email already exist 
		var emailmd5 = md5($email)
		if(!$email.val()) return alert('insert your mail first')
		requestLayer('POST', '/user/subscribe', {email:$email.val()})
			.then(function (data) {
				console.log(data)
			})
		// subs email 
		// redirect to success
	}) 
})