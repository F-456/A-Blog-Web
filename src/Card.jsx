import Atreeimage from './assets/A tree.jpg'


function Card() {
    return (
        <div className="card">
            <img className="card-image" src={Atreeimage} alt="A tree"></img>
            <h2 className="card-title">Blog title</h2>
            <p className="card-text">This should be some blog phrases</p>
        </div>
    );

}

export default Card