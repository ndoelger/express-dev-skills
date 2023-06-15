const skills = [
  { id: 324328, skill: "shaking hands", good: true },
  { id: 945290, skill: "design", good: true },
  { id: 734659, skill: "coding", good: true },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}
