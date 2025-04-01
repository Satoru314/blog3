export default function Hero({title, subtitle, imageOn = false }) {
    const description = "デヤンス"
    return (
        <div className="hero">
            <h1 style={{color: 'red', fontSize: '80px'}}>{title}</h1>
            <p>{subtitle}</p>
            <p>{description}</p>
            {imageOn ?  <figure> [画像] </figure> : <figure> [画像はありません] </figure>}
        </div>
    )
}