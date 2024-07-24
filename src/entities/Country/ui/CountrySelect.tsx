import classNames from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { CountryType } from 'entities/Country/model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: CountryType;
    onChange?: (value: CountryType) => void;
    readonly?: boolean;
}

const options = [
    { value: CountryType.Russian, content: CountryType.Russian },
    { value: CountryType.Armenian, content: CountryType.Armenian },
    { value: CountryType.Belarus, content: CountryType.Belarus },
    { value: CountryType.Kazakhstan, content: CountryType.Kazakhstan },
    { value: CountryType.Ukrain, content: CountryType.Ukrain },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as CountryType);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
        />
    );
});
