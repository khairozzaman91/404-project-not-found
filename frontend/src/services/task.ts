import axios from "axios";

export async function getTasks() {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/tasks/list/"
  );

  return response.data;
}

export async function createTask(task: {
  title: string;
  priority: string;
  due_date: string;
  tags: string;
  status: string;
}) {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/tasks/",
    task
  );

  return response.data;
}