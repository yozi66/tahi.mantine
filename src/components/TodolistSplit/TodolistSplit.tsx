import {Box, Textarea} from '@mantine/core';
import Todolist from '../Todolist/Todolist';
import { Allotment } from 'allotment';

export default function TodolistSplit() {
  return (
    <Box h='calc(100vh - var(--app-shell-header-height) - 32px)' 
      style={{display: 'flex', flex: 1 }}
    >
      <Allotment vertical>
        <Allotment.Pane minSize={50} >
          <Todolist />
        </Allotment.Pane>
        <Allotment.Pane minSize={50} >
          <textarea style={{ width: '100%', height: `calc(100% - 1px)`, resize: 'none' }} /> 
        </Allotment.Pane>
      </Allotment>
    </Box>
  );
}
