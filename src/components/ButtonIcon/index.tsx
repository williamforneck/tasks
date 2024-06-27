import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
