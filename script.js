document.getElementById("openReward").addEventListener("click", function () {

    let selectedReward = localStorage.getItem("selectedReward");
    let alreadyClaimed = localStorage.getItem("rewardClaimed");

    // Agar customer ne reward pehle hi claim kar liya
    if (alreadyClaimed === "yes") {
        alert(
            "🎁 Reward Already Claimed!\n\n" +
            "Aap apna reward already claim kar chuke hain.\n\n" +
            "🛍️ Naya reward paane ke liye dobara shopping karein."
        );
        return;
    }

    // Agar Admin ne reward select nahi kiya
    if (!selectedReward) {
        alert(
            "🛍️ Reward paane ke liye pehle shopping karein."
        );
        return;
    }

    // Reward dikhana
    alert(
        "🎉 Congratulations!\n\n" +
        "Aapka Reward:\n\n" +
        selectedReward
    );

    // Reward claim ho gaya
    localStorage.setItem("rewardClaimed", "yes");
});