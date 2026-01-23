async function goals(){const path = "http://localhost:3000/api/goals";
    const container = document.getElementById("goals-container"); 
    try {
        const response = await fetch(path);     
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }       
        const goals = await response.json();
        
         container.innerHTML =
      "<ul>" +
      goals.map(goal => `<li>${goal}</li>`).join("") +
      "</ul>";
  }
     catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
        container.textContent = "Failed to load goals";
    }       
}

goals(); 