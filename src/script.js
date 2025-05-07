const moodSelector = document.getElementById("moodSelector");
const message = document.getElementById("message");
const videoContainer = document.getElementById("videoContainer");

const moodData = {
  romantic: {
    msg: "Ishq wala mood! ❤️",
    videos: [
      `<iframe src="https://www.youtube.com/embed/j6uYorZ7G_g" frameborder="0" allowfullscreen></iframe>`, // Raataan Lambiyan
      `<iframe src="https://www.youtube.com/embed/fYZkCyAF6W4" frameborder="0" allowfullscreen></iframe>`, // Tum Hi Ho
      `<iframe src="https://www.youtube.com/embed/Rn6TQfY_kA8" frameborder="0" allowfullscreen></iframe>`, // Tum Jo Aaye
    ]
  },
  sad: {
    msg: "Thoda dard bhi zaruri hai... 💔",
    videos: [
      `<iframe src="https://www.youtube.com/embed/KlREw7jH-Kg" frameborder="0" allowfullscreen></iframe>`, // Channa Mereya
      `<iframe src="https://www.youtube.com/embed/7o5zEzRjlF4" frameborder="0" allowfullscreen></iframe>`, // Tera Ban Jaunga
      `<iframe src="https://www.youtube.com/embed/sXM_zR_P13w" frameborder="0" allowfullscreen></iframe>`, // Tujhe Kitna Chahne Lage
    ]
  },
  crush: {
    msg: "Crush ka naam lena mana hai 😜",
    videos: [
      `<iframe src="https://www.youtube.com/embed/lY2yjAdbvdQ" frameborder="0" allowfullscreen></iframe>`, // Shayad
      `<iframe src="https://www.youtube.com/embed/2nmiGFYDQdI" frameborder="0" allowfullscreen></iframe>`, // Dil Diyan Gallan
      `<iframe src="https://www.youtube.com/embed/fE8oXJ1SHZs" frameborder="0" allowfullscreen></iframe>`, // Raatan Kaaliyan
    ]
  },
  heartfelt: {
    msg: "Dil ki baat dil se hi hoti hai ❤️",
    videos: [
      `<iframe src="https://www.youtube.com/embed/MRau9Tjmr3Q" frameborder="0" allowfullscreen></iframe>`, // Tujhe Kitna Chahne Lage
      `<iframe src="https://www.youtube.com/embed/rrz5lLCUzFw" frameborder="0" allowfullscreen></iframe>`, // Kesariya
      `<iframe src="https://www.youtube.com/embed/L5WnrK6CvqI" frameborder="0" allowfullscreen></iframe>`, // Khairiyat
    ]
  }
};

moodSelector.addEventListener("change", () => {
  const mood = moodSelector.value;
  if (moodData[mood]) {
    const songList = moodData[mood].videos;
    const randomIndex = Math.floor(Math.random() * songList.length);
    const selectedVideo = songList[randomIndex];

    message.textContent = moodData[mood].msg;
    videoContainer.innerHTML = selectedVideo; // Display video iframe
    
    // Optional: background change based on mood
    document.body.style.background = mood === "sad" ? "#cfe2f3" :
                                     mood === "romantic" ? "#ffe6f0" :
                                     mood === "crush" ? "#fdf2ff" :
                                     "#ffe0cc";
  } else {
    message.textContent = "";
    videoContainer.innerHTML = "";
    document.body.style.background = "#fff0f5";
  }
});
