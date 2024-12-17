export abstract class BaseModel {
    createdAt: Date;
  
    constructor() {
      this.createdAt = new Date();
    }
  
    abstract validate(): void;
  }