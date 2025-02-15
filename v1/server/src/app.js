import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

app.get('/v1/api/data', (req, res) => {
    const data = {
        message: 'Hello from Express'
    };

    res.status(200).json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
