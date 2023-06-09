<div align="center">

# 🌦️ Weather Web App

Welcome to my weather web app! This project showcases my skills in web development using Node.js and API integration. With this app, users can easily obtain real-time weather information for any location worldwide.

</div>

## 🌐 Website

The web app is live and accessible at [https://weather-s1av.onrender.com/](https://weather-s1av.onrender.com/). Feel free to visit and explore!

## 🚀 Features

- Real-time weather information: Users can get the current weather conditions for any location by searching for it.
- International support: Users can search for weather information for any location worldwide, not just limited to a specific country or region.

## ⚙️ Technologies Used

- Node.js
- Express.js
- HTML
- CSS
- JavaScript
- API integration (WeatherStack API & PositionStack API)

## 📥 Installation

1. Clone the repository: `git clone https://github.com/harshpatel-r/Weather_App.git`
2. Change to the project directory: `cd Weather_App`
3. Install the dependencies: `npm install`

## 📝 Local Usage
1. Create a `config/dev.env` file in the root directory of your project.
2. Inside the `dev.env` file, specify the necessary environment variables required for the app. For example:

```bash
FORCAST_URL=http://api.weatherstack.com/current?access_key={your_weatherstack_api_key}&query=
GEOCODE_URL=http://api.positionstack.com/v1/forward?access_key={your_positionstack_api_key}&query=
```
  Replace `your_weatherstack_api_key` with your actual API key for the WeatherStack API and `your_positionstack_api_key` with   your actual API key for the PositionStack API.

3. Start the application: `npm run dev`
4. Open your web browser and visit `http://localhost:3000` to access the app.

⚠️ **Upcoming Support for Docker**

Support for running the app with Docker is currently under development. Stay tuned for updates on Docker usage instructions! We are excited to bring you the ability to run the app in a containerized environment for easier deployment and management.

## 🌐 API Integration

To retrieve weather data, this project utilizes the WeatherStack API. You will need to sign up for an API key at [https://weatherstack.com/](https://weatherstack.com/) and replace `your_weatherstack_api_key` in the `dev.env` file with your actual API key.

To retrieve location data, this project utilizes the PositionStack API. You will need to sign up for an API key at [https://positionstack.com/](https://positionstack.com/) and replace `your_positionstack_api_key` in the `dev.env` file with your actual API key.

## 🤝 Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to contribute. Here are some ways you can contribute:

- Report bugs or errors you encounter.
- Suggest new features or enhancements.
- Provide feedback on the existing features.
- Improve the codebase and project structure.
- Write tests to ensure stability.
- Help with translations.

If you have any questions or need assistance, please open an issue and provide detailed information. We appreciate your contributions!

Let's make this project better together! 🚀

---

Thank you for visiting my weather web app! I hope you find it useful for obtaining real-time weather information. If you have any questions or feedback, please feel free to reach out. Happy coding!

🌤️ Keep exploring, stay curious! 🌈

✨ **[Harsh Patel]** ✨
