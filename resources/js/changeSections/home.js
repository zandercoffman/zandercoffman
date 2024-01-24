var initY;
var section1, section2, section3, sect;

document.addEventListener('DOMContentLoaded', function() {

    const setAnimation = (index, direction) => {
        console.log("Ran setAnimation() - " + index + " " + direction)
        for (let i = 1; i <= 3; i++) {
            if (i == index) {
                console.log(`${i} === ${index}`)
                document.getElementById("section-" + i.toString()).setAttribute("data-curAnimation", direction.toString());
            } else {
                document.getElementById("section-" + i.toString()).setAttribute("data-curAnimation", "none");
            }
        }
    }

    //this function is NASTY yuck 🙅‍♂️
    function getCurrentShowedHTMLSection() {
        for (let i = 1; i <= 3; i++) {
            let elementName = ("section-" + i.toString()).toString();
            console.log(`elementName = ${elementName} - ${typeof elementName === "string"} ~ Section ${i} - data-curShow: ${document.getElementById(elementName).getAttribute("data-curShow")}`);
            
            if (document.getElementById(elementName).getAttribute("data-curShow") == "1") {
                return i;
            }
        }
        console.log(`getCurrentShowedHTMLSection() returned -1`)
        return -1;
    }

    function setPropertyToChosenHTMLSections(gottenIndex) {
        console.log(`Ran setPropertyToChosenHTMLSections() - ${gottenIndex}`)
        for (let i = 1; i <= 3; i++) {
            if (i == gottenIndex) {
                document.getElementById("section-" + i.toString()).setAttribute("data-curShow", "1");
                console.log(document.getElementById("section-" + i.toString()) + " is updated to " + document.getElementById("section-" + i.toString()).getAttribute("data-curShow") )
            } else {
                document.getElementById("section-" + i.toString()).setAttribute("data-curShow", "0");
            }
        }
    }

    document.addEventListener('click', (event) => {
        const halfOfScreen = window.innerHeight / 2;

        if (event.clientY < halfOfScreen) {
            moveUp();
        } else if (event.clientY > halfOfScreen) {
            moveDown();
        }
    })

    function moveUp() {
        console.log("Ran moveUp() function")
        let curShown = getCurrentShowedHTMLSection();
        if (curShown === 1) { return; }

        setPropertyToChosenHTMLSections(curShown + 1);
        setAnimation(curShown + 1, "up");
    } 

    function moveDown() {
        console.log("Ran moveDown() function")
        let curShown = getCurrentShowedHTMLSection();
        if (curShown === 3) { return; }

        setPropertyToChosenHTMLSections(curShown - 1);
        setAnimation(curShown - 1, "down");
    }

})