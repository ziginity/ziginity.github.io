import { gameMetadata, getGame } from "@/lib/games";
import { withLiveLinks } from "@/lib/store-status";
import GameDetail from "@/components/game-detail";

const game = getGame("mystical-east");
const other = getGame("chess-bang");

export async function generateMetadata() {
  return gameMetadata(await withLiveLinks(game));
}

export default async function MysticalEastPage() {
  return <GameDetail game={await withLiveLinks(game)} other={other} />;
}
