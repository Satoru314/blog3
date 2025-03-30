export default function Hero(){
    const title = "CUBE"
    const subtitle = "アウトプットしていくサイト"
    const description = "デヤンス"
    return (
        <div className="hero">
            <h1 style={{color: 'red', fontSize: '80px'}}>{title}</h1>
            <p>{subtitle}</p>
            <p>{description}</p>
        </div>
    )
}