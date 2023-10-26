const AbilitiesBox = ({
  abilities,
  type,
}: {
  abilities: any[];
  type: string;
}) => {
  const styles = {
    main: `flex flex-col text-center h-fit p-10 bg-${type}-l rounded`,
    heading: `text-3xl font-bold text-${type}-d`,
    list: `capitalize text-${type}-d`,
    listItem: `py-2`,
    hiddenAb: `text-sm  text-${type}-d`,
  };

  return (
    <div className={styles.main}>
      <h3 className={styles.heading}>Abilities:</h3>
      <ul className={styles.list}>
        {abilities.map((ability, index) => {
          return (
            <li className={styles.listItem} key={index}>
              {ability.ability.name}
              <br />{" "}
              <span className={styles.hiddenAb}>
                {ability.is_hidden ? " (Hidden Ability)" : ""}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AbilitiesBox;
