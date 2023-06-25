const getData1 = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return data;
}

const About = async () => {
    const getData = await getData1();
    // if (true) {
    //     throw new Error("Test");
    // }

    return (
        <div>{getData.userId}</div>
    )
}

export default About