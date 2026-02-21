let { people } = require('../data')


const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const addPerson = (req, res) => {
  const { name } = req.body;
  if (name) {
    people.push({ name: name });
    res.status(200).json({ success: true, person: people });
  } else {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
};

const editPerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (id) {
    const person = people.find((person) => Number(id) === person.id);
    if (!person) {
      return res.status(404).json({ success: false, msg: "Not Found Person" });
    }
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        return { ...person, name };
      }
      return person
    });
    return res.json({ success: true, data: newPeople });
  }
  res.json({ success: false, msg: "ID Is Not Valid" });
};

const removePerson = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ success: false, msg: "Not Found Person" });
  }
  const newPeople = people.filter((person) => person.id != Number(id));
  res.status(200).json({ success: true, data: newPeople });
};

module.exports = { addPerson, removePerson, editPerson, getPeople };
