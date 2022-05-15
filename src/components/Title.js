const Title = ({ name, type }) => {
    const string = `Title name is - `;
    if (type === "bold") {
        return <p className = "bold">{string}{name}</p>
    }
    else {
        if (type === "normal")
            return <p className = "normal">{string}{name}</p>
        else
            return <p>{string}{name}</p>
        }
}
export default Title;