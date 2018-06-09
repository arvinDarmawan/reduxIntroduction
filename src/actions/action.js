const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function incrementData() {
	return {
		type: INCREMENT
	};
}

export function decrementData() {
	return {
		type: DECREMENT
	};
}