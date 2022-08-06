import React from 'react';
import { ColumnContainer, ColumnTitle } from "./styles"
import { Card } from './Card'
import { AddNewItem } from './AddNewItem'
import { useAppState } from './state/AppStateContext'

type ColumnProps = {
  text: string
  id: string
}

export const Column = ({ text, id }: React.PropsWithChildren<ColumnProps>) => { 
  const { getTasksByListId } = useAppState()

  const tasks = getTasksByListId(id)

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map(task => <Card text={task.text} key={task.id} id={task.id} />)}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};