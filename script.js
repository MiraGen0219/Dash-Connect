// Connect to the APIs and make it happen :)

const getDogImageButton = document.getElementById ('dog-image');
const DogImage = document.getElementById ('dog-output');

async function getDogImage() {
    // Fetch data from the Dog API
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();

    // Clear previous image 
    DogImage.innerHTML = '';

    // Create an image element and set its source
    const img = document.createElement('img');
    img.src = data.message;

    // Append the image to the container
    DogImage.appendChild(img);
}

// Add event listener
getDogImageButton.addEventListener('click', getDogImage);


const getCatImageButton = document.getElementById('cat-image');
const catImage = document.getElementById('cat-output');

async function getCatImage() {
    const response = await fetch('https://cataas.com/cat');   

    // Clear previous image
    catImage.innerHTML = '';

    // Create image container and configure image
    const img = document.createElement('img');
    img.src = `https://cataas.com/cat?${Date.now()}`;

    // Insert image
    catImage.appendChild(img);
}

// Add event listener
getCatImageButton.addEventListener('click', getCatImage);


const getGetWeatherButton = document.getElementById('get-weather');
const weatherReport = document.getElementById('weather-output');

async function GetWeather() {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7&longitude=-74&current_weather=true');
    const data = await response.json();

    // Display current weather report
    weatherReport.innerHTML = `
        <p>Temperature: ${data.current_weather.temperature}°C</p>
        <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
    `;

    // Insert report data
    weatherReport.appendChild(img);
}

// Add event listener
getGetWeatherButton.addEventListener('click', GetWeather);


const getExchangeRateButton = document.getElementById('get-exchange-rate');
const exchangeRate = document.getElementById('currency-output');

const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');

async function getExchangeRate() {
    try {
        const amount = Number(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        // Enter amount box left blank
        if (!amountInput.value) {
            exchangeRate.textContent = "Please enter an amount.";
            return;
        }

        // Fetch currency rates from API
        const response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
        const data = await response.json();

        // If a currency type is not available
        if (!data.rates || !data.rates[to]) {
            exchangeRate.textContent = "Currency not available.";
            return;
        }

        // Displaying dynamic rates
        const rate = data.rates[to];
        const converted = (amount * rate).toFixed(2);

        exchangeRate.textContent = `${amount} ${from} = ${converted} ${to}`;

        // If there is an error in the process
    } catch (error) {
        console.error('Error:', error);
        exchangeRate.textContent = 'Something went wrong.';
    }
}

getExchangeRateButton.addEventListener('click', getExchangeRate);


const getMovieListButton = document.getElementById('movie-list');
const movieList = document.getElementById('movies-output');

const API_KEY = "7a9e0b9ff90fcab6af6c50eba00d78f4";

async function getMovieList() {
        try {
            // Fetch movie list from API
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            );
            const data = await response.json();
            
            // Movie list will display
            movieList.innerHTML = "";

            data.results.forEach(movie => {
                const p = document.createElement("p");
                p.textContent = movie.title;
                movieList.appendChild(p);
            });
        
        // In case ther is an error, catch
        } catch (error) {
            console.error("Error:", error);
            movieList.textContent = "Failed to load movies.";
        }
    }

    getMovieListButton.addEventListener("click", getMovieList);


const getGithubUserButton = document.getElementById('github-user');
const githubUserOutput = document.getElementById('github-output');
const searchInput = document.getElementById('github-search'); 

async function getGithubUser() {

    const query = searchInput.value.trim();

    if (!query) {
        githubUserOutput.innerHTML = "Enter Username";
        return;
    }

    // Fetch data from GitHub User API
    const response = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await response.json();

    // If there is no valid user by the entered username
    if (!data.items || data.items.length === 0) {
        githubUserOutput.innerHTML = "No user found";
        return;
    }

    // Clear previous results
    githubUserOutput.innerHTML = "";

    // If there is a username found, display information like so:
     data.items.forEach(user => {
        const userCard = document.createElement('div');

        userCard.innerHTML = `
            <p><strong>${user.login}</strong></p>
            <img src="${user.avatar_url}" width="80" />
            <p><a href="${user.html_url}" target="_blank">Profile</a></p>
        `;

        githubUserOutput.appendChild(userCard);
    });
}

getGithubUserButton.addEventListener('click', getGithubUser);


const getRandomJokeButton = document.getElementById('random-joke');
const randomJoke = document.getElementById('joke-output');

async function getRandomJoke() {
    // Fetch data from joke API
    const response = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
    const data = await response.json();

    // Clear previous joke
    randomJoke.innerHTML = "";

    // Display joke
    randomJoke.innerHTML = `
        <p>Joke: ${data.joke}</p>
    `;
}

getRandomJokeButton.addEventListener('click', getRandomJoke);


const getBookSuggestionsButton = document.getElementById('book-suggestions');
const bookSuggestions = document.getElementById('books-output');
const topicInput = document.getElementById('books-search');

async function getBookSuggestions() {
    const topic = topicInput.value.trim().toLowerCase();

    // If user clicks without entering a topic
    if (!topic) {
        bookSuggestions.innerHTML = "Please enter a topic";
        return;
    }

    // Fetch books from Library API
    const response = await fetch(
        `https://openlibrary.org/subjects/${topic}.json?details=true`
    );
    const data = await response.json();

    // If no results are found based on user input
    if (!data.works || data.works.length === 0) {
        bookSuggestions.innerHTML = "No books found for this topic";
        return;
    }

    // Clear previous books
    bookSuggestions.innerHTML = "";

    // Display books information
    data.works.slice(0, 10).forEach(book => {
        const bookCard = document.createElement('div');

        bookCard.innerHTML = `
            <p><strong>${book.title}</strong></p>
            <p>Author: ${book.authors?.[0]?.name || "Unknown"}</p>
        `;

        bookSuggestions.appendChild(bookCard);
    });
}

getBookSuggestionsButton.addEventListener('click', getBookSuggestions);