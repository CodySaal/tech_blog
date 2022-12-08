const commentForm = document.getElementById("comment")

commentForm.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(event)

    const{
        content: contentInput
    } = event.target.elements

    const commentData = {
        content: contentInput.value,
    }
})