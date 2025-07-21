import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import { DataTable } from 'mantine-datatable';

const data = [
  { id: 1, name: 'Alice', age: 28 },
  { id: 2, name: 'Bob', age: 34 },
];

const columns = [
  { accessor: 'id', title: 'ID' },
  { accessor: 'name', title: 'Name' },
  { accessor: 'age', title: 'Age' },
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
