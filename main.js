const firstName = 'Kacper';
const age = '23'

console.log(
Witaj na stronie poświęconej Rezerwatu przyrody Żurawiniec, nazywam się ${firstName} i mam ${age}
);

const heading = document.querySelector('.main__heading--js');

heading.innerHTML = 'Witaj na stronie poświęconej Rezerwatu przyrody Żurawiniec, nazywam się ${firstName} i mam ${age}';

console.log(heading);

function createContent(querySelectorContent, content) {
	const element = document.querySelector(querySelectorContent);
	element.innerHTML = content;
}

createContent('.main__heading--js', 'podmienianie');

