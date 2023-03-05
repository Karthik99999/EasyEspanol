import "./youtube.css"

function YouTube() {  
    return (
      
      <div>
        <div align = "center"><h3 className= "start">Here is a video series to help you get more comfortable with listening and interpreting Spanish! You can use English subtitles in the beginning, but try to listen and correlate word meanings to what you hear.</h3></div>
        <div className="container">
          <div className="row">
            <div className="col card" style={{width: 18 + 'rem'}}>
              <div className="card-body">
              <iframe className = "video" width="560" height="315" src="https://www.youtube.com/embed/LtCorVH5ukU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h5 className="card-title">Season One: Episode One</h5>
                <h6 className="card-subtitle mb-2 text-muted">Bueno Gente</h6>
                <p className="card-text"></p>
              </div>
            </div>

            <div className="col card" style={{width: 18 + 'rem'}}>
              <div className="card-body">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/lTDFYd8OhS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h5 className="card-title">Season One: Episode Two</h5>
                <h6 className="card-subtitle mb-2 text-muted">Bueno Gente</h6>
                <p className="card-text"></p>
                
              </div>
            </div>
            
            <div className="w-100"></div>
            <div className="col card" style={{width: 18 + 'rem'}}>
              <div className="card-body">
              <iframe className = "video" width="560" height="315" src="https://www.youtube.com/embed/4UZ0FYAxn0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h5 className="card-title">Season One: Episode Three</h5>
                <h6 className="card-subtitle mb-2 text-muted">Bueno Gente</h6>
                <p className="card-text"></p>
                
              </div>
            </div>
            
            <div className="col card" style={{width: 18 + 'rem'}}>
              <div className="card-body">
              <iframe className = "video" width="560" height="315" src="https://www.youtube.com/embed/Jj0YuP3oxaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h5 className="card-title">Season One: Episode Four</h5>
                <h6 className="card-subtitle mb-2 text-muted">Bueno Gente</h6>
                <p className="card-text"></p>
                
              </div>
            </div>

            <div className="w-100"></div>
            <div className="col card" style={{width: 18 + 'rem'}}>
              <div className="card-body">
              <iframe className = "video" width="560" height="315" src="https://www.youtube.com/embed/vM-DcZbd2Vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h5 className="card-title">Season One: Episode Five</h5>
                <h6 className="card-subtitle mb-2 text-muted">Bueno Gente</h6>
                <p className="card-text"></p>
              </div>
            </div>
            <div className="col card" style={{width: 18 + 'rem'}}>
              <div className="card-body">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/6tMetbapGPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h5 className="card-title">Season One: Episode Six</h5>
                <h6 className="card-subtitle mb-2 text-muted">Bueno Gente</h6>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
        
        
        
      </div>
    );
  }
  
  export default YouTube;