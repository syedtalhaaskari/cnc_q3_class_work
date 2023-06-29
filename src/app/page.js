const getStudentsList = async () => {
	const students = await fetch("http://localhost:3000/api/students");

	return await students.json();
}

export default async function Home() {
	const students = await getStudentsList();

	console.log({ students });

	return (
		<div className="container">
			<ul>
				{students?.students?.map((student, i) => (
					<li key={i}>{student}</li>
				))}
			</ul>
		</div>
	)
}
