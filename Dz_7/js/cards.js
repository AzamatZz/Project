const cardsWrapper = document.querySelector('#cards-wrapper')

const asyncData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        data.forEach(post => {
            const div = document.createElement('div')
            div.innerHTML = `
                <span>${post.title}</span>
            `
            cardsWrapper.append(div)

        })

    }catch (e){
        console.error(e)
    }
}
asyncData()