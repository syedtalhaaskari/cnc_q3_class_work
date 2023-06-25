"use client"

import { useState } from 'react'

export default function Home() {
	const [count, setCount] = useState(0)

	// if (true) {
	// 	throw new Error("Error Occured");
	// }

	return (
		<main>
			<button onClick={() => setCount(count + 1)}>Count {count}</button>
		</main>
	)
}
