import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/layout/AuthLayout";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { login } from "../../services/auth";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
      console.log(email);
     console.log(password);

    try {
      const data = await login(email, password);

      if (data.success) {
        navigate("/tasks");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    }
  }

  return (
    <AuthLayout>
      <Card>
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            404 Project Not Found
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Sign in to continue
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          autoComplete="off"
        >
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mb-8 flex items-center">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                className="h-4 w-4 accent-blue-600"
              />
              Remember me
            </label>
          </div>

          <Button
            title="Login"
            type="submit"
          />
        </form>
      </Card>
    </AuthLayout>
  );
}

export default LoginPage;