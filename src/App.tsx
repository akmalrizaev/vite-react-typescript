import { useState, ChangeEvent } from 'react';

import styles from './home.module.css';
import { IData } from './interfaces/index.js';

const App = (): JSX.Element => {
  const data: IData[] = [
    { title: 'Omar', id: 1, description: 'Description' },
    { title: 'Osman', id: 1, description: 'Description' },
    { title: 'Abdulloh', id: 1, description: 'Description' },
  ];

  const [title, setTitle] = useState<string>();
  const [arr, setArr] = useState<IData[]>(data);

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setTitle(evt.target.value);
  };

  const handleSubmit = (): void => {
    if (!title?.length) return;
    setTitle('');
  };

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>APP Todo</h1>

      <input
        placeholder="Enter todo"
        value={title}
        onChange={changeHandler}
        className={styles.input}
      />
      <button onClick={handleSubmit} className={styles.button}>
        Add Todo
      </button>

      <div className={styles.card}>
        {arr.map((c) => (
          <div key={c.id} className={styles.cardItem}>
            <p>{c.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
