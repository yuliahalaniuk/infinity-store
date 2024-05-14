import css from "./Community.module.css";

const Community = () => {
  return (
    <section className={css.communitySection}>
      <div className={css.container}>
        <div className={css.leftSide}>
          <div className={css.cell}>
            <p className={css.subTitle}>Home</p>
            <p className={css.helperText}>Read or post something new</p>
          </div>
          <div className={css.cell}>
            <p className={css.subTitle}>Category</p>
            <p className={css.helperText}>Games/Mods/Programs</p>
          </div>
        </div>
        <div className={css.rightSide}>
          <div className={css.cell}>
            <p className={css.subTitle}>Clube</p>
            <p className={css.helperText}>Give reward by support!</p>
          </div>
          <div className={css.cell}>
            <p className={css.subTitle}>Other</p>
            <p className={css.helperText}>Friend/Groups and other activities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
