var initY;

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', (event) => {
        if (initY === undefined) {
            initY = event.clientY;
            return;
        }

        if (initY === event.clientY)
            return;

        if (event.clientY < initY) {
            console.log('Mouse moving up');
        } else if (event.clientY > initY) {
            console.log('Mouse moving down');
        }

        initY = event.clientY;
    })

    function moveUp() {

    } 

    function moveDown() {
        
    }
})