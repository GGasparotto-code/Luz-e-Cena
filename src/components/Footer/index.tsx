import FooterLogo from './FooterLogo'
import FooterInfo from './FooterInfo'
import styles from './Footer.module.css'
import FooterInstitucional from './FooterInstitutional'
import FooterSocial from './FooterSocial'
import FooterDevelopedBy from './FooterDevelop'

const Footer = () => {
  return (
    <>
    <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
            <FooterLogo />
            <FooterInfo />
            <FooterInstitucional />
            <FooterSocial />
        </div>
    </footer>
    <FooterDevelopedBy />
    </>
  )
}

export default Footer;