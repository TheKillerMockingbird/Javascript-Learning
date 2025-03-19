document.addEventListener("DOMContentLoaded", function () {
    const punchButton = document.getElementById("punchButton");
    const missedPunchButton = document.getElementById("missedPunchButton");
    const punchHistory = document.getElementById("punchHistory");

    function addPunch(type) {
        const timeStamp = new Date().toLocaleString();
        const entry = document.createElement("li");
        entry.textContent = `${type}: ${timeStamp}`;
        punchHistory.appendChild(entry);
    }

    punchButton.addEventListener("click", function () {
        addPunch("Punch In/Out");
    });

    missedPunchButton.addEventListener("click", function () {
        addPunch("Missed Punch");
    });
});
