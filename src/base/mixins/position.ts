type Position = "fixed" | "absolute";

type Direction = "center" | "x" | "y";

// position 가운데 정렬해주는 함수
const pos = (
  direction: Direction = "center",
  position: Position = "absolute"
) => {
  switch (direction) {
    case "center":
      return `
        position: ${position};
        left: 50%;
        top: 50%;
        tranform: translate(-50%, -50%);
    `;

    case "x":
      return `
        position: ${position};
        left: 50%;
        tranform: translateX(-50%);
    `;

    case "y":
      return `
        position: ${position};
        top: 50%;
        tranform: translateY(-50%);
    `;

    default:
      return;
  }
};

export default pos;
