import style from './style.module.css'

const Layout = ({ id, title, urlBg, colorBg, children }) => {
  const styleSection = {}
  if (urlBg) {
    styleSection.backgroundImage = `url(${urlBg})`
  }
  if (colorBg) {
    styleSection.backgroundColor = colorBg
  }
  return (
    <section className={style.root} id={id ? id : ""} style={styleSection}>
      <div className={style.wrapper}>
        <article>
          <div className={style.title}>
            {title && <h3>{title}</h3>}
            <span className={style.separator}></span>
          </div>
          <div className={`${style.desc} ${style.full}`}>
            {children}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout