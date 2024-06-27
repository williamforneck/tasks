import { TASK_COLLECTION } from "@storage/storageConfig";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { tasksGetAll } from "./tasksGetAll";
import { TaskDTO } from "src/models/task";

export async function taskUpdateById(id: number, task: TaskDTO) {
  try {
    const storedTasks = await tasksGetAll();

    const newTasks = storedTasks.map((t) => {
      if (t.id === id) {
        return task;
      }
      return t;
    });

    await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(newTasks));
  } catch (error) {
    throw error;
  }
}
