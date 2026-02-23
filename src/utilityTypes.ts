interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  assignedTo: string;
}

/// how to do all fileds optional
// using partial
type PartialTodo = Partial<Todo>;

/// how to do all fileds required
type requiredTodo = Required<Todo>;

/// how to do all fileds readonly
type ReadonlyTodo = Readonly<Todo>;

// we want to create new type just usig title and completed usijg pick
type TodoPreview = Pick<Todo, 'title' | 'completed'>;

// create a type except createdAt
type TodowithoutcreatedAT = Omit<Todo, 'createdAt'>;
