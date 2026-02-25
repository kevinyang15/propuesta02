import { useEffect, useMemo, useState } from "react";

const INSTAGRAM_BENCHMARK = "https://www.instagram.com/institutoalmaviva";

// Placeholders cuando las imágenes de Instagram no cargan (URLs expiran o bloquean hotlinking)
const AVATAR_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ccircle fill='%231f1f1f' cx='24' cy='24' r='24'/%3E%3Ccircle fill='%239aa3b2' cx='24' cy='18' r='6'/%3E%3Cpath fill='%239aa3b2' d='M12 38c0-6 5.4-10 12-10s12 4 12 10v2H12v-2z'/%3E%3C/svg%3E";
const POST_IMAGE_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='200' viewBox='0 0 320 200'%3E%3Crect fill='%231f1f1f' width='320' height='200'/%3E%3Ctext fill='%239aa3b2' font-size='14' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EImagen no disponible%3C/text%3E%3C/svg%3E";

async function loadJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error("Fetch failed");
  const text = await response.text();
  const raw = text.startsWith("L1:") ? text.slice(3) : text;
  return JSON.parse(raw);
}

function formatDate(value) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function App() {
  const [followers, setFollowers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [followersStatus, setFollowersStatus] = useState("loading");
  const [postsStatus, setPostsStatus] = useState("loading");

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const data = await loadJson("/followers.json");
        const list = Array.isArray(data) ? data : [];
        if (active) {
          setFollowers(list);
          setFollowersStatus("ready");
        }
      } catch {
        if (active) setFollowersStatus("error");
      }
    })();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const data = await loadJson("/post.json");
        const list = Array.isArray(data) ? data : [];
        if (active) {
          setPosts(list);
          setPostsStatus("ready");
        }
      } catch {
        if (active) setPostsStatus("error");
      }
    })();
    return () => { active = false; };
  }, []);

  const followersStats = useMemo(() => {
    const total = followers.length;
    const privateCount = followers.filter((f) => f.isPrivate).length;
    const verified = followers.filter((f) => f.isVerified).length;
    return {
      total,
      privateCount,
      publicCount: total - privateCount,
      verified,
      privatePct: total ? Math.round((privateCount / total) * 100) : 0,
    };
  }, [followers]);

  const uniquePosts = useMemo(() => {
    const seen = new Set();
    return posts.filter((p) => {
      const key = p.postUrl || p.postId;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [posts]);

  const topPosts = useMemo(() => {
    return [...uniquePosts]
      .sort((a, b) => (b.likeCount || 0) - (a.likeCount || 0))
      .slice(0, 5);
  }, [uniquePosts]);

  return (
    <div className="app">
      <header className="hero-header">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://hegemon.com.ar/wp-content/uploads/2025/08/hgmn-bg.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay" />
        <div className="container hero">
          <div>
            <div className="brand">
              <span className="brand-label">Propuesta de servicio</span>
              <span className="badge">Social Listening · Inteligencia competitiva</span>
            </div>
            <h1>Social Listening, Gestión de Reputación y Análisis de Competencia</h1>
            <p>
              Implementar un sistema de social listening 24/7 e inteligencia competitiva:
              detectar y minimizar comentarios negativos, monitorear a la competencia
              (ej. <a href={INSTAGRAM_BENCHMARK} target="_blank" rel="noreferrer">@institutoalmaviva</a>),
              anticipar crisis y entregar insights accionables.
            </p>
          </div>
          <div className="hero-card">
            <h3>Objetivos</h3>
            <ul>
              <li>✔️ Evitar malos comentarios y monitorear 24/7.</li>
              <li>✔️ Estudiar a la competencia: posteos, seguidores, ads en Meta.</li>
              <li>✔️ Analizar seguidores y publicaciones (scrapeo demostrable).</li>
              <li>✔️ Activar a la comunidad para comentar sobre la competencia y dar a conocer sus falencias.</li>
              <li>✔️ Ciberseguridad: análisis de vulnerabilidades en los sistemas de la competencia para no repetir sus errores.</li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section className="container">
          <h2>Alcance del servicio</h2>
          <div className="grid">
            <div className="card">
              <h3>Social Listening 24/7</h3>
              <p className="muted">
                Monitoreo continuo de comentarios en publicaciones propias (Instagram, Facebook),
                mensajes directos, menciones y palabras clave. Clasificación por sentimiento y
                protocolos de respuesta. Reportes semanales o quincenales.
              </p>
              <span className="pill">Sentimiento · Alertas · Guías de respuesta</span>
            </div>
            <div className="card">
              <h3>Análisis de competencia</h3>
              <p className="muted">
                Seguidores, publicaciones y ads de la competencia. Segmentación de audiencia,
                benchmarking de contenido y performance. Identificación de ángulos ganadores
                y oportunidades.
              </p>
              <span className="pill">Seguidores · Publicaciones · Ads</span>
            </div>
            <div className="card">
              <h3>Reputación y Ads Meta</h3>
              <p className="muted">
                Monitoreo de comentarios públicos en publicaciones de la competencia para
                insights. Revisión de biblioteca de anuncios de Meta: campañas, creatividades
                y mensajes clave.
              </p>
              <span className="pill">Comunidad · Insights · Meta Ads</span>
            </div>
            <div className="card">
              <h3>Ciberseguridad y vulnerabilidades</h3>
              <p className="muted">
                Análisis de vulnerabilidades en los sistemas (sitios web, infraestructura,
                posibles fallos o backdoors) de la competencia. Identificar sus errores de
                seguridad para que no los repitas: reforzar tus propios sistemas y evitar
                los mismos puntos débiles.
              </p>
              <span className="pill">Vulnerabilidades · Buenas prácticas</span>
            </div>
          </div>
        </section>

        <section className="container">
          <h2>Demostración: seguidores de la competencia</h2>
          <p className="muted" style={{ marginBottom: 16 }}>
            Muestra real de seguidores de{" "}
            <a href={INSTAGRAM_BENCHMARK} target="_blank" rel="noreferrer">@institutoalmaviva</a>.
            Podemos segmentar audiencia, % privados/públicos, perfiles relevantes y oportunidades.
          </p>
          {followersStatus === "loading" && <p className="muted">Cargando datos...</p>}
          {followersStatus === "error" && <p className="muted">Error al cargar datos de seguidores.</p>}
          {followersStatus === "ready" && (
            <>
              <div className="sentiment">
                <div className="card">
                  <div className="kpi">{followersStats.total}</div>
                  <div className="muted">Seguidores analizados</div>
                </div>
                <div className="card">
                  <div className="value label-positive">{followersStats.publicCount}</div>
                  <div className="muted">Perfiles públicos</div>
                </div>
                <div className="card">
                  <div className="value label-neutral">{followersStats.privateCount}</div>
                  <div className="muted">Perfiles privados</div>
                </div>
                <div className="card">
                  <div className="value label-positive">{followersStats.verified}</div>
                  <div className="muted">Verificados</div>
                </div>
              </div>
              <div className="card">
                <h3>Muestra de seguidores (primeros 12)</h3>
                <div className="followers-grid">
                  {followers.slice(0, 12).map((f) => (
                    <a
                      key={f.id || f.username}
                      href={f.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="follower-card link-card"
                    >
                      <img
                        src={f.imgUrl || AVATAR_PLACEHOLDER}
                        alt=""
                        className="follower-avatar"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = AVATAR_PLACEHOLDER;
                        }}
                      />
                      <div className="follower-info">
                        <strong>@{f.username}</strong>
                        <span className="muted">{f.fullName || "—"}</span>
                        <span className="pill small">
                          {f.isPrivate ? "Privado" : "Público"}
                          {f.isVerified ? " ✓" : ""}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}
        </section>

        <section className="container">
          <h2>Demostración: publicaciones de la competencia</h2>
          <p className="muted" style={{ marginBottom: 16 }}>
            Posts recientes de @institutoalmaviva: caption, likes, comentarios, reproducciones.
            Usamos estos datos para benchmarking de contenido, horarios y formatos ganadores.
          </p>
          {postsStatus === "loading" && <p className="muted">Cargando datos...</p>}
          {postsStatus === "error" && <p className="muted">Error al cargar datos de publicaciones.</p>}
          {postsStatus === "ready" && (
            <div className="card">
              <h3>Top 5 posts por engagement (likes)</h3>
              <div className="posts-list">
                {topPosts.map((p) => (
                  <a
                    key={p.postId || p.postUrl}
                    href={p.postUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="tweet link-card"
                  >
                    <div className="tweet-header">
                      <strong>@{p.username || "institutoalmaviva"}</strong>
                      <span className="tag neutral">
                        {p.type || "Post"} · {formatDate(p.pubDate)}
                      </span>
                    </div>
                    <div className="tweet-meta">
                      ❤ {p.likeCount ?? 0} · 💬 {p.commentCount ?? 0}
                      {p.playCount != null ? ` · ▶ ${p.playCount}` : ""}
                    </div>
                    <div className="tweet-body">
                      {(p.imgUrl || POST_IMAGE_PLACEHOLDER) && (
                        <img
                          className="tweet-image"
                          src={p.imgUrl || POST_IMAGE_PLACEHOLDER}
                          alt=""
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = POST_IMAGE_PLACEHOLDER;
                          }}
                        />
                      )}
                      <p>
                        {(p.description || p.caption || "").slice(0, 280)}
                        {(p.description || p.caption || "").length > 280 ? "…" : ""}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="container">
          <h2>Comunidad y reputación frente a la competencia</h2>
          <div className="grid">
            <div className="card">
              <h3>Poner a la comunidad en acción</h3>
              <p className="muted">
                Podemos usar a la comunidad para hacer comentarios sobre la competencia y dar
                a conocer sus falencias en sus propias publicaciones: señalar debilidades,
                reclamos no resueltos o contradicciones, de forma que el público vea con
                claridad las diferencias a tu favor.
              </p>
              <span className="pill">Comentarios · Visibilidad de falencias</span>
            </div>
            <div className="card">
              <h3>Monitoreo e insights</h3>
              <p className="muted">
                Monitorear comentarios públicos en sus posts: reclamos recurrentes,
                insatisfacciones, dudas sin responder. Usar esos insights para tu estrategia
                y para orientar a la comunidad. Refuerzo con testimonios, reviews y referral
                a favor de tu marca.
              </p>
              <span className="pill">Insights · Referral</span>
            </div>
          </div>
        </section>

        <section className="container">
          <h2>Metodología de trabajo</h2>
          <div className="card timeline">
            <div className="timeline-item">
              <strong>Setup (1ª–2ª semana)</strong>
              <span>
                Definición de palabras clave, perfiles y hashtags. Configuración de extracción
                de datos (seguidores y publicaciones). Diseño de dashboards.
              </span>
            </div>
            <div className="timeline-item">
              <strong>Operación mensual</strong>
              <span>
                Captura y actualización de datos. Análisis de comentarios. Benchmark con
                competencia.
              </span>
            </div>
            <div className="timeline-item">
              <strong>Seguimiento</strong>
              <span>
                Informe mensual + reunión online para ajustar estrategia.
              </span>
            </div>
          </div>
        </section>

        <section className="container">
          <h2>Entregables</h2>
          <div className="grid">
            <div className="card">
              <h3>Dashboards y reportes</h3>
              <p className="muted">
                Panel de reputación (sentimiento, volumen, tópicos críticos). Panel de
                competencia: seguidores, posts, temas ganadores.
              </p>
            </div>
            <div className="card">
              <h3>Documento de estrategia</h3>
              <p className="muted">
                Propuesta de contenidos mensuales. Mejoras en producto/servicio para
                diferenciarse.
              </p>
            </div>
            <div className="card">
              <h3>Guías operativas</h3>
              <p className="muted">
                Manual de respuestas a comentarios. Lineamientos éticos/legales para
                community management.
              </p>
            </div>
          </div>
        </section>

        <section className="container">
          <h2>Inversión (referencial)</h2>
          <div className="card">
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
              <div>
                <strong>Setup inicial</strong>
                <p className="muted">Configuración scrapers, dashboards, protocolos.</p>
                <span className="pill">A definir</span>
              </div>
              <div>
                <strong>Operación mensual</strong>
                <p className="muted">Monitoreo + análisis + informes + reunión.</p>
                <span className="pill">A definir/mes</span>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <h2>Resumen de capacidades demostradas</h2>
          <div className="card">
            <ul className="rank-list" style={{ listStyle: "disc", paddingLeft: 20 }}>
              <li>
                <strong>Seguidores de la competencia</strong>: extracción y análisis para
                segmentación, perfiles relevantes y oportunidades (ej. @institutoalmaviva).
              </li>
              <li>
                <strong>Publicaciones de la competencia</strong>: extracción y análisis para
                benchmarking de contenido, engagement y calendario editorial.
              </li>
              <li>
                <strong>Ciberseguridad</strong>: análisis de vulnerabilidades en los sistemas
                de la competencia (sitios web, infraestructura) para no repetir sus errores
                y reforzar los tuyos.
              </li>
            </ul>
            <p className="muted" style={{ marginTop: 12 }}>
              Los datos mostrados arriba forman parte de esta propuesta y confirman la capacidad
              técnica para entregar social listening e inteligencia competitiva de forma operativa.
            </p>
          </div>
        </section>
      </main>

      <footer>
        Propuesta Social Listening e Inteligencia Competitiva · Febrero 2026
      </footer>
    </div>
  );
}
