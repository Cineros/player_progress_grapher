import React from "react";


//This *might* need a model but I plan to scrape WoWhead for their articles and link driectly to them.

function News() {
    const sampleData = [
        {
            id: 1,
            date: "10/1/2025",
            title: "Midnight Developer Q&A Liveblog - Valorstones Removed in Midnight",
            link:  "https://www.wowhead.com/news/midnight-developer-q-a-liveblog-378677",
        },
    ]

    return (
        <section style={{ padding: "0px"}}>
            <h3>News</h3>
            {sampleData.map((post) => 
            <article key={post.id}>
                <h4>
                    <a href={post.link} >{post.title} </a>
                </h4>
                <small style={{ paddingLeft: "20px"}}>
                    {post.date}
                </small>
                
            </article>
            )}
        </section>

    )

}

export default News;