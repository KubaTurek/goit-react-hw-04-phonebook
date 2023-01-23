import css from './Filter.module.css';
import { usePhonebookContext } from './../../context/';

const Filter = () => {
  const { selectFilter } = usePhonebookContext();

  const filterFromInput = event => {
    selectFilter(event.target.value);
  };

  return (
    <div className={css.filter}>
      <label>
        Seacr contacts by name
        <input
          className={css.input}
          type="search"
          placeholder="search contact"
          onChange={filterFromInput}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
