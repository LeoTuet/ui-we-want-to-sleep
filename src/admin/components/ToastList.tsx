import { useDispatch, useSelector } from "react-redux";

import { actions, selectToasts } from "../../stores/toasts";
import { Toast } from "./Toast";
import styles from "./Toast.module.scss";

export function ToastList() {
  const dispatch = useDispatch();
  const { toasts } = useSelector(selectToasts);

  return (
    <div className={styles.toastList}>
      {toasts.map((t, i) =>
        t == null ? null : (
          <Toast
            key={i}
            {...t}
            onClose={() => dispatch(actions.removeToastIndex(i))}
          />
        )
      )}
    </div>
  );
}
