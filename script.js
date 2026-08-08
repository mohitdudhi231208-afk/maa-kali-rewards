const FIREBASE_URL = "https://maa-kali-rewards-default-rtdb.firebaseio.com/reward.json";

function showReward() {
    const display = document.getElementById("rewardDisplay");
    
    // Reward Box ko screen par dikhayein
    display.style.display = "block";
    display.style.color = "#e65100";
    display.style.backgroundColor = "#fff3e0";
    display.innerText = "⏳ Opening Your Reward...";

    // Firebase se Real-time Reward Fetch Karein
    fetch(FIREBASE_URL)
    .then(res => {
        if(!res.ok) throw new Error("Fetch error");
        return res.json();
    })
    .then(data => {
        if(data && data.selectedReward){
            display.style.color = "#2e7d32";
            display.style.backgroundColor = "#e8f5e9";
            display.innerText = "🎉 Congratulations!\n" + data.selectedReward;
        } else {
            display.style.color = "#c62828";
            display.style.backgroundColor = "#ffebee";
            display.innerText = "❌ Abhi koi kharidi nahi hui.";
        }
    })
    .catch(err => {
        display.style.color = "#c62828";
        display.style.backgroundColor = "#ffebee";
        display.innerText = "❌ Network Issue! Kripya dobara try karein.";
        console.error(err);
    });
}
