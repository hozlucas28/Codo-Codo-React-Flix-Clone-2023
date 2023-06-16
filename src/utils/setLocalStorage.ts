// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function setLocalStorage({ key, value }: { key: string; value: any }) {
	localStorage.setItem(key, JSON.stringify(value))
}
