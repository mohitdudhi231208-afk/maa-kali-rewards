// Firebase Database URL
const FIREBASE_URL = "https://maa-kali-rewards-default-rtdb.firebaseio.com/reward.json";

// Customer page load hote hi Firebase se reward read karega
window.addEventListener("DOMContentLoaded", function() {
    fetch(FIREBASE_URL)
    .then(res => res.json())
    .then(data => {
        if(data && data.selectedReward){
            // Aapke reward wale element ko find karega
            const rewardBox = document.getElementById("rewardDisplay") || 
                              document.querySelector(".reward-title") || 
                              document.querySelector("h2");
            
            if(rewardBox){
                rewardBox.innerText = data.selectedReward;
            }
        }
    })
    .catch(err => console.error("Firebase Fetch Error:", err));
});
