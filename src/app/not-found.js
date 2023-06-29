import Link from "next/link"

const NotFound = () => {
    return (
        <>
            <div className="container">
                <div>Page Not Found</div>
                <Link href="/">Go to home page</Link>
            </div>
        </>
    )
}

export default NotFound