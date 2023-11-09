const users = [
  { id: 1,name:'user1', email: 'user1@example.com', password: 'password1' },
  { id: 2,name:'user2', email: 'user2@example.com', password: 'password2' },
  { id: 3,name:'user3', email: 'user3@example.com', password: 'password3' },
];

function findByEmail(email) {
  return users.find(user => user.email === email);
}

export { users, findByEmail };
