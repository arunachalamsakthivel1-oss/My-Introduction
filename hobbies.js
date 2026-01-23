
async function getHobbies() {
  const path = "http://localhost:3000/api/hobbies";
  const container = document.getElementById('hobbies-container');

  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const hobbies = await response.json();
    container.innerHTML =
      '<ul>' + hobbies.map(hobby => `<li>${hobby}</li>`).join('') + '</ul>';
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    container.textContent = 'Failed to load hobbies';
  }
}

getHobbies();
