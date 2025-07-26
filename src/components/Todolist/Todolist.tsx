import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import { DataTable, DataTableColumn } from 'mantine-datatable';
import { Text } from '@mantine/core';
import { Todo } from '../../TodoData';
import { TodoContext } from '@/App'; 
import {useContext} from 'react';

export default function Todolist() {
  const { todoData, setTodoData } = useContext(TodoContext);

  const handleCellClick = (record: Todo, column: DataTableColumn<Todo>) => {
    // Toggle edit mode when the title is clicked
    if (column.accessor === 'title') {
      const updatedData = todoData.map((todo) => 
        todo.id === record.id 
          ? { ...todo, title: {value: todo.title.value, editing: true} }
          : { ...todo, title: {value: todo.title.value, editing: false} }
      );
      setTodoData(updatedData);
    }
    // Toggle the done state when the checkbox is clicked
      if (column.accessor === 'done') {
      const updatedData = todoData.map((todo) => 
        todo.id === record.id ? { ...todo, done: !todo.done } : todo
      );
      setTodoData(updatedData);
    }
  }

  const handleInputChange = (record: Todo, newValue: string) => {
    const updatedData = todoData.map((todo) => 
      todo.id === record.id 
        ? { ...todo, title: { value: newValue, editing: true } }
        : todo
    );
    setTodoData(updatedData);
  }

  const columns = [
    { accessor: 'id', title: 'ID' },
    { accessor: 'done', title: 'Done', 
      render: ({ done }: Pick<Todo, 'done'>) => (
        <input type="checkbox" checked={done} readOnly /> 
      ),
    },
    { accessor: 'title', title: 'Title',
      render: (todo: Todo) => {
        const title = todo.title;
        const chars = title.value.length;
        const width = chars < 20 ? '140px' : `${chars * 7}px`;
        return title.editing ? (
          <input 
            type="text" 
            value={title.value} 
            style={{ width: `${width}` }}
            onChange={(e) => handleInputChange(todo, e.target.value)}
            autoFocus
          />
        ) : (
          <Text truncate='end' size='sm'>{title.value}</Text>
        );
      },
    },
    { accessor: 'comments', title: 'Comments', ellipsis: true,},
  ];

  return (
    <DataTable
      records={todoData}
      columns={columns}
      withTableBorder
      striped
      highlightOnHover
      onCellClick={({record, column}) => {
        handleCellClick(record as Todo, column);
        }
      }
    />
  );
}
