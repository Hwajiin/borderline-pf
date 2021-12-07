class Hopscotch {
  private whole: number;

  constructor(private lengthOfList: number) {
    this.lengthOfList = lengthOfList;

    this.whole = this.sumUpToLength(this.lengthOfList);
  }

  private sumUpToLength(lengthOfList: number): number {
    let total = 0;
    for (let i = 1; i <= lengthOfList; i++) {
      total = total + i;
    }
    return total;
  }

  getPortion(index: number, reverse: boolean = true): number {
    const part = reverse ? this.lengthOfList - index : index;
    return (part / this.whole) * 100;
  }
}

export default Hopscotch;
