   // Hindi song database with image URLs
   const songs = {
    romantic: [
        { 
            title: "Tum Hi Ho", 
            artist: "Arijit Singh", 
            videoId: "FyIY3J9O1iQ",
            image: "https://github.com/goutampchohan/images-/blob/main/tum%20hi%20ho.jpg?raw=true"
        },
        { 
            title: "Pehla Nasha", 
            artist: "Udit Narayan", 
            videoId: "6Q7A6rJ1k9I",
            image: "https://github.com/goutampchohan/images-/blob/main/pehla%20nasha.jpg?raw=true"
        },
        { 
            title: "Tere Bina", 
            artist: "A.R. Rahman", 
            videoId: "4XpL6jqOq9o",
            image: "https://github.com/goutampchohan/images-/blob/main/_mwqXnTEHSc-HD.jpg?raw=true"
        }
    ],
    sad: [
        { 
            title: "Channa Mereya", 
            artist: "Arijit Singh", 
            videoId: "G0wB3Q5yAcM",
            image: "https://github.com/goutampchohan/images-/blob/main/channa%20mere.jpg?raw=true"
        },
        { 
            title: "Tujhe Bhula Diya", 
            artist: "Mohit Chauhan", 
            videoId: "2Q0O7szZ3Xg",
            image: "https://github.com/goutampchohan/images-/blob/main/tujhe%20bhula%20diya.jpg?raw=true"
        },
        { 
            title: "Ae Dil Hai Mushkil", 
            artist: "Arijit Singh", 
            videoId: "4T4tZQKf0Sw",
            image: "https://github.com/goutampchohan/images-/blob/main/ae%20dil%20mushkil.jpg?raw=true"
        }
    ],
    crush: [
        { 
            title: "Mere Rashke Qamar", 
            artist: "Nusrat Fateh Ali Khan", 
            videoId: "3BkE5JkQ6_g",
            image: "https://github.com/goutampchohan/images-/blob/main/raske%20qamer.jpg?raw=true"
        },
        { 
            title: "Bekhayali", 
            artist: "Sachet Tandon", 
            videoId: "vXo0KLqK1-o",
            image: "https://github.com/goutampchohan/images-/blob/main/bekhayali.jpg?raw=true"
        },
        { 
            title: "Raabta", 
            artist: "Arijit Singh", 
            videoId: "k9i6eH4ZqXg",
            image: "https://github.com/goutampchohan/images-/blob/main/raabta.jpg?raw=true"
        }
    ],
    happy: [
        { 
            title: "Badtameez Dil", 
            artist: "Benny Dayal", 
            videoId: "5dCQ6JQJQYQ",
            image: "https://github.com/goutampchohan/images-/blob/main/badtameez%20dil.jpg?raw=true"
        },
        { 
            title: "Gallan Goodiyaan", 
            artist: "Various Artists", 
            videoId: "5dCQ6JQJQYQ",
            image: "https://github.com/goutampchohan/images-/blob/main/gallan%20goodiyaan.jpg?raw=true"
        },
        { 
            title: "London Thumakda", 
            artist: "Labh Janjua", 
            videoId: "5dCQ6JQJQYQ",
            image: "https://github.com/goutampchohan/images-/blob/main/landon.jpg?raw=true"
        }
    ],
    breakup: [
        { 
            title: "Tum Ho Toh", 
            artist: "Mohit Chauhan", 
            videoId: "5dCQ6JQJQYQ",
            image: "https://github.com/goutampchohan/images-/blob/main/tum%20ho%20toh.jpg?raw=true"
        },
        { 
            title: "Agar Tum Saath Ho", 
            artist: "Alka Yagnik", 
            videoId: "5dCQ6JQJQYQ",
            image: "https://github.com/goutampchohan/images-/blob/main/tamasa.jpg?raw=trueimage/tamasa.jpg"
        },
        { 
            title: "Tujhe Kitna Chahne Lage", 
            artist: "Arijit Singh", 
            videoId: "5dCQ6JQJQYQ",
            image: "https://github.com/goutampchohan/images-/blob/main/bekhayali.jpg?raw=true"
        }
    ]
};

// DOM elements
const moodOptions = document.querySelectorAll('.mood-option');
const resultContainer = document.getElementById('resultContainer');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const songImage = document.getElementById('songImage');
const ytIcon = document.getElementById('ytIcon');
const anotherBtn = document.getElementById('anotherBtn');

let currentMood = null;
let currentVideoId = null;

// Event listeners
moodOptions.forEach(option => {
    option.addEventListener('click', () => {
        moodOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        currentMood = option.getAttribute('data-mood');
        recommendSong();
    });
});

anotherBtn.addEventListener('click', recommendSong);

ytIcon.addEventListener('click', () => {
    if (currentVideoId) {
        window.open(`https://www.youtube.com/watch?v=${currentVideoId}`, '_blank');
    }
});

// Recommend a random song for the selected mood
function recommendSong() {
    if (!currentMood) return;
    
    const moodSongs = songs[currentMood];
    const randomSong = moodSongs[Math.floor(Math.random() * moodSongs.length)];
    
    songTitle.textContent = randomSong.title;
    songArtist.textContent = randomSong.artist;
    songImage.src = randomSong.image;
    currentVideoId = randomSong.videoId;
    
    resultContainer.style.display = 'block';
}