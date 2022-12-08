const commentForm = document.getElementById("comment")

commentForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const{
        content: contentInput
    } = event.target.elements

    const commentData = {
        content: contentInput.value,
    }
})