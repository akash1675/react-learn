import styles from "./ButtonContainer.module.css"

const ButtonContainer = () => {
    const ButtonNames = [
        "C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."
    ];

    return (
        <div className={styles.buttonContainer}>
            {ButtonNames.map((items) => (
                <button className={styles.button}>{items}</button>
            ))}
        </div>
    )
}



export default ButtonContainer;