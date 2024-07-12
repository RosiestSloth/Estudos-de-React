import styles from './Frase.module.css'

function Frase() {
    var nome = 'Vinicius'
    return(
        <div className={styles.fraseContainer}>
            <p>Seu nome é {nome}</p>
            <p>Este é um componente com uma frase!</p>
        </div>
    )
}

export default Frase