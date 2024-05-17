# Image Search Web App

## Goal

The goal of this assignment is to build a simple single-screen web app using ReactJS that displays images based on user searches. Images are fetched from a public API. The design wireframe and business specifications provided have been followed closely.

## Requirements

- The app should be built using ReactJS.
- The app should fetch data from the provided public APIs and display it to users.
- While the data is being fetched, the app should show a loading state. Shimmer animation is optional.
- When the user hovers over any image, it should show the details of the image in an anchor pop-up.
- The app should be responsive.
- You are free to choose the colors, fonts, sizes, etc., as you like.
- Your git commit should convey the progress clearly. Commit history should be meaningful.

## API Details

- You are required to register yourself as a developer and get the API keys at [Unsplash Developers](https://unsplash.com/developers).
- For making the search request and fetching the results, use this API: [Unsplash Search Photos API](https://unsplash.com/documentation#search-photos).

## Third-Party Libraries Used

- `react-icons`: For using icons in the app.
- `react-tooltip`: For showing tooltips.
- `react-popup`: For showing pop-up modals.

## Project Setup

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/image-search-web-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd image-search-web-app
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

### Project Structure

```plaintext
image-search-web-app/
├── public/
├── src/
│   ├── components/
│   │   ├── InputSearch.js
│   │   ├── Pagination.js
│   │   ├── SearchImageContainer.js
│   │   ├── TabSearch.js
│   │   ├── style.css
│   ├── App.css
│   ├── App.js
│   └── index.js
│   
├── .gitignore
├── package.json
└── README.md
