export default function calculateMultiplier(mineCount, gemsFound) {
  const TOTAL_TILES = 25;
  const HOUSE_EDGE = 0.99; // 1% house edge

  let multiplier = 1;

  for (let i = 0; i < gemsFound; i++) {
    multiplier *= (TOTAL_TILES - i) / (TOTAL_TILES - mineCount - i);
  }

  return Number((multiplier * HOUSE_EDGE).toFixed(2));
}