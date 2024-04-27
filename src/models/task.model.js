export class TaskModel {
  constructor(id, name, completed) {
    this.id = id;
    this.name = name;
    this.completed = completed;
  }

  create(id, name, completed) {
    return {
      id,
      name,
      completed,
    };
  }
}
