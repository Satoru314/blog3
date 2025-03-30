export default function Hero(props){
    const description = "デヤンス"
    return (
        <div className="hero">
            <h1 style={{color: 'red', fontSize: '80px'}}>{props.title}</h1>
            <p>{props.subtitle}</p>
            <p>{description}</p>
        </div>
    )
}