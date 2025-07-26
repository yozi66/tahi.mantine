const items = [
  { id: 1, title: { value: 'set up table columns'}, done: true, 
    comments: 'We start with title and comments'
  },
  { id: 2, title: { value: 'add checkboxes'}, done: true, 
    comments: `Ops, there are two functions for checkboxes
    - multi-select: allows selecting multiple rows
    - task done: allows marking a task as done` 
  },
  { id: 3, title: { value: 'make the checkbox clickable'}, done: true, 
    comments: `figure out how to make the checkbox clickable 
    and toggle the done state` 
  },
  { id: 4, title: { value: 'prevent line breaks'}, done: true, 
    comments: `prevent line breaks in the table cells
    - use ellipsis for overflow text
    - help: https://icflorescu.github.io/mantine-datatable/examples/column-properties-and-styling/` 
  },
  { id: 5, title: { value: 'electron prototype'}, done: false, 
    comments: `prepare for load and save of the todo list
    - use localStorage for persistence
    - use electron for desktop app`
  },
  { id: 6, title: { value: 'define the concept for editing todos'}, done: true, 
    comments: `decide how to edit todos, in place or below the table
    - in place: edit the title directly in the table
    - clicking a row copies the comments to the textarea below the table
    - editing the comments in the textarea updates the table
    `
  },
  { id: 7, title: { value: 'add in-place editor for the title'}, done: true, 
    comments: `implement an in-place editor for the title
    - clicking the title opens an input field`
  },
  { id: 8, title: { value: 'add editor for comments'}, done: false, 
    comments: `the last clicked line is selected
    - clicking a row copies the comments to the textarea below the table
    - the textarea is editable
    - editing the comments in the textarea updates the table`
  },
  { id: 9, title: { value: 'add split layout'}, done: true, 
    comments: `add a splitter between the table and the textarea
    - use a library like react-split-pane or allotment
    - the splitter should allow resizing the textarea
    - the textarea should be at least 50px high`
  },
];

type EditableString = {
  value: string;
  editing?: boolean;
};

export type TodoItem = {
  id: number;
  title: EditableString;
  done: boolean;
  comments: string;
};

export type TahiState = {
  selectedItemId?: number;
  todoItems: TodoItem[];
}

export const sampleState: TahiState = {
  selectedItemId: undefined,
  todoItems: items,
};
