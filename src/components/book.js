import "./book.css"
import{useParams} from "react-router-dom";

function Book() {

    const params = useParams();

    return (
      <div className="text-center">
        <iframe id = "myPDF" src = {'/pdfs/' + params.id + '.pdf'}></iframe>

      </div>
      
    );
  }
  
  export default Book;
  