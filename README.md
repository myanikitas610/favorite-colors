🎨 Favorite Colors App

A React + TypeScript app to display API colors and add local colors via a form. Local colors are removable, API colors are permanent.

🌟 Features

API Colors – italic, cannot remove, font matches color
Local Colors – bold, removable, added via React Hook Form
Dynamic Styling – Emotion React for styling and theming
State Management – Redux Toolkit + RTK Query for predictable state and API caching

🛠 Tech Stack

React + TypeScript – functional components, static typing, interfaces, and generics
Redux Toolkit – manages local colors, reduces boilerplate
RTK Query – fetches and caches API colors efficiently
Emotion React – dynamic CSS-in-JS styling and theming
React Hook Form – handles form state, input validation, and resets

📖 How it Works

API colors fetched with RTK Query and displayed in italic
Local colors added via React Hook Form → stored in Redux → displayed in bold
Font color matches the color name using Emotion React
Remove button works only for local colors
