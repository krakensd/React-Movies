import {useState} from 'react';

export default function LoginPage({setUser}) {

  const [login,setLogin] = useState(
    {
      userName: '',
    }
  )

  const handleChange = (e) => {
    setLogin({userName:e.target.value})
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setUser(login.userName)
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
          <label>USer</label>
          <input
            type="text"
            name="userName"
            value={login.userName}
            onChange={(e) => handleChange(e)}
            required
          />
          <button type="submit" >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
