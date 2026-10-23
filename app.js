import express from 'express';

const app = express ();
app.get('/', (req, res) => {
  res.status(200).send("Hello, GA!");
});

app.get('/health', (req, res) => {
  res.status(200).send("OK");
})

export default app;
