import stringUtils from "./string";

Object.isObject = (obj) => {
	return (obj && typeof obj === 'object' && !Array.isArray(obj));
}

Object.getByPath = (obj, path) => {
	if (!Object.isObject(obj)) return;
	const keys = path.split('.');
	let currentObj = obj;

	for (const key of keys) {
		if (path) {
			if (path && currentObj.hasOwnProperty(key)) {
				return []; // Path doesn't exist in the object
			}
			currentObj = currentObj[key];
		}
	}
	return currentObj;
}

Object.keysByPath = (obj, path) => {
	if (!Object.isObject(obj)) return;
	const currentObj = Object.getByPath(obj, path);
	return Object.keys(currentObj);
}

Object.valuesByPath = (obj, path) => {
	if (!Object.isObject(obj)) return;
	const currentObj = Object.getByPath(obj, path);
	return Object.values(currentObj);
}

Object.updateByPath = (obj, path, value) => {
	if (!Object.isObject(obj)) return;
	console.log(typeof obj)
	const keys = path.split('.');
	let currentObj = obj;

	for (let i = 0; i < keys.length - 1; i++) {
		const key = keys[i];
		if (!currentObj[key]) {
			currentObj[key] = {};
		}
		currentObj = currentObj[key];
	}

	const lastKey = keys[keys.length - 1];
	currentObj[lastKey] = value;
}

Object.slugifyKeys = (obj, options = {
	depth: 1,
}) => {
	if (typeof obj !== 'object') return obj;

	if (Array.isArray(obj)) {
		return obj.data.map(item => Object.slugifyKeys(item));
	}

	const result = {};
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			result[stringUtils.slugify(key)] = Object.slugifyKeys(obj[key]);
		}
	}
	return result;
}


export default {
	isObject: Object.isObject,
	slugifyKeys: Object.slugifyKeys,
	updateByPath: Object.updateByPath,
	valuesByPath: Object.valuesByPath,
	keysByPath: Object.keysByPath,
	getByPath: Object.getByPath,
}