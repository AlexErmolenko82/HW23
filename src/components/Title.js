const Title = ({ name, type }) => {
    if (type === "bold")
        return <p className = "bold">Title name is - {name}</p>
    else
        return <p>Title name is - {name}</p>
}
export default Title;