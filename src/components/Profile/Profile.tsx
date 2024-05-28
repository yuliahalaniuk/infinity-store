import css from "./Profile.module.css";
const Profile = () => {
  return (
    <div>
      <div className={css.head}>
        <div className={css.top}>
          <div className={css.userIcon}></div>

          <p>HatakavaD</p>
          <p>Creator Mode</p>

          <label className={css.switch}>
            <input type="checkbox" />
            <span className={`${css.slider} ${css.round}`}></span>
          </label>
        </div>

        <div className={css.headBottom}>
          <p>CEO of Infinity Store and CloudFlow</p>
          <p>Joined 04.05.2024</p>
        </div>
      </div>

      <div className={css.middleLine}>
        <ul className={css.achievementsList}>
          <li className={css.achItem}>
            <p>Games Loaded</p>
            <p>10</p>
          </li>

          <li className={css.achItem}>
            <p>Games Rate</p>
            <p>8/10</p>
          </li>

          <li className={css.achItem}>
            <p>Forum Message </p>
            <p>10783</p>
          </li>
        </ul>
        <ul className={css.achRightList}>
          <li className={css.achRightItem}>
            <p>Timer 1908h</p>
          </li>
          <li className={css.achRightItem}>
            <p>Level 61</p>
          </li>
        </ul>
      </div>

      <div className={css.mainBox}>
        <ul>
          {[
            "Workspace",
            "Instruments",
            "Analyze by AI",
            "Tech Support",
            "Account Info",
            "CashOut",
          ].map((str) => (
            <li key={str} className={css.listBtn}>
              <button type="button">{str}</button>
            </li>
          ))}
        </ul>

        <div className={css.borderBox}>
          <div className={css.btnsBox}>
            {[
              { title: "Import Game" },
              { title: "Import Photo" },
              { title: "Import Loader" },
            ].map(({ title }) => (
              <button key={title} type={"button"} className={css.whiteBtns}>
                {title}
              </button>
            ))}
          </div>

          <div className={css.borderBoxBottom}>
            <div className={css.left}>
              <p>Describe</p>
              <div className={css.smallBox}></div>
            </div>
            <div className={css.right}>
              <p>Game loaded on server!</p>
              <p>Waiting a approbation from moderator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
