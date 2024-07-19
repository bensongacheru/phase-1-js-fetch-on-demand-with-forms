document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("searchForm");
  
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const input = document.getElementById("searchByID").value.trim();
  
      if (!input) {
        alert("Please enter a valid ID");
        return;
      }
  
      try {
        const response = await fetch(`http://localhost:3000/movies/${input}`);
        if (!response.ok) {
          throw new Error("Movie not found!");
        }
        const data = await response.json();
  
        // Update DOM with movie details
        const movieTitle = document.querySelector("#movieDetails h4");
        const movieSummary = document.querySelector("#movieDetails p");
  
        movieTitle.textContent = data.title;
        movieSummary.textContent = data.summary;
      } catch (error) {
        alert(error.message);
      }
    });
  });
  