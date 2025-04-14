// src/index.ts

import app from './app'; // Import the app from app.ts

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


