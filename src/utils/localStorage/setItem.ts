export default function setItem<T>(key: string, value: T) {
	localStorage.setItem(key, JSON.stringify(value))
}
