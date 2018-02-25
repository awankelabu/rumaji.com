/*
* @Author: Imam
* @Date:   2018-02-25 03:18:52
* @Last Modified by:   Imam
* @Last Modified time: 2018-02-26 03:07:56
*/
$(document).ready(function () {
	var $formsub = $('form#subemail')

	// var DOMAIN = 'http://localhost:8080/v2'
	var DOMAIN = 'http://api.rumaji.com/v2' 

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

		return fetch(url, options)
			.then(resp => resp.json())
	}
	
	$formsub.submit(function(e) {
		e.preventDefault()
		var self = this
		var $email = $('#email')
		var email = $email.val()
		// check if email already exist 
		if(!email) return alert('insert your mail first')
		requestLayer('POST', '/user/subscribe', {email:email})
		$(self).hide()
		$('.splash-subhead').append('<p class="done-reg">Terima Kasih, alamat email "'+email+'" telah kami registrasikan.</p>')
		// subs email 
		// redirect to success
	}) 
})