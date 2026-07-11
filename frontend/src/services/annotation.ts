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

export const saveAnnotation = async (
  imageId: number,
  points: number[][]
) => {
  const response = await axios.post(
    `${API_URL}/annotations/`,
    {
      image: imageId,
      points,
    }
  );

  return response.data;
};

export const getAnnotations = async (
  imageId: number
) => {
  const response = await axios.get(
    `${API_URL}/annotations/?image=${imageId}`
  );

  return response.data;
};

export const deleteAnnotation = async (
  annotationId: number
) => {
  await axios.delete(
    `${API_URL}/annotations/${annotationId}/`
  );
};

export const deleteImage = async (
  imageId: number
) => {
  await axios.delete(
    `${API_URL}/images/${imageId}/`
  );
};