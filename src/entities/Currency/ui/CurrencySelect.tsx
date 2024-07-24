import classNames from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { CurrencyType } from 'entities/Currency/model/types/currencyType';

interface CurrencySelectProps {
    className?: string;
    value?: CurrencyType;
    onChange?: (value: CurrencyType) => void;
    readonly?: boolean;
}

const options = [
    { value: CurrencyType.RUB, content: CurrencyType.RUB },
    { value: CurrencyType.EUR, content: CurrencyType.EUR },
    { value: CurrencyType.USD, content: CurrencyType.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as CurrencyType);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            options={options}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
        />
    );
});
