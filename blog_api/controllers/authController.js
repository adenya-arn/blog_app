export async function registerUser(req, res) {
  //   console.log(req.body);

  const { username, email, password } = req.body;

  return res.json({ username, email, password });
}

export async function loginUser(req, res) {
  return res.json({
    message: "login working",
  });
}
