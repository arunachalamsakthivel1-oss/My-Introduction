const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); 
app.get('/', (req, res) => {
  res.send('Welcome to My Introduction API');
});


 
app.get('/api/hobbies', (req, res) => {
  res.send(
         [ "💻 Coding", "♟️ Chess", 
"💪 Gym",
 "🎮 Gaming",
"🏐 Volleyball" ]);
}
);
app.get('/api/goals', (req, res) => {
    res.send(
    ["🚀 Become a successful entrepreneur.","📚 Pursue my MBA from IIM Ahmedabad.","🎓 Continuously learn and grow in computer science."]);
});
    
const PORT = 3000;  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 