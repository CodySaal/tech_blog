const commentForm = document.getElementById("comment")

commentForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const{
        content: contentInput
    } = event.target.elements

    const blogId = event.target.dataset.blogid 

    const commentData = {
        content: contentInput.value,
        blog_id: blogId
    }

    fetch("/api/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(commentData)
    })
    .then(response => {
        if (response.status === 200) {
            window.location.href = `/blog/${blogId}`
        }
    })
        .catch(err => console.log(err))
})