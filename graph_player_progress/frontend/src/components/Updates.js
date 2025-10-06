import React from "react";


//This will need a model from the backend but all the updates will be written by me!

function Updates() {
    const sampleData = [
        {
            id: 1,
            title: "Title",
            content: "This is a sample update",
            date: "10/1/2025"
        }
    ]
    return (
        <section>
            <h3>Updates</h3>
            {sampleData.map((post) => 
                <article key={post.id}>
                    <h4>{post.title}</h4>
                    <small> {post.date} </small>
                    <p>{post.content}</p>
                </article>
            )}
        </section>
    )

}


export default Updates;