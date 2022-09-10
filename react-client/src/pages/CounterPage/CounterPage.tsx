import { useAppDispatch, useAppSelector } from 'store/hooks';
import { decrement, increment, selectCounter } from 'store/reducers/countSlice';
import s from './CounterPage.module.scss';

const CounterPage = () => {
  const count = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();

  const decrementCounter = () => dispatch(decrement());
  const incrementCounter = () => dispatch(increment());

  return (
    <div className={s.counterWrapper}>
      <div>
        <div>{count}</div>
      </div>
      <div>
        <button type="button" onClick={decrementCounter}>
          -
        </button>
        <button type="button" onClick={incrementCounter}>
          +
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
