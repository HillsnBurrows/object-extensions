function ObjectManager() {
	const obj = {
		data: {},
		updateByPath: (path, value) => {
			const keys = path.split('.');
			let currentObj = obj.data;

			for (let i = 0; i < keys.length - 1; i++) {
				const key = keys[i];
				if (!currentObj[key]) {
					currentObj[key] = {};
				}
				currentObj = currentObj[key];
			}

			const lastKey = keys[keys.length - 1];
			currentObj[lastKey] = value;
		},
		keys: (path = "") => {
			const keys = path.split('.');
			let currentObj = obj.data;

			for (const key of keys) {
				if (path) {
					if (path && currentObj.hasOwnProperty(key)) {
						return []; // Path doesn't exist in the object
					}
					currentObj = currentObj[key];
				}
			}

			if (typeof currentObj !== 'object' || currentObj === null) {
				return []; // The path doesn't lead to an object
			}
			return Object.keys(currentObj);
		},
		values: (path = "") => {
			const keys = path.split('.');
			let currentObj = obj.data;

			for (const key of keys) {
				if (path) {
					if (path && currentObj.hasOwnProperty(key)) {
						return []; // Path doesn't exist in the object
					}
					currentObj = currentObj[key];
				}
			}

			if (typeof currentObj !== 'object' || currentObj === null) {
				return []; // The path doesn't lead to an object
			}

			return Object.values(currentObj);
		}
	};

	return obj;
}

export default ObjectManager;