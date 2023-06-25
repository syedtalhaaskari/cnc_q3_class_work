"use client"

const Error = (props) => {
    console.log(props);
    return (
        <div className="error">
            <div>Error Occured: {props.error.message}</div>
            <button onClick={props.reset}>Try Again</button>
        </div>
    )
}

export default Error