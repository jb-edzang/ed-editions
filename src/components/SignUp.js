import { signUp } from "../services/services/api";

const SignUp = async () => {
  // logique pour obtenir les données du formulaire de sign up
  const { user, email, pwd } = req.body;

  const userData = {
    user: "utilisateur",
    email: "email@example.com",
    pwd: "motdepasse",
  };

  try {
    const response = await signUp(userData);
    console.log(response); // Gérer la réponse de l'API SignUp
  } catch (error) {
    console.error(error); // Gérer les erreurs éventuelles
  }

  // logique de rendu
  return (
    <div>
      <form onSubmit={handleChange}>
        <h2>Sign Up</h2>
        <label>Username</label>
        <input
          id="user"
          name="user"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label>Email adress</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          id="pwd"
          name="pwd"
          type="pwd"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <button>onSubmit</button>
      </form>
    </div>
  );
};

export default SignUp;
