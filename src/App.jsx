export default function App() {
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
              <span className="brand-label">Propuesta comercial</span>
              <span className="badge">Persona · SERP · ORM · SEO inverso</span>
            </div>
            <h1>Gestión estratégica de reputación digital</h1>
            <p>
              Propuesta para <strong>limpiar y reposicionar la reputación de una persona en internet</strong>:
              controlar lo que aparece al buscar su nombre en Google y Bing, combinando{" "}
              <strong>desindexación</strong> cuando las políticas lo permitan y{" "}
              <strong>SEO inverso</strong> para desplazar lo que no se pueda retirar del índice.
            </p>
          </div>
          <div className="hero-card">
            <h3>Enfoque dual</h3>
            <ul>
              <li>
                <strong>A.</strong> Depuración del índice: auditoría Top 30 (nombre y variantes),
                viabilidad DMCA / PII / políticas, solicitudes en paneles oficiales de Google y Bing.
              </li>
              <li>
                <strong>B.</strong> SEO inverso: hasta <strong>45 fuentes</strong> controladas para
                ocupar las primeras páginas y empujar resultados negativos hacia posición 31+.
              </li>
              <li>
                <strong>Duración:</strong> 12 meses en tres etapas (ver cronograma más abajo).
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section className="container">
          <h2>1. Resumen ejecutivo</h2>
          <p className="muted" style={{ marginBottom: 20 }}>
            Las menciones negativas en medios de alta autoridad suelen dominar la búsqueda del{" "}
            <strong>nombre</strong> o la keyword objetivo. Las URLs de esas notas pueden sufrir{" "}
            <strong>decadencia de autoridad de página</strong> (menos enlazado interno y actualización),
            lo que abre margen para actuar. La estrategia combina retiro del índice cuando sea viable,{" "}
            <strong>supresión en SERP</strong> para el resto y{" "}
            <strong>reconstrucción de la narrativa digital</strong> de la persona.
          </p>
        </section>

        <section className="container">
          <h2>2. Metodología de intervención</h2>
          <div className="grid">
            <div className="card">
              <span className="pill">Frente A</span>
              <h3>Depuración de índice</h3>
              <p className="muted">
                No se garantiza eliminar todo; sí una campaña ordenada de auditoría y pedidos
                alineados a Google y Bing. En temas sensibles, el &quot;derecho al olvido&quot; genérico
                suele tener poco impacto: se prioriza el análisis de{" "}
                <strong>infracciones técnicas</strong> (DMCA, PII, directrices) para atacar el
                resultado en el índice cuando corresponda.
              </p>
              <p className="muted" style={{ marginTop: 12 }}>
                <strong>Mapeo:</strong> nombre de la persona y variantes; Top 30 en Google y Bing;
                registro de posición, URL, autoridad de dominio y de la URL para seguimiento.
              </p>
              <p className="muted" style={{ marginTop: 12 }}>
                <strong>Canales:</strong> panel de retirada por motivos legales (Google) y equivalente
                en Bing, con la documentación que pidan los revisores.
              </p>
              <p className="muted" style={{ marginTop: 12 }}>
                <strong>Streisand / Lumen:</strong> ciertos retiros pueden quedar reflejados en bases
                públicas; se evalúa el riesgo de amplificación (p. ej. vigilancia por periodismo de
                investigación). El diseño evita caminos que generen nuevas &quot;fuentes negativas&quot;.
              </p>
            </div>
            <div className="card">
              <span className="pill">Frente B</span>
              <h3>SEO inverso (desplazamiento)</h3>
              <p className="muted">
                Lo que no se desindexa se empuja hacia atrás: objetivo operativo, más allá de la{" "}
                <strong>tercera página</strong> (posición <strong>31+</strong>), donde casi no hay
                clics.
              </p>
              <p className="muted" style={{ marginTop: 12 }}>
                Tres palancas: <strong>Schema y entidades</strong> (Person, SameAs…),{" "}
                <strong>autoridad</strong> (linkbuilding hacia DR competitivo en activos clave),{" "}
                <strong>freshness</strong> y <strong>QDF</strong> (contenido vivo vs. nota estática).
              </p>
            </div>
          </div>
        </section>

        <section className="container">
          <h2>3. Por qué puede funcionar frente a grandes medios</h2>
          <div className="card">
            <p className="muted">
              En portales fuertes (ej. referencias tipo Infobae, El País), la noticia suele salir
              potenciada desde <strong>home</strong> y <strong>categorías</strong>; luego pierde
              enlaces internos y queda más profunda. El <strong>dominio</strong> sigue muy autorizado
              (DR/DA alto), pero la <strong>URL</strong> puede perder autoridad de página (UR/PA).
              Un ecosistema propio con entidad clara, enlaces y actualización puede competir con esa
              URL concreta.
            </p>
            <p className="muted" style={{ marginTop: 12 }}>
              Google busca <strong>diversidad de formatos</strong> en la SERP: no bastan diez blogs
              iguales; por eso el plan mezcla redes, multimedia (p. ej. YouTube), sitios propios,
              prensa/Web 2.0 y perfiles en entornos profesionales o académicos cuando aplique.
            </p>
          </div>
        </section>

        <section className="container">
          <h2>4. Ecosistema: 45 fuentes controladas</h2>
          <p className="muted" style={{ marginBottom: 16 }}>
            Objetivo base ~30 posiciones (tres páginas). Margen del 50% por resistencia algorítmica y
            fallo estimado 20–35% en activos nuevos → <strong>45 activos</strong> planificados.
          </p>
          <div className="grid">
            <div className="card">
              <h3>Tipología</h3>
              <ul className="rank-list" style={{ listStyle: "disc", paddingLeft: 20 }}>
                <li>Sitios propios (blogs, satélites).</li>
                <li>Redes de alta indexación (X, Instagram, Facebook, Pinterest…).</li>
                <li>Prensa estratégica y Web 2.0.</li>
                <li>Multimedia y perfiles enriquecidos.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Tareas recurrentes</h3>
              <ul className="rank-list" style={{ listStyle: "disc", paddingLeft: 20 }}>
                <li>Schema y entidades hacia Knowledge Graph donde aplique.</li>
                <li>Linkbuilding de alta autoridad (referencia de trabajo DR ~50–60 en focos).</li>
                <li>On-page, interlinking y sincronización entre plataformas.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container">
          <h2>5. Lineamientos estratégico, táctico y discursivo</h2>
          <p className="muted" style={{ marginBottom: 16 }}>
            Incluye la dimensión simbólica: <strong>reconstrucción del sentido</strong> y de la
            narrativa de la persona, no solo táctica de ranking.
          </p>
          <div className="grid">
            <div className="card">
              <h3>Estratégico</h3>
              <p className="muted">
                Narrativa dominante, figura legítima o referente, identidad coherente, control de lo
                visible al buscar el nombre.
              </p>
            </div>
            <div className="card">
              <h3>Táctico</h3>
              <p className="muted">
                Contenido SEO + reputación, cross-linking, backlinks, señales cruzadas, freshness.
              </p>
            </div>
            <div className="card">
              <h3>Discursivo</h3>
              <p className="muted">
                Ejes claros, tono homogéneo, sustitución progresiva de asociaciones negativas,
                intención de búsqueda cubierta desde una lectura favorable.
              </p>
            </div>
          </div>
        </section>

        <section className="container">
          <h2>6. Acciones técnicas y operativas</h2>
          <div className="card">
            <ul className="rank-list" style={{ listStyle: "disc", paddingLeft: 20 }}>
              <li>Entidades digitales y Schema avanzado.</li>
              <li>Linkbuilding de alta autoridad.</li>
              <li>Producción y optimización SEO.</li>
              <li>Monitoreo continuo de SERPs y ajustes según algoritmo.</li>
            </ul>
          </div>
        </section>

        <section className="container">
          <h2>7. Plazos y cronograma</h2>
          <div className="card timeline">
            <div className="timeline-item">
              <strong>Duración: 12 meses</strong>
              <span>
                Tres etapas: cimentación (infraestructura y activos iniciales), tracción
                (posicionamiento), consolidación (estabilización de SERPs).
              </span>
            </div>
            <div className="timeline-item">
              <strong>Condiciones comerciales</strong>
              <span>
                Forma de pago y condiciones contractuales se acuerdan con la persona o su
                representante según el alcance del briefing.
              </span>
            </div>
          </div>
        </section>

        <section className="container">
          <h2>8. Alcance y condiciones</h2>
          <div className="grid">
            <div className="card">
              <h3>Profundidad SERP</h3>
              <p className="muted">
                Pensado para las primeras tres páginas y empujar lo indeseable a posición 31+.
                Mayor profundidad implica replantear alcance y ecosistema.
              </p>
            </div>
            <div className="card">
              <h3>Snapshot inicial</h3>
              <p className="muted">
                Aplica a URLs negativas documentadas en la auditoría inicial. No es garantía frente a
                nuevos resultados, campañas de difamación o noticias posteriores a ese corte.
              </p>
            </div>
            <div className="card">
              <h3>Geo y plataformas</h3>
              <p className="muted">
                Prioridad Google y Bing, búsquedas geolocalizadas en Argentina (ajustable por
                briefing).
              </p>
            </div>
            <div className="card">
              <h3>Transferencia de activos</h3>
              <p className="muted">
                Sin dependencia permanente: al cierre, entrega de dominios, hosting, credenciales y
                control del contenido; la persona gestiona renovación y mantenimiento habitual.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        Propuesta de Gestión Estratégica de Reputación Digital (persona) · Marzo 2026
      </footer>
    </div>
  );
}
