const apiKey = 'c7a8cfddc24b8ccbd0b5edb811abd9c0'; // Your public API key
const baseUrl = 'https://gateway.marvel.com/v1/public/characters';

async function fetchMarvelCharacters() {
    try {
        const characterNames = ['Spider-Man', 'Iron Man', 'Captain America'];
        const characterPromises = characterNames.map(name => 
            fetch(`${baseUrl}?name=${encodeURIComponent(name)}&apikey=${apiKey}`)
        );

        const responses = await Promise.all(characterPromises);
        const dataPromises = responses.map(response => response.json());
        const charactersData = await Promise.all(dataPromises);
        
        const characters = charactersData.map(data => data.data.results[0]); // Get the first result for each character
        console.log(characters); // Log the characters to the console
        return characters;
    } catch (error) {
        console.error('Error fetching Marvel characters:', error);
    }
}

async function updateUIWithCharacters() {
    const characters = await fetchMarvelCharacters(); // Fetch characters first
    const container = document.getElementById('characters-container');

    if (characters && characters.length > 0) {
        characters.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.className = 'character';

            const nameElement = document.createElement('h3');
            nameElement.textContent = character.name;
            characterDiv.appendChild(nameElement);

            const imgElement = document.createElement('img');
            imgElement.src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
            imgElement.alt = `${character.name}`;
            characterDiv.appendChild(imgElement);

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = character.description || 'No description available.';
            characterDiv.appendChild(descriptionElement);

            container.appendChild(characterDiv);
        });
    } else {
        container.innerHTML = '<p>No characters found.</p>';
    }
}

// Call the function to fetch characters and update the UI
updateUIWithCharacters();
