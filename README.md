# Dividend Dashboard

A React application for tracking stock dividends and performance in real-time.

## Features

- Track stocks and their dividends
- View upcoming dividend payments
- View historical dividend data
- Visualize portfolio performance with charts
- Stock data powered by PyOdide (Python in the browser)

## Getting Started

### Prerequisites

- Node.js (16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/dashboard.git
   cd dashboard
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Deployment to GitHub Pages

This project is configured to be deployed to GitHub Pages. To deploy:

1. Update the `base` in `vite.config.js` to match your repository name:
   ```js
   base: '/your-repo-name/'
   ```

2. Install the GitHub Pages dependency (already in package.json):
   ```
   npm install --save-dev gh-pages
   ```

3. Deploy using the provided script:
   ```
   npm run deploy
   ```

4. Alternatively, push to the main branch and let GitHub Actions handle the deployment.

## Automated Deployment

This project includes a GitHub Actions workflow that automatically deploys the application to GitHub Pages when you push to the main branch.

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Material UI](https://mui.com/) - UI components
- [Chart.js](https://www.chartjs.org/) - Data visualization
- [Pyodide](https://pyodide.org/) - Python in the browser for stock data

## License

This project is licensed under the MIT License. 