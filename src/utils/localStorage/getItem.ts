export default function getItem<T>(item: string): T | null {
	const gotItem = localStorage.getItem(item)
	return gotItem ? JSON.parse(gotItem) : null
}
