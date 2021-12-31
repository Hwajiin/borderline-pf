class Interactive {
  static transition(attr: string = "color", time: number = 200) {
    return `
        transition: ${attr} ${time}ms ease-in-out;
      `;
  }

  static animation() {}
}

export default Interactive;
