type Stats = {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
};

type StatType = {
  hp: number;
  attack: number;
  defense: number;
  "special-attack": number;
  "special-defense": number;
  speed: number;
  [key: string]: number;
};

const StatsBox = ({ stats, type }: { stats: Stats[]; type: string }) => {
  const widthPercentages: StatType = {
    hp: (stats[0].base_stat / 255) * 100,
    attack: (stats[1].base_stat / 255) * 100,
    defense: (stats[2].base_stat / 255) * 100,
    "special-attack": (stats[3].base_stat / 255) * 100,
    "special-defense": (stats[4].base_stat / 255) * 100,
    speed: (stats[5].base_stat / 255) * 100,
  };
  const total = stats.reduce(
    (acc: number, stat: { base_stat: number }) => acc + stat.base_stat,
    0
  );

  const styles: any = {
    main: `flex flex-col text-center w-full sm:w-80 h-fit p-5 sm:p-10 text-${type}-d bg-${type}-l rounded-b`,
    row: `border-y-2 border-${type}-d`,
    hp: `bg-red-500/30 h-2 w-full rounded`,
    attack: `bg-yellow-500/30 h-2 w-full rounded`,
    defense: `bg-green-500/30 h-2 w-full rounded`,
    "special-attack": `bg-blue-500/30 h-2 w-full rounded`,
    "special-defense": `bg-indigo-500/30 h-2 w-full rounded`,
    speed: `bg-purple-500/30 h-2 w-full rounded`,
    hpBar: `bg-red-500 h-full rounded`,
    attackBar: `bg-yellow-500 h-full rounded`,
    defenseBar: `bg-green-500 h-full rounded`,
    "special-attackBar": `bg-blue-500 h-full rounded`,
    "special-defenseBar": `bg-indigo-500 h-full rounded`,
    speedBar: `bg-purple-500 h-full rounded`,
  };

  const formatStatName = (name: string) => {
    if (name === "special-attack") {
      return "Sp. Atk";
    } else if (name === "special-defense") {
      return "Sp. Def";
    } else if (name === "hp") {
      return "HP";
    } else {
      return name;
    }
  };

  return (
    <table className={styles.main}>
      <thead>
        <tr>
          <th>Stats</th>
        </tr>
      </thead>
      <tbody>
        {stats.map((stat, i) => (
          <tr className={styles.row} key={i}>
            <td className="flex flex-col items-center justify-center capitalize text-lg">
              {formatStatName(stat.stat.name) + ": "} <br />
              {stat.base_stat}
            </td>
            <td className={styles[stat.stat.name]}>
              <p
                className={styles[stat.stat.name + "Bar"]}
                style={{ width: widthPercentages[stat.stat.name] + "%" }}
              ></p>
            </td>
          </tr>
        ))}
      </tbody>
      <tbody>
        <tr>
          <td>Total: {total}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StatsBox;
