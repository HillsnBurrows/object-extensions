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

String.slugify = function(str, options = {
	spaceReplaceWith: "-"
}) {
	return str
		.toLowerCase()                       // Convert the string to lowercase
		.replace(/[^\w\s-]/g, '')            // Remove non-word characters (except spaces and hyphens)
		.replace(/\s+/g, options.spaceReplaceWith)                // Replace spaces with hyphens
		.replace(/--+/g, options.spaceReplaceWith)                // Replace multiple hyphens with a single hyphen
		.trim();
}

String.deslugify = function(str, options = {
	spaceReplaceWith: "-"
}) {
	return str
		.replace(/-/g, ' ')             // Replace hyphens with spaces
		.replace(/_/g, ' ')             // Replace underscore with spaces
		.replace(/^\s+|\s+$/g, '');     // Trim leading and trailing spaces
}

export default {
	ucfirst: String.ucfirst,
	capitalize: String.capitalize,
	slugify: String.slugify,
	deslugify: String.deslugify
}