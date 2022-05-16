const Title = ({ name , type = "normal" }) => {
    return <p style = {{fontWeight: type}}>Title name is - {name}</p>
}
export default Title;