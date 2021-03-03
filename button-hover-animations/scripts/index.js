// reading the element on oour html we want to work with, and add to it an event
document.querySelector("#items").addEventListener("wheel", event => {
    // 'wheel' will read all events related to the wheel on the top of our mouse
    // so, if you move the wheel up, you are reaching the deltaY
    // console.log(event)

    // add a statement according the value of deltaY
    if (event.deltaY > 0) {
        // if is greater than 0, scrollBy 300px(?) on the axios x and nothing on axios y
        event.target.scrollBy(300, 0)
    } else {
        // otherwise, scrollBy -300px(?) on the axios x and nothing on axios y
        event.target.scrollBy(-300, 0)
    }
}
)

