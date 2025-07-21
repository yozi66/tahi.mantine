import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import { DataTable } from 'mantine-datatable';
import { comment } from 'postcss';

const data = [
  { id: 1, title: 'set up table columns',
    comments: 'We start with title and comments'
  },
  { id: 2, title: 'add checkboxes', 
    comments: `ops, there are two functions for checkboxes
    - multi-select: allows selecting multiple rows
    - task done: allows marking a task as done` 
  },
];

const columns = [
  { accessor: 'id', title: 'ID' },
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
