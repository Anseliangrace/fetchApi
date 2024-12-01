



const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '9affd3e995msh192c17dcca531fep11ae9cjsn463049669f09',
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        };

        async function fetchData() {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                displayData(result.d); // Assuming 'd' contains the array of movies
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        function displayData(movies) {
            const container = document.getElementById('cardContainer');
            movies.forEach(movie => {
                const card = document.createElement('div');
                card.className = 'card';

                card.innerHTML = `
                    <img src="${movie.i?.imageUrl || 'https://via.placeholder.com/200'}" alt="${movie.l}">
                    <div class="card-content">
                        <div class="card-title">${movie.l || 'Title not available'}</div>
                        <div class="card-description">${movie.s || 'Description not available'}</div>
                        <div class="card-description">${movie.rank || 'Description not available'}</div>
                        <div class="card-description">${movie.q || 'Description not available'}</div>
                        <div class="card-description">${movie.y || 'Description not available'}</div>
                        <div class="card-description">${movie.yr || 'Description not available'}</div>

                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Call the function to fetch data
        fetchData();





