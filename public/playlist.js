// Shuffle Functionality
const shuffleButton = document.getElementById("shuffle");
shuffleButton.addEventListener("click", () => {
  const playlist = document.getElementById("playlist");
  const songs = Array.from(playlist.children);
  const shuffled = songs.sort(() => Math.random() - 0.5);
  
  // Clear the list and re-add shuffled songs
  playlist.innerHTML = '';
  shuffled.forEach(song => playlist.appendChild(song));
});

// Add Song Functionality
const addSongForm = document.getElementById("add-song-form");
addSongForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newSongInput = document.getElementById("new-song");
  const newSongTitle = newSongInput.value;

  if (newSongTitle) {
    const playlist = document.getElementById("playlist");
    const newSongItem = document.createElement("li");
    newSongItem.textContent = newSongTitle;
    playlist.appendChild(newSongItem);
    newSongInput.value = '';
  }
});