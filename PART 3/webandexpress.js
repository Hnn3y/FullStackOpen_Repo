import express from "express";
const app = express();
const PORT = 3000;

const persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
] ;

app.get('/api/persons', (req, res) => {
  res.json(persons)
});

app.get('/info', (req, res) => {
  const numOfPersons = persons.length;
  const date = new Date();
  res.send(`
  <p>Phonebook has info for ${numOfPersons} people</p> 
 <p>${date}</p>`);
});

app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id;
  const person = persons.find(p => p.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).json({error: 'Not found'});
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api/persons`)
}) 

