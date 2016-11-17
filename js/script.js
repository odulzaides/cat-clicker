
var counter = [];
counter[1] = 0; counter[2] = 0; counter[3] = 0; counter[4] = 0; counter[5] = 0;

for (var i = 1; i < counter.length; i++) {
	var num = counter[i];


	// create elements to insert
	var elem = document.createElement('div');
	var image = document.createElement('img');
	var counterDisplay = document.createElement('p');
	var catName = document.createElement('h1');

	// Get nodes to install elements in
	var mainDiv = document.getElementById('main-div');
	var listDiv = mainDiv.getElementsByTagName('div')[0];
	var imageDiv = document.getElementById('image-div');

	// Cat Names to choose from
	elem.textContent = "Cat " + i;

	// Check for click on the names in order to show images
	elem.addEventListener('click', (function (numCopy) {

		return function () {

			// Set up the corresponding name, src, and 
			// counters of the images

			//image source
			image.src = "./images/cat" + numCopy + ".png";

			// image name
			catNameText = "Cat " + numCopy;
			catName.textContent = catNameText;

			// Update counter and set up diplay info
			counter[numCopy]++;
			counterDisplay.innerHTML = counter[numCopy];

			// Add image, counter, and name to div
			// imageDiv.appendChild(name);
			imageDiv.appendChild(counterDisplay);
			imageDiv.appendChild(image);
		};

	})(i));
	listDiv.appendChild(elem);
}

