import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASK_COLLECTION } from "@storage/storageConfig";
import { TaskDTO } from "src/models/task";

export async function tasksGetAll(): Promise<TaskDTO[]> {
  try {
    const storage = await AsyncStorage.getItem(TASK_COLLECTION);

    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw error;
  }
}
