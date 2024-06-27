import { AppError } from "@utils/AppError";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASK_COLLECTION } from "@storage/storageConfig";
import { tasksGetAll } from "./tasksGetAll";

export async function taskCreate(newTask: string) {
  try {
    const storedTasks = await tasksGetAll();

    const storage = JSON.stringify([
      ...storedTasks,
      { id: Math.random(), nome: newTask, concluida: false },
    ]);

    const taskAlreadyExists = storedTasks.some((t) => t.nome === newTask);

    if (taskAlreadyExists) {
      throw new AppError("Ja existe uma task cadastrada com esse nome");
    }

    await AsyncStorage.setItem(TASK_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
