import Atreeimage from './assets/A tree.jpg'


function Card() {
    return (
        <div class="card">
            <img class="card-image" src={Atreeimage} alt="A tree"></img>
            <h2 class="card-title">Blog title</h2>
            <p class="card-text">This should be some blog phrases</p>
        </div>
    );

}

export default Card