import style from './style.module.css'

const Layout = ({ id, title, desc, urlBg, colorBg }) => {
  const styleColorBg = colorBg ? {backgroundColor: colorBg} : {}
  return (
    <section className={style.root} id={id ? id : null} style={styleColorBg}>
      <div className={style.wrapper}>
        <article>
          <div className={style.title}>
            <h3>{title ? title : null}</h3>
            <span className={style.separator}></span>
          </div>
          <div className={style.desc, style.full}>
            <p>{desc ? desc : null}</p>
            {urlBg && <img src={urlBg} alt="I'm a picture. Are you confused?" />}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout