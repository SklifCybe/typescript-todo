import React from 'react';

interface PropsTodoForm {
  addTodo: (text: string) => void
}

export const ToDoForm: React.FC<PropsTodoForm> = ({ addTodo }) => {
  const [title, setTitle] = React.useState<string>('');

  const titleHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyHandler = (event: React.KeyboardEvent) => {
    if (title === '') {
      return;
    }

    if (event.key === 'Enter') {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <div className="input-field">
      <input
        type="text"
        id="title"
        placeholder="Введите название задачи..."
        value={title}
        onChange={titleHandle}
        onKeyPress={keyHandler}
      />
      <label htmlFor="title" className="active">Введите название задачи...</label>
    </div>
  )
};