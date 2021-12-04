type Justify =
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch"
  | "space-around"
  | "space-between"
  | "space-evenly";

type Align = "center" | "flex-start" | "flex-end" | "stretch" | "baseline";

type FlexDirection = "row" | "column";

// flexbox 커스텀하는 함수

const flexbox = (
  justify: Justify = "center",
  align: Align = "center",
  direction: FlexDirection = "row"
) => {
  return `
        display: flex;
        justify-content: ${justify};
        align-items: ${align};
        flex-direction: ${direction};
    `;
};

export default flexbox;
