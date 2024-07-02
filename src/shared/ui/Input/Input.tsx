import classNames from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useState,
} from 'react';
import * as cls from './Input.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface InputProps extends HtmlInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = memo((porps: InputProps) => {
    const {
        className,
        value,
        placeholder,
        onChange,
        type = 'text',
        autoFocus,
        ...otherProps
    } = porps;

    const ref = React.useRef<HTMLInputElement>(null);

    const [isFocus, setIsFocus] = useState(false);

    const [caretPosition, setCaretPosition] = useState(0);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlure = () => {
        setIsFocus(false);
    };

    const onFocus = () => {
        setIsFocus(true);
    };

    const onselect = (e: any) => {
        setCaretPosition(e?.target.selectionStart || 0);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocus(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {
                placeholder && (
                    <div className={cls.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )
            }
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    onBlur={onBlure}
                    onFocus={onFocus}
                    className={cls.input}
                    onChange={onChangeHandler}
                    type={type}
                    value={value}
                    onSelect={onselect}
                    {...otherProps}
                />
                {isFocus && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});
