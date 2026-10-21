import { gameMetadata, getGame } from "@/lib/games";
import { withLiveLinks } from "@/lib/store-status";
import GameDetail from "@/components/game-detail";

const game = getGame("chess-bang");
const other = getGame("mystical-east");

export async function generateMetadata() {
  return gameMetadata(await withLiveLinks(game));
}

export default async function ChessBangPage() {
  return <GameDetail game={await withLiveLinks(game)} other={other} />;
}
