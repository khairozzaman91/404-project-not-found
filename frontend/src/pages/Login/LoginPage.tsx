import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

function LoginPage() {
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

        {/* Form */}
        <form>

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
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

          <Button title="Login" />

        </form>

      </Card>
    </AuthLayout>
  );
}

export default LoginPage;