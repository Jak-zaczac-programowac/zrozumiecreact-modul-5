import { useCallback, useState } from "react";
import styles from "./App.module.css";
import { Panel } from "./components/Panel/Panel";
import { Button } from "./components/Button/Button";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";

function App() {
    const [isPanelShown, setIsPanelShown] = useState(true);
    const [error, setError] = useState(null);

    const handleError = useCallback((error) => {
        setError(error.message);
        setTimeout(() => {
            setError(null);
        }, 3000);
    }, []);

    return (
        <main className={styles.main}>
            <Button
                onClick={() =>
                    setIsPanelShown((prevIsPanelShown) => !prevIsPanelShown)
                }
            >
                {isPanelShown ? "Schowaj panel" : "Pokaż panel"}
            </Button>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {isPanelShown && <Panel onError={handleError} />}
        </main>
    );
}

export default App;
