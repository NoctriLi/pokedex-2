


const HeldItemsBox = ({ heldItems, type } : {heldItems: any[], type: string}) => {


    const styles = {
        main: `flex flex-col text-center h-fit p-10 bg-${type}-l rounded`,
        heading: `text-3xl font-bold text-${type}-d`,
        list: `capitalize text-${type}-d`,
        listItem: `py-2`,
        hiddenAb: `text-sm  text-${type}-d`

    }


  return (
    <div className={styles.main}>
      <h3 className={styles.heading}>Rare Items:</h3>
      <ul className={styles.list}>
        {heldItems.length > 0 ? heldItems.map((item, index) => {
          return <li className={styles.listItem} key={index}>{item.item.name }</li>;
        }) : <li className={styles.listItem}>None</li>}
      </ul>
    </div>
  );
};

export default HeldItemsBox;