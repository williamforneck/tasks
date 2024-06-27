import { TASK_COLLECTION } from "@storage/storageConfig";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { tasksGetAll } from "./tasksGetAll";

export async function taskRemoveById(id: number) {
  try {
    const storedTasks = await tasksGetAll();

    const tasks = storedTasks.filter((task) => task.id !== id);

    await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(tasks));
  } catch (error) {
    throw error;
  }
}
