import AddStudent from "@/components/AddStudent/page";
import StudentDetail from "@/components/StudentDetail/page";

const getStudentsList = async () => {
	const students = await fetch("http://localhost:3000/api/students", {
		cache: "no-cache"
	});

	console.log(students);

	return await students.json();
}

export default async function Home() {
	const students = await getStudentsList();

	console.log({ students });

	return (
		<div className="container flex-1">
			<AddStudent />
			<ul>
				{students?.students?.data?.map((student, i) => (
					<StudentDetail student={student} key={i} />
				))}
			</ul>
		</div>
	)
}
