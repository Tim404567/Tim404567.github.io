document.addEventListener("DOMContentLoaded", (event) => { 
    const PrestigeMessageLabel = document.querySelector("#PrestigeMessage")

    prestigeGain = parseInt(localStorage.getItem("PrestigeGain"))
    if (prestigeGain > 1) {
        PrestigeMessageLabel.textContent = `Start over (Gain ${prestigeGain} Levels of Prestige)`;
    } else {
        PrestigeMessageLabel.textContent = `Start over (Gain ${prestigeGain} Level of Prestige)`;
    }

})