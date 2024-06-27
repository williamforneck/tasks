import { TaskDTO } from "src/models/task";
import { Checkbox, Container, Title } from "./styles";

import { TouchableOpacityProps } from "react-native";
import { ButtonIcon } from "@components/ButtonIcon";
import { Icon } from "@components/ButtonIcon/styles";
import { CheckCircle } from "phosphor-react-native";
import { Logo } from "@components/Header/styles";
import Check from "@assets/check.png";
import { CheckSvg } from "@components/Svgs/Check";
type TaskCardProps = TouchableOpacityProps & {
  task: TaskDTO;
  onFinish: (id: number, task: TaskDTO) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
};

export function TaskCard({ task, onFinish, onDelete, ...rest }: TaskCardProps) {
  return (
    <Container {...rest}>
      <Checkbox
        concluida={task.concluida}
        onPress={() => onFinish(task.id, task)}
      >
        {task.concluida && <CheckSvg />}
      </Checkbox>
      <Title concluida={task.concluida} numberOfLines={2}>
        {task.nome}
      </Title>
      <ButtonIcon
        style={{ position: "absolute", right: 0 }}
        onPress={() => onDelete(task.id)}
        type="SECONDARY"
        icon="delete"
      ></ButtonIcon>
    </Container>
  );
}
