import axios from "axios";

export async function getTasks(date: string) {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/tasks/list/?date=${date}`
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

export async function deleteTask(id: number) {
  const response = await axios.delete(
    `http://127.0.0.1:8000/api/tasks/${id}/`
  );

  return response.data;
}

export async function updateTask(
  id: number,
  task: {
    title: string;
    priority: string;
    due_date: string;
    tags: string;
    status: string;
  }
) {
  console.log("UPDATE ID:", id);
  console.log("UPDATE DATA:", task);

  const response = await axios.put(
    `http://127.0.0.1:8000/api/tasks/${id}/update/`,
    task
  );

  console.log("UPDATE RESPONSE:", response.data);

  return response.data;
}