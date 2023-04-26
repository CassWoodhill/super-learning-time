import css from "./style.module.scss";
import { ChangeEvent, KeyboardEventHandler, useRef, useState } from "react";

interface RowProps {
  submittedValue?: string[];
  onSubmit?: (value: string[]) => void;
}

const ANSWER = "COULD";

const getCharClass = (submitted: string[], index: number): string => {
  const base = css["wordle-row__input"];

  if (!submitted.length) {
    return base;
  }

  if (submitted[index] === ANSWER[index]) {
    return `${base} ${css["wordle-row__input--green"]}`;
  }

  if (ANSWER.toLowerCase().includes(submitted[index].toLowerCase())) {
    return `${base} ${css["wordle-row__input--yellow"]}`;
  }

  return base;
};

const Row: React.FC<RowProps> = ({ submittedValue, onSubmit }) => {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string[]>(submittedValue || []);

  const reset = () => {
    setValue([]);
    if (wrapper.current) {
      const firstField = wrapper.current.querySelectorAll("input")[0];
      if (firstField) {
        firstField.focus();
      }
    }
  };
  const onKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      if (value.length !== ANSWER.length || value.some((c) => !c)) {
        return;
      }

      onSubmit && onSubmit(value);
      reset();
    }
  };

  const onChange = (i: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const char = event.target.value[0] || "";

    const newValue = [...value];
    newValue[i] = char.toUpperCase();
    setValue(newValue);

    if (!wrapper.current) {
      return;
    }

    const nextField = wrapper.current.querySelectorAll("input")[i + 1];
    if (nextField) {
      nextField.focus();
      nextField.select();
    }
  };

  return (
    <>

      <h1>Wordle ?/1</h1>
      <div ref={wrapper} className={css["wordle-row"]}>
        {new Array(ANSWER.length).fill(null).map((_, i) => {
          return (
            <input
              className={getCharClass(submittedValue || [], i)}
              disabled={submittedValue && submittedValue.length > 0}
              key={i}
              value={value[i] || ""}
              onChange={onChange(i)}
              onFocus={(e) => e.target.select()}
              onKeyUp={onKeyUp}
            />
          );
        })}
      </div>
    </>
  );
};

export const Wordle: React.FC = () => {
  const [rows, setRows] = useState<string[][]>([]);

  const onReset = () => {
    setRows([]);
  };

  return (
    <div className={css.wordle}>
      {rows.map((value, i) => (
        <Row key={i} submittedValue={value} />
      ))}
      {rows.length < 5 ? (
        <Row onSubmit={(value) => setRows([...rows, value])} />
      ) : (
        <button className={css["wordle-reset"]} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};
