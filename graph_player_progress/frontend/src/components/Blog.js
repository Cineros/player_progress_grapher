import React from "react";

function Blog() {
    const samplePosts = [
        {
            id: 1,
            title: "Sample blog post 1",
            date: "10/1/2025",
            content: "This is a sample of a blog post to be replaced later.",
            likes: 0,
            dislikes: 0
        },
        {
            id: 2,
            title: "Sample blog post 2",
            date: "10/1/2025",
            content: "this is another sample blog post",
            likes: 0,
            dislikes: 0
        },
        {
            id: 3,
            title: "Sample blog post 2",
            date: "10/1/2025",
            content: "this is another sample blog post",
            likes: 0,
            dislikes: 0
        },
        {
            id: 4,
            title: "Sample blog post 2",
            date: "10/1/2025",
            content: "this is another sample blog post",
            likes: 0,
            dislikes: 0
        },
        {
            id: 5,
            title: "Sample blog post 2",
            date: "10/1/2025",
            content: "this is another sample blog post",
            likes: 0,
            dislikes: 0
        },
        {
            id: 6,
            title: "Sample blog post 2",
            date: "10/1/2025",
            content: "this is another sample blog post",
            likes: 0,
            dislikes: 0
        }
    ];
    
    return (
        <section style={{ padding: "2px" }}>
            <h3>Blog</h3>
            {samplePosts.map((post) => (
                <article key={post.id}>
                    <h4>
                        {post.title}
                    </h4>
                    <small style={{ paddingLeft: "20px"}}>{post.date}</small>
                    <p>{post.content}</p>
                </article>
            ))}
        </section>
    );
}

export default Blog;