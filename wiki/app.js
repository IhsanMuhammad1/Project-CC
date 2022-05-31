import React from "react"
import ReactDOM  from "react-dom"



function Article() {
    return(
        <div>
            <header>
                <title>Article Title</title>
                <section id="Author">Author</section>
                <section>Article Content</section>
                <h5>Date published</h5>
            </header>
        </div>
    )
}

ReactDOM.render(<Article />, document.getElementById("root"))