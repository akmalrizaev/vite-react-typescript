import { useState, ChangeEvent } from 'react';

import { data } from './constants';

import styles from './home.module.css';
import { IData } from './interfaces';

const App = (): JSX.Element => {
  const [title, setTitle] = useState<string>();
  const [arr, setArr] = useState<IData[]>(data);

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setTitle(evt.target.value);
  };

  const handleSubmit = (): void => {
    if (!title?.length) return;
    const newData = {
      title: title,
      id: new Date().getTime(),
      description: 'description',
    };
    setArr([...arr, newData]);
    setTitle('');
  };

  const deleteItem = (id: number): void => {
    const newData = arr.filter((c) => c.id != id);
    setArr(newData);
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
            <div className={styles.delBtn}>
              <button onClick={() => deleteItem(c.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
