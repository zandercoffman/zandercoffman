var initY;
var section1, section2, section3, sect;

document.addEventListener('DOMContentLoaded', function() {
    section1 = document.getElementById("section-1");
    section2 = document.getElementById("section-2");
    section3 = document.getElementById("section-3");
    sect = [section1, section2, section3]; 

    function getCurrentShowedHTMLSection() {
        let index = 0;
        sect.forEach((section) => {
            if (section.getAttribute("data-curShow") === "1") {
                return index;
            }
            index++;
        });
    }

    function setPropertyToChosenHTMLSections(gottenIndex) {
        let trav = 1;
        sect.forEach((section, index) => {
            if (gottenIndex != index) {
                document.getElementById("section-" + trav.toString()).setAttribute("data-curShow", "0");
            } else {
                document.getElementById("section-" + trav.toString()).setAttribute("data-curShow", "1");
                return;
            }
            trav++;
        });
        return;
    }

    document.addEventListener('click', (event) => {
        if (initY === undefined) {
            initY = event.clientY;
            return;
        }

        if (initY === event.clientY)
            return;

        if (event.clientY < initY) {
            moveUp();
        } else if (event.clientY > initY) {
            moveDown();
        }

        initY = event.clientY;
    })

    function moveUp() {

    } 

    function moveDown() {
        
    }

})