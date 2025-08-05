function copyAccount(account) {
  navigator.clipboard.writeText(account).then(() => {
    const toast = document.getElementById("toast");
    toast.className = "show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
  });
}

function showMap(type) {
  const kakaoMap = document.getElementById("kakao-map");
  const naverMap = document.getElementById("naver-map");

  if (type === "kakao") {
    kakaoMap.style.display = "block";
    naverMap.style.display = "none";
  } else {
    kakaoMap.style.display = "none";
    naverMap.style.display = "block";
  }
}
