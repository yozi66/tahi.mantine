import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import { DataTable, DataTableColumn } from 'mantine-datatable';
import { useState } from 'react';

const data = [
  { id: 1, title: 'set up table columns', done: true, 
    comments: 'We start with title and comments'
  },
  { id: 2, title: 'add checkboxes', done: true, 
    comments: `Ops, there are two functions for checkboxes
    - multi-select: allows selecting multiple rows
    - task done: allows marking a task as done` 
  },
  { id: 3, title: 'make the checkbox clickable', done: true, 
    comments: `figure out how to make the checkbox clickable 
    and toggle the done state` 
  },
  { id: 4, title: 'prevent line breaks', done: true, 
    comments: `prevent line breaks in the table cells
    - use ellipsis for overflow text
    - help: https://icflorescu.github.io/mantine-datatable/examples/column-properties-and-styling/` 
  },
  { id: 5, title: 'electron prototype', done: false, 
    comments: `prepare for load and save of the todo list
    - use localStorage for persistence
    - use electron for desktop app`
  },
  { id: 6, title: 'define the concept for editing todos', done: false, 
    comments: `decide how to edit todos, in place or below the table
    - in place: edit the title and comments directly in the table
    - below the table: show a form to edit the selected todo`
  },
];

type Todo = {
  id: number;
  title: string;
  done: boolean;
  comments: string;
};

const columns = [
  { accessor: 'id', title: 'ID' },
  { accessor: 'done', title: 'Done', 
    render: ({ done }: Pick<Todo, 'done'>) => (
      <input type="checkbox" checked={done} readOnly /> 
    ),
  },
  { accessor: 'title', title: 'Title', ellipsis: true,},
  { accessor: 'comments', title: 'Comments', ellipsis: true,},
];

export default function Todolist() {
  const [todoData, setTodoData] = useState(data);

  const updateTodoData = (record: Todo, column: DataTableColumn<Todo>) => {
      if (column.accessor === 'done') {
      // Toggle the done state when the checkbox is clicked
      const updatedData = todoData.map((todo) => 
        todo.id === record.id ? { ...todo, done: !todo.done } : todo
      );
      setTodoData(updatedData);
    }
  }

  return (
    <DataTable
      records={todoData}
      columns={columns}
      withTableBorder
      striped
      highlightOnHover
      onCellClick={({record, column}) => {
        updateTodoData(record as Todo, column);
        }
      }
    />
  );
}
