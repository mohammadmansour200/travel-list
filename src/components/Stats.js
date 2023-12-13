export default function Stats({ items }) {
  const itemsNum = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedItemsPer = Math.round((packedItems / itemsNum) * 100);

  if (!itemsNum)
    return (
      <p className="stats">Start adding some items to your packing list</p>
    );

  return (
    <footer className="stats">
      <em>
        {packedItemsPer === 100
          ? "You got everything! Ready to go"
          : `You have ${itemsNum} items on your list, and you've already packed
        ${packedItems} (${packedItemsPer}%)`}
      </em>
    </footer>
  );
}
