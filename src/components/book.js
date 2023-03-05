import "./book.css"
import{Link, useParams} from "react-router-dom";


function Book() {

    const params = useParams();



    if (!params.id) {
      return (
        <div className="container">
          <div className="row">
            <div className="card" style={{width: 18 + 'rem'}}>
              <div className="card-body">
                <h5 className="card-title">Gallina</h5>
                <h6 className="card-subtitle mb-2 text-muted">Horacio Quiroga</h6>
                <p className="card-text">At first they wish for a baby with intelligence, beauty and manners. They have a son but as it grows older it starts to have convulsions and eventually becomes 'braindead'.</p>
                <Link to = "./gallina" className="card-link">Gallina</Link>
              </div>
            </div>
            <br />
            <div className="card" style={{width: 18 + 'rem'}}>
              <div className="card-body">
                <h5 className="card-title">Don Quixote</h5>
                <h6 className="card-subtitle mb-2 text-muted">Miguel de Cervantes</h6>
                <p className="card-text">A middle-aged man named Alonso Quixano, a skinny bachelor and a lover of chivalry romances, loses his mind and decides to become a valiant knight.</p>
                <Link to = "./donquixote" className="card-link">Don Quixote</Link>
              </div>
            </div>
            <br />
            <div className="card" style={{width: 18 + 'rem'}}>
                <div className="card-body">
                  <h5 className="card-title">Love Poems</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Multiple authors</h6>
                  <p className="card-text">Poems of love.</p>
                  <Link to = "./lovepoems" className="card-link">Love Poems</Link>
                </div>
             </div>

          </div>
          <div className="row">
             <div className="card" style={{width: 18 + 'rem'}}>
                <div className="card-body">
                  <h5 className="card-title">Soledad</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Gabriel García Márquez</h6>
                  <p className="card-text">A story of five generations in the same family as it presents a veiled version of Colombian history. </p>
                  <Link to = "./soledad" className="card-link">Soledad</Link>
                </div>
             </div>
             <div className="card" style={{width: 18 + 'rem'}}>
                <div className="card-body">
                  <h5 className="card-title">Elalquimista</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Paulo Coello</h6>
                  <p className="card-text">A classic novel in which a boy named Santiago embarks on a journey seeking treasure in the Egyptian pyramids after having a recurring dream about it.</p>
                  <Link to = "./elalquimista" className="card-link">Elalquimista</Link>
                </div>
             </div>
          </div>
        </div>
      )
    }
    return (
      <div className="text-center">
        <iframe id = "myPDF" src = {'/pdfs/' + params.id + '.pdf'}></iframe>
      </div>
      
    );
  }
  
  export default Book;
  