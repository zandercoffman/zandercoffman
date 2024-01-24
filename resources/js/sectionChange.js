document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function setAnimation(indexOfSection, direction) {
        console.log("Ran setAnimation() - " + indexOfSection + " " + direction);
        sections.forEach( (section, index) => {
            if (indexOfSection === index) {
                section.setAttribute("data-curAnimation", direction.toString());
            }
        })
    }

    function getCurrentShowedHTMLSection() {
        let showedSectionIndex = -1;
        sections.forEach((section, index) => {
            if (section.getAttribute("data-curShow") === "1") {
                showedSectionIndex = index;
                return;
            }
        });
        console.log(`getCurrentShowedHTMLSection returned ${showedSectionIndex}`)
        return showedSectionIndex;
    }
    

    function setPropertyToChosenHTMLSections(gottenIndex) {
        console.log(`Ran setPropertyToChosenHTMLSections() - ${gottenIndex}`)
        sections.forEach( (section, index) => {
            if (index === gottenIndex) {
                section.setAttribute("data-curShow", "1");
            } else {
                section.setAttribute("data-curShow", "0");
            }
        })
    }

    document.addEventListener('click', (event) => {
        const halfOfScreen = window.innerHeight / 2;
        
        if (event.clientY < halfOfScreen - 200) {
            moveDown();
        } else if (event.clientY > halfOfScreen + 200) {
            moveUp();
        }
    })

    function moveUp() {
        console.log("Ran moveUp() function")
        let curShown = getCurrentShowedHTMLSection();
        if (curShown === sections.length + 1) { return -1; }

        setPropertyToChosenHTMLSections(curShown + 1);
        setAnimation(curShown + 1, "up");
    } 

    function moveDown() {
        console.log("Ran moveDown() function")
        let curShown = getCurrentShowedHTMLSection();
        if (curShown ===  sections.length + 1) { return -1; }

        setPropertyToChosenHTMLSections(curShown - 1);
        setAnimation(curShown - 1, "down");
    }

})