import { notFound } from "next/navigation";
import { getLiveBySlug } from "@/lib/actions/lives";
import { LiveRoom } from "@/components/live/live-room";

export default async function SalaAoVivoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getLiveBySlug(slug);
  if (!event) notFound();

  // O chat entra na Task 6; por ora a sala já monta e o player já toca.
  return <LiveRoom event={event} chatSlot={null} />;
}
