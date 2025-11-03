import { useState } from "react";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/auth/registration/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: email.split("@")[0], // simple username from email
          email,
          password1: password,
          password2: confirmPassword,
        }),
      });

      if (res.ok) {
        setMessage("Account created! Check your email to verify.");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        const data = await res.json();
        const errorMessage = Object.values(data)
          .flat()
          .join(" ");
        setMessage(errorMessage || "Error creating account.");
      }
    } catch (err) {
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
      <div style={{justifyContent:'center', alignContent:'center', width: 'auto'}}>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
                fontSize: '14',
                width: "95%",
                border: 'outset',
                zIndex: "1",
                height: "auto",
                backgroundColor: "#ffffff",
              }}
            /> <br/> <br/>
            <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
                width: "95%",
                border: 'outset',
                zIndex: "1",
                height: "auto",
                backgroundColor: "#ffffff",
              }}
            /> <br/> 
            <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border px-3 py-2 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{
                width: "95%",
                border: 'outset',
                zIndex: "1",
                height: "auto",
                backgroundColor: "#ffffff",
              }}
            /> <br/> <br/>
            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            style={{
                width: "auto",
                border: 'outset',
                zIndex: "1",
                height: "auto",
                color: "Black",
                backgroundColor: "rgb(209, 209, 209)",
              }}
            >
            Create Account
            </button>
        </form>
      </div>
      

      {message && (
        <p className="text-center text-sm text-gray-700 mt-4">{message}</p>
      )}
    </div>
  );
}