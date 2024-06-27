import { Container, Logo, Message, Title } from "./styles";
import clipboardPng from "@assets/clipboard.png" 

type ListEmptyProps = {
  title: string
  message: string;
};

export function ListEmpty({ message, title }: ListEmptyProps) {
  return (
    <Container>
      <Logo source={clipboardPng} />
      <Title>{title}</Title>
      <Message>{message}</Message>
    </Container>
  );
}
