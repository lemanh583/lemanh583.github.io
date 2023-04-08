export default function TabModule() {
    let tab = document.querySelectorAll(".tabJS");
    if (tab) {
        tab.forEach((t) => {
            let tBtn = t.querySelectorAll(".tabBtn");
            let tPanel = t.querySelectorAll(".tabPanel");
            let tPanelSecond = t.querySelectorAll(".tabPanel-second");
            // for tab
            if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                if (!t.classList.contains("active-first-none")) {
                    tBtn[0].classList.add("active");
                    tPanel[0].classList.add("open");
                    if (tPanelSecond[0]) {
                        tPanelSecond[0].classList.add("open");
                    }
                }
                for (let i = 0; i < tBtn.length; i++) {
                    tBtn[i].addEventListener("click", showPanel);

                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtn.length; a++) {
                            tBtn[a].classList.remove("active");
                            tPanel[a].classList.remove("open");
                            if (tPanelSecond[a]) {
                                tPanelSecond[a].classList.remove("open");
                            }
                        }
                        tBtn[i].classList.add("active");
                        tPanel[i].classList.add("open");
                        if (tPanelSecond[i]) {
                            tPanelSecond[i].classList.add("open");
                        }
                    }
                }
            }
        });
    }
}