import styles from "./landing.module.css";

/**
 * Vitrine "ao vivo" da landing. O vídeo já é uma captura completa da sala ao vivo
 * (traz selo AO VIVO, contador e chat embutidos), então o card é só o vídeo em loop —
 * sem nenhum overlay, pra não duplicar elementos.
 */
export function LiveDemo({ src, poster }: { src: string; poster?: string }) {
  return (
    <div className={styles.mock}>
      <video
        className={styles.liveVideo}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Prévia de uma aula ao vivo na SMU PRO"
      />
    </div>
  );
}
