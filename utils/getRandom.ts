export default function getRandom<T>(array: T[]): T | undefined {
	if (array.length) {
		return array[Math.trunc(Math.random() * (array.length - 1))];
	}
}
