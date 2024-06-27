import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { Container, ContainerData, InputWithButton } from "./styles";
import { FlatList } from "react-native";
import { TaskCard } from "@components/TaskCard";
import { Header } from "@components/Header";
import { ListEmpty } from "@components/ListEmpty";
import { tasksGetAll } from "@storage/task/tasksGetAll";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { taskCreate } from "@storage/task/taskCreate";
import { TaskDTO } from "src/models/task";
import { taskUpdateById } from "@storage/task/taskUpdateById";
import { taskRemoveById } from "@storage/task/taskRemoveByName";
import { ListInfo } from "@components/ListInfo";

export default function Tasks() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<TaskDTO[]>([]);

  const getTasks = async () => {
    try {
      const data = await tasksGetAll();

      setTasks(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const addTask = async () => {
    if (!task.length) return;

    try {
      await taskCreate(task);
      getTasks();
      setTask("");
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const handleFinish = async (id: number, task: TaskDTO) => {
    try {
      await taskUpdateById(id, {
        ...task,
        concluida: !task.concluida,
      });
      await getTasks();
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await taskRemoveById(id);
      getTasks();
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useFocusEffect(
    useCallback(() => {
      getTasks();
    }, [])
  );

  return (
    <Container dark>
      <Header />
      <ContainerData>
        <InputWithButton>
          <Input
            onChangeText={setTask}
            placeholder="Adicione uma nova tarefa"
            value={task}
          ></Input>
          <ButtonIcon onPress={addTask} icon="add"></ButtonIcon>
        </InputWithButton>
        <ListInfo tasks={tasks}></ListInfo>
        <FlatList
          data={tasks}
          keyExtractor={(item) => "" + item.id}
          renderItem={({ item }) => (
            <TaskCard
              onFinish={handleFinish}
              onDelete={handleDelete}
              task={item}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty title="Você ainda não tem tarefas cadastradas" message="Crie tarefas e organize seus itens a fazer" />
          )}
          contentContainerStyle={tasks.length === 0 && { flex: 1 }}
          showsVerticalScrollIndicator={false}
        />
      </ContainerData>
    </Container>
  );
}
