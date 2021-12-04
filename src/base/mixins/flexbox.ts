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
        flex-direction: ${direction};
        justify-contents: ${justify};
        align-items: ${align};
    `;
};

export default flexbox;
