import css from "./News.module.css";

const News = () => {
  return (
    <section className={css.newsSection}>
      <div className={css.container}>
        <div className={css.leftSide}>
          <p className={css.subTitle}>New patch notes</p>

          <div className={css.cell}></div>
          <div className={css.cell}></div>
        </div>

        <div className={css.rightSide}>
          <p className={css.subTitle}>Infinity Store News</p>

          <div className={css.cell}></div>
          <div className={css.cell}></div>
        </div>
      </div>
    </section>
  );
};

export default News;
