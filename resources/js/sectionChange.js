document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function setAnimation(indexOfSection, direction) {
        console.log("Ran setAnimation() - " + indexOfSection + " " + direction);
        sections.forEach( (section, index) => {
            if (indexOfSection === index) {
                sections[Math.max(0, indexOfSection - 1)].setAttribute("data-curAnimation", `${direction}-fadeOut`.toString());
                setTimeout(() => {}, 1250);
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

    function moveUp() {
        console.log("Ran moveUp() function")
        let curShown = getCurrentShowedHTMLSection();
        if (curShown === sections.length ) { return -1; }

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

    document.addEventListener('click', (event) => {
        const halfOfScreen = window.innerHeight / 2;
        
        if (event.clientY < halfOfScreen - (.2 * halfOfScreen)) {
            moveDown();
        } else if (event.clientY > halfOfScreen + (.2 * halfOfScreen)) {
            moveUp();
        }
    })

})