import axios from "axios";

export async function getTasks(date: string) {
  const response = await axios.get(
    `https://mdkhairozzaman.pythonanywhere.com/api/tasks/list/?date=${date}`
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
    "https://mdkhairozzaman.pythonanywhere.com/api/tasks/",
    task
  );

  return response.data;
}

export async function deleteTask(id: number) {
  const response = await axios.delete(
    `https://mdkhairozzaman.pythonanywhere.com/api/tasks/${id}/`
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
  const response = await axios.put(
    `https://mdkhairozzaman.pythonanywhere.com/api/tasks/${id}/update/`,
    task
  );

  return response.data;
}