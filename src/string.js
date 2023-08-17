String.ucfirst = function(str) {
	if (!str || typeof str !== "string") return str;
	return str.charAt(0).toUpperCase() + str.slice(1);
}

String.capitalize = function(str) {
	let words = str.split(" ");
	for (let i in words) {
		words[i] = String.ucfirst(words[i]);
	}
	return words.join(" ");
}

let a = "test a";
a = String.capitalize(a);
console.log(a);