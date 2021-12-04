import colors from "../constants/colors";
import fonts from "../constants/fonts";

const {
  size: { sm, md, lg, xl },
} = fonts;

type TextStyle = "sm" | "md" | "lg" | "xl";

// 확장성을 고려한 폰트 설정 함수
const typography = (
  textStyle: TextStyle = "md",
  color = colors.variable.black
) => {
  switch (textStyle) {
    case "sm":
      return `
        color: ${color};
        font-size: ${sm};
      `;

    case "md":
      return `
        color: ${color};
        font-size: ${md};
      `;

    case "lg":
      return `
        color: ${color};
        font-size: ${lg};
      `;

    case "xl":
      return `
        color: ${color};
        font-size: ${xl};
      `;

    default:
      return;
  }
};

export default typography;
