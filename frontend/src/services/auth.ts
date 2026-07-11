import axios from "axios";

export async function login(email: string, password: string) {
  const response = await axios.post(
    "https://mdkhairozzaman.pythonanywhere.com/api/login/",
    {
      email,
      password,
    }
  );

  return response.data;
}