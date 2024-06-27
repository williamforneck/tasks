import { TaskDTO } from "src/models/task";
import { Card, Container, Info, TextCard, Title } from "./styles";
import { Text } from "react-native";

type ListInfoProps = {
  tasks: TaskDTO[];
};

export function ListInfo({ tasks }: ListInfoProps) {
  const concluidas = tasks.filter((t) => t.concluida).length;
  const criadas = tasks.length - concluidas;

  return (
    <Container>
      <Info>
        <Title>Criadas</Title>
        <Card>
          <TextCard>{criadas}</TextCard>
        </Card>
      </Info>
      <Info>
        <Title secondary>Concluidas</Title>
        <Card>
          <TextCard>{concluidas}</TextCard>
        </Card>
      </Info>
    </Container>
  );
}
