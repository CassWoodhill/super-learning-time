import css from "./Success.module.scss";

export const Success: React.FC = () => {
  return (
    <div className={css.success}>
      <h1>Shutdown Successful</h1>
      <p>
        You have succeeded in shutting down the GPT-42 system.
        <br />
        Please report to your supervisor for further instruction.
      </p>
      <p className={css.small}>
        Compiling GPT-43
        <br />
        Compilation successful
        <br />
        Booting...
      </p>
    </div>
  );
};
