// use () to make groups in routing
// use [...folderName] for nesting routing you can also create folders inside folder

const Brands = ({ params }) => {
    return (
        <div className="container">{params.brands}</div>
    )
}

export default Brands