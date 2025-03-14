export class House {
  walls: string = "";
  roof: string = "";
  floor: string = "";

  show(): void {
    console.log(
      `House with ${this.walls} walls, ${this.roof} roof, and ${this.floor} floor.`
    );
  }
}
