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
        <Allotment.Pane minSize={65} >
          <Textarea
            label="Task comments"
            styles={{
              root: { height: '100%' },
              input: { height: `calc(100% - 30px)`, resize: 'none' },
              wrapper: { height: '100%' },
            }}
          /> 
        </Allotment.Pane>
      </Allotment>
    </Box>
  );
}
