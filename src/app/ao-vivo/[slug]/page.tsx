import { notFound } from "next/navigation";
import { getLiveBySlug } from "@/lib/actions/lives";
import { listLiveMessages } from "@/lib/actions/live-chat";
import { LiveRoom } from "@/components/live/live-room";
import { LiveChat } from "@/components/live/live-chat";

export default async function SalaAoVivoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getLiveBySlug(slug);
  if (!event) notFound();

  const mensagens = await listLiveMessages(event.id);

  return <LiveRoom event={event} chatSlot={<LiveChat liveEventId={event.id} mensagensIniciais={mensagens} />} />;
}
