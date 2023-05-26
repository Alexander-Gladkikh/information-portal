import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();

    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    const { t } = useTranslation();

    return (
        <div>
            <h1>
                {counterValue}
            </h1>
            <Button onClick={increment}>
                {t('incremetnt')}
            </Button>
            <Button onClick={decrement}>
                {t('decrement')}
            </Button>
        </div>
    );
};
