"use client"

import { useRouter } from "next/navigation";
import styles from "./AddStudent.module.css"

const AddStudent = () => {
  const { refresh } = useRouter();
  const addStudent = async () => {
    const name = prompt("Enter Student Name: ", "");
    const email = prompt("Enter Student Email: ", "");

    if (name && email) {
      const response = await fetch("/api/students", {
        method: "POST",
        body: JSON.stringify({
          name, email
        })
      })

      if (response.status === 200) {
        refresh()
      }
    } else {
      alert("Name or Email should not be empty")
    }
  }

  return (
    <div className={styles.addStudentContainer}>
      <button onClick={addStudent} className={styles.addStudentContainerButton}>Add Student</button>
    </div>
  )
}

export default AddStudent