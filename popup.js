const options = ['1', '1.2', '1.4', '1.6', '1.8', '2'];

const generateOptionHtml = (val) => {
	const labelElm = document.createElement('label');
	const span = document.createElement('span');
	const input = createInput(val);

	span.innerText = val;

	labelElm.appendChild(input);
	labelElm.appendChild(span);

	return labelElm;
};

const createInput = (val) => {
	const inputElm = document.createElement('input');
	inputElm.name = 'playbackSpeedInput';
	inputElm.type = 'radio';
	inputElm.value = val;

	inputElm.addEventListener('click', optionClickHandler);

	return inputElm;
};

const optionClickHandler = (e) => {
	const val = e.target.value;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
				tabs[0].id,
				{code: `document.querySelector('video[class^="HTMLMedia-mediaElement-"]').playbackRate = ${val}`});
	});
};

const container = document.getElementById('container');



options.forEach((value) => {
	container.appendChild(generateOptionHtml(value));
});
