import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/annotation";

export const getImages = async () => {
  const response = await axios.get(`${API_URL}/images/`);
  return response.data;
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await axios.post(
    `${API_URL}/images/`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};