const editPost = document.getElementById("editPost");

editPost.addEventListener("submit", (event) => {
    event.preventDefault()

    const{
        title: titleInput,
        content: contentInput
    } = event.target.elements

    const updatedPost = {
        title: titleInput.value,
        content: contentInput.value
    }

    const blogId = event.target.dataset.blogid

    if (event.submitter.innerHTML === "Update Post") {
        fetch(`/api/blogs/${blogId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPost)
        })
        .then(response => {
            if (response.status === 200) {
                window.location.href = "/dashboard"
            }
        })
            .catch(err => console.log(err))
    } else if (event.submitter.innerHTML === "Delete") {
        fetch(`/api/blogs/${blogId}`, {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok) {
                window.location.href = "/dashboard"
            }
        })
            .catch(err => console.log(err))
    }
})