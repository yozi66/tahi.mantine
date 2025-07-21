import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import { DataTable } from 'mantine-datatable';

const data = [
  { id: 1, title: 'set up table columns', done: true, 
    comments: 'We start with title and comments'
  },
  { id: 2, title: 'add checkboxes', done: true, 
    comments: `Ops, there are two functions for checkboxes
    - multi-select: allows selecting multiple rows
    - task done: allows marking a task as done` 
  },
  { id: 3, title: 'make the checkbox clickable', done: false, 
    comments: `figure out how to make the checkbox clickable 
    and toggle the done state` 
  },
  { id: 4, title: 'prevent line breaks', done: false, 
    comments: `prevent line breaks in the table cells
    - use white-space: nowrap
    - use ellipsis for overflow text
    - help: https://icflorescu.github.io/mantine-datatable/examples/column-properties-and-styling/` 
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
  { accessor: 'title', title: 'Title' },
  { accessor: 'comments', title: 'Comments' },
];

export default function Todolist() {
  return (
    <DataTable
      records={data}
      columns={columns}
      withTableBorder
      striped
      highlightOnHover
    />
  );
}
