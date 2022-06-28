import "./Cards.css";
const Cards = (props) => {

    return (
        <>
           <div className="card">
            <div className="card-img"><img src={props.image}></img></div>
            <div className="card-name">
            <span className="card-info">NETFLIX ORIGINAL SERIES</span><br/>
            <span className="title">{props.title}</span><br/>
            <a href={props.link} target="_blank"> <button >Watch Now</button> </a>
            
            </div>
           </div>
        </>
    );

}
export default Cards;