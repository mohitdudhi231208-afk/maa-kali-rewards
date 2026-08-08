const FIREBASE_URL = "https://maa-kali-rewards-default-rtdb.firebaseio.com/reward.json";

window.addEventListener("DOMContentLoaded", function() {
    fetch(FIREBASE_URL)
    .then(res => res.json())
    .then(data => {
        if(data && data.selectedReward){
            // Jahan reward text dikhana hai
            const rewardBox = document.getElementById("rewardDisplay") || 
                              document.querySelector(".reward-title") || 
                              document.querySelector("h2");
            
            if(rewardBox){
                rewardBox.innerText = data.selectedReward;
            }
        }
    })
    .catch(err => console.error("Firebase Error:", err));
});
