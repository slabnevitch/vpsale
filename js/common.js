(function() {
	// ibg class
	// if('objectFit' in document.documentElement.style === false){
	//   Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

	//     var image = el.querySelector('img');
	//     el.style.backgroundImage = 'url("'+image.src+'")';
	//     el.classList.add('ibg');
	//     el.classList.remove('_fit');
	// 	 });
	// }
	// End ibg class

	document.addEventListener('DOMContentLoaded', function() {
		// inputs jump
		if(document.querySelector(".form-order__code") !== null){
			var pinContainer = document.querySelector(".form-order__code"); //в этот блок надо положить все необходимые инпуты

			pinContainer.addEventListener('keyup', function (event) {
			    var target = event.srcElement;
			    
			    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
			    var myLength = target.value.length;

			    if (myLength >= maxLength) {
			        var next = target;
			        while (next = next.nextElementSibling) {
			            if (next == null) break;
			            if (next.tagName.toLowerCase() == "input") {
			                next.focus();
			                break;
			            }
			        }
			    }

			    if (myLength === 0) {
			        var next = target;
			        while (next = next.previousElementSibling) {
			            if (next == null) break;
			            if (next.tagName.toLowerCase() == "input") {
			                next.focus();
			                break;
			            }
			        }
			    }
			}, false);

			pinContainer.addEventListener('keydown', function (event) {
			    var target = event.srcElement;
			    target.value = "";
			}, false);
		}
		
	});
})();