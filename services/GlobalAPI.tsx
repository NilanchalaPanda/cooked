import { UserData } from "@/utils/types";
import axios from "axios";

// Create an instance of axios with baseURL and headers
const axiosClient = axios.create({
  baseURL: "http://192.168.0.244:1337/api",
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`,
  },
});

// Function to get categories list
const GetCategoriesList = async () => {
  try {
    const response = await axiosClient.get("/categories?populate=*");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Function to get user by email
const GetUserByEmail = async (email: string) => {
  try {
    const response = await axiosClient.get(
      `/user-lists?filters[email][$eq]=${email}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
};

// Function to create a new user
const CreateNewUser = async (data: UserData) => {
  try {
    const response = await axiosClient.post("/user-lists", { data });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating new user:", error);
    throw error;
  }
};

export default {
  GetCategoriesList,
  GetUserByEmail,
  CreateNewUser,
};
