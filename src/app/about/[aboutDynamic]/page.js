"use client"

const DynamicRoute = (props) => {
    console.log("Dyn", props);
    return (
        <div>Dynamic {props.params.aboutDynamic}</div>
    )
}

export default DynamicRoute