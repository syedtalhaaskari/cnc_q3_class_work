"use client"

import { useRouter } from "next/navigation"
import styles from "./StudentDetail.module.css"

const StudentDetail = ({ student }) => {
    const { refresh } = useRouter();
    const changeDetails = async (detail, type) => {
        console.log("Details", detail)
        const input = prompt(`Change Student ${type}: `, detail[type.toLowerCase()]);
        const response = await fetch(`/api/students?id=${detail.id}`, {
            method: "PATCH",
            body: JSON.stringify({ id: detail.id, [type.toLowerCase()]: input })
        })
        refresh();
        console.log("Res ===> ", response);
    }

    const deleteDetails = async (id) => {
        const response = await fetch(`/api/students?id=${id}`, {
            method: "DELETE",
        })
        refresh();
        console.log("Res ===> ", response);
    }

    const changeStatus = async (id) => {
        const response = await fetch(`/api/students?id=${id}`, {
            method: "PATCH",
            body: JSON.stringify({isStudent: !student.isStudent})
        })
        refresh();
    }

    return (
        <li className={styles.studentDetail}>
            <div className={"flex align-center"}>
                <span className={styles[student.isStudent ? "green" : "red"]} onClick={() => changeStatus(student.id)}></span>
                <span>
                    <div className="mb-3" onClick={() => changeDetails(student, "Name")}>Name: {student.name}</div>
                    <div onClick={() => changeDetails(student, "Email")}>Email: {student.email}</div>
                </span>
            </div>
            <button onClick={() => deleteDetails(student.id)}>Delete</button>
        </li>
    )
}

export default StudentDetail