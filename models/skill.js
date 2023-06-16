const skills = [
  { id: 324328, skill: "shaking hands", good: true },
  { id: 945290, skill: "design", good: true },
  { id: 734659, skill: "coding", good: true },
];

module.exports = {
  getAll,
  getOne,
  addOne,
  deleteOne,
};

function getAll() {
  console.log(skills);
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function addOne(skill) {
  skill.id = Date.now() % 1000000;
  skill.good = true;
  skills.push(skill);
  console.log(skills);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex((todo) => todo.id === id);
  skills.splice(idx, 1);
}
