window.addEventListener('load', function() {
	var firstInput = document.createElement('input');
	var twelveInput = document.createElement('input');
	var btn = document.createElement('button');
	var result = document.createElement('div');
	var z = document.createElement('div');
	var x = document.createElement('div');

	var parent = document.body
	btn.innerHTML = 'Отправить';
	parent.appendChild(firstInput);
	parent.appendChild(twelveInput);
	parent.appendChild(btn);

	

	btn.addEventListener('click', function() {

		if (isNaN(firstInput.value) || firstInput.value == '') {
			x.className = "error-message"
			x.innerHTML = 'Is not a number';
			parent.appendChild(x);
			document.body.insertBefore(x, twelveInput);

		};

		if(isNaN(twelveInput.value) || twelveInput.value == '') {
			
			z.className = "error-message"
			z.innerHTML = 'Is not a number';
			parent.appendChild(z);
			document.body.insertBefore(z, btn);
		};

		if (!isNaN(firstInput.value) && !isNaN(twelveInput.value)) {
			if (firstInput.value == '' || twelveInput.value == '') {
				return;
			};
			var sum = parseInt(firstInput.value) + parseInt(twelveInput.value);
			
			result.id = 'result';
			result.innerHTML = sum;
			document.body.appendChild(result);
		};
	})
})

