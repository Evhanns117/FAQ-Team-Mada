// script.js
const map = L.map('map').setView([20, 0], 2); // Initialiser la carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Charger les données des questions/réponses
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const searchBar = document.getElementById('search-bar');
    const resultsDiv = document.getElementById('results');

    // Mettre à jour les résultats en fonction de la recherche
    searchBar.addEventListener('input', () => {
      const query = searchBar.value.toLowerCase();
      const filtered = data.filter(item => item.question.toLowerCase().includes(query));

      // Afficher les résultats
      resultsDiv.innerHTML = '';
      filtered.forEach(item => {
        const result = document.createElement('div');
        result.textContent = item.question;
        result.className = 'result';
        result.onclick = () => {
          map.setView(item.coords, 10); // Déplacer la carte vers la ville
          L.popup()
            .setLatLng(item.coords)
            .setContent(`<b>${item.city}</b><br>${item.answer}`)
            .openOn(map);
        };
        resultsDiv.appendChild(result);
      });
    });
  });
