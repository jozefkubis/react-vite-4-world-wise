import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Jozef Kubis - UDEMY
          react course 2024.
        </p>
      </footer>
    </div>
  )
}

export default Footer
