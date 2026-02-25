# Propuesta de servicio  
## Social Listening, Gestión de Reputación y Análisis de Competencia

**Ejemplo de benchmark:** [@institutoalmaviva](https://www.instagram.com/institutoalmaviva) (Instagram)

---

## 1. Objetivo general

Implementar un sistema de **social listening 24/7** e **inteligencia competitiva** que:

- Detecte y minimice comentarios negativos sobre la marca.
- Monitoree de forma continua a la competencia (ej. @institutoalmaviva).
- Anticipe crisis de reputación y oportunidades de contenido.
- Entregue insights accionables para mejorar oferta, comunicación y producto.

*Todo el trabajo se plantea dentro de buenas prácticas legales y éticas: análisis de datos públicos, sin acoso, sin difamación y sin realizar tests de hacking sobre terceros sin autorización.*

---

## 2. Alcance del servicio

### 2.1. Social Listening 24/7 (marca propia)

- **Monitoreo continuo** de:
  - Comentarios en publicaciones propias (Instagram, Facebook y otras redes definidas).
  - Mensajes directos y menciones públicas.
  - Palabras clave relacionadas con la marca, cursos, eventos y temas sensibles del sector.
- **Detección de riesgo reputacional**:
  - Clasificación de comentarios por **sentimiento** (positivo / neutro / negativo).
  - Identificación de temas críticos: quejas de atención, promesas no cumplidas, dudas recurrentes, temas legales/sensibles.
- **Protocolos de respuesta**:
  - Guías de respuesta para comentarios negativos, dudas frecuentes y comentarios positivos.
- **Reportes periódicos**:
  - Informe semanal/quincenal con volumen de comentarios, % negativos/positivos, temas más mencionados y casos críticos gestionados.

---

## 3. Análisis de comunidad y seguidores (competencia)

Utilizamos estructuras equivalentes a **`followers.json`** (muestra real de seguidores de @institutoalmaviva) para demostrar capacidad técnica.

### 3.1. Qué hacemos con datos tipo `followers.json`

A partir de un archivo como `followers.json` (lista de seguidores con `username`, `fullName`, `isPrivate`, `isVerified`, `timestamp`, etc.) podemos:

- **Segmentar la audiencia de la competencia**:
  - Porcentaje de perfiles privados vs públicos.
  - Identificación de perfiles relevantes (profesionales del área, influencers, instituciones).
  - Clusters por tipo de perfil según bio/username (cuando sea posible y sin vulnerar privacidad).
- **Mapear oportunidades**:
  - Perfiles que siguen a varias marcas del nicho (alto interés).
  - Construcción de “personas” a partir de patrones de nombres, idiomas y tipos de cuenta.

**Ejemplo de entregable:** tabla/resumen con perfiles más relevantes de los seguidores de @institutoalmaviva; métricas: total analizado, % profesionales de salud mental estimados, % internacional vs nacional.

*Siempre sobre datos públicos y sin contacto intrusivo: el foco es entender la audiencia, no acosarla.*

### 3.2. Demostración técnica: estructura `followers.json`

El archivo **`followers.json`** de este proyecto contiene una muestra de seguidores de @institutoalmaviva. Cada registro incluye:

| Campo        | Descripción                                      |
|-------------|---------------------------------------------------|
| `username`  | Usuario de Instagram                             |
| `fullName`  | Nombre mostrado en el perfil                     |
| `profileUrl`| Enlace al perfil                                 |
| `isPrivate` | Si la cuenta es privada                          |
| `isVerified`| Si tiene verificación oficial                    |
| `query`     | Cuenta de la que se extrajeron (competencia)     |
| `timestamp` | Fecha/hora de la extracción                      |

Con estos datos podemos generar informes de segmentación, tendencias de crecimiento de audiencia y perfiles objetivo para estrategias de contenido y paid media.

---

## 4. Análisis de contenido y performance (competencia)

Utilizamos estructuras tipo **`post.json`** para demostrar que podemos extraer y analizar publicaciones públicas de la competencia.

En **`post.json`** ya tenemos posts de @institutoalmaviva con: `postUrl`, `description`, `commentCount`, `likeCount`, `pubDate`, `type` (Photo/Video), `playCount`, etc.

### 4.1. Qué hacemos con datos tipo `post.json`

- **Calendario y formatos**:
  - Frecuencia de publicación (posts por semana/mes).
  - Mix de formatos: foto, video, carrusel, Reels.
- **Performance**:
  - Ranking de posts por likes, comentarios y reproducciones.
  - Temas que más engagement generan (estudios científicos, eventos, pós-graduação, etc.).
- **Ángulos ganadores**:
  - Tipos de copy y estructura que generan más interacción.
  - CTAs más efectivos (“comente Turma 4”, “Evento IAV”, etc.).
- **Benchmark**:
  - Comparar desempeño de contenido propio vs competencia.

*El enfoque es aprender qué les funciona, identificar puntos ciegos y capitalizar construyendo una propuesta superior y más confiable.*

### 4.2. Demostración técnica: estructura `post.json`

El archivo **`post.json`** contiene publicaciones recientes de @institutoalmaviva. Cada post incluye:

| Campo          | Descripción                                |
|----------------|--------------------------------------------|
| `postUrl`      | Enlace a la publicación                    |
| `description`  | Texto/caption completo                     |
| `commentCount` | Número de comentarios                      |
| `likeCount`    | Número de likes                            |
| `playCount`    | Reproducciones (videos)                    |
| `pubDate`      | Fecha de publicación                       |
| `type`         | Photo / Video                              |
| `username`     | Cuenta que publicó (competencia)           |

Con estos datos generamos reportes de contenido: mejores horarios, temas con más engagement y recomendaciones de calendario editorial.

---

## 5. Gestión de reputación comparada (sin ataques)

- **No organizamos ataques ni campañas negativas** contra la competencia.
- **Sí hacemos**:
  - Monitorear comentarios públicos en publicaciones de la competencia: reclamos recurrentes, insatisfacciones, dudas sin responder.
  - Usar esos insights para tu estrategia: contenidos que resuelvan esos puntos débiles sin nombrar al competidor (ej. ética, protocolos, certificaciones).
  - Estrategia de comunidad a favor de tu marca: testimonios, reviews, referral y fidelización.

---

## 6. Monitoreo de Ads (Meta)

- Revisión de la **biblioteca de anuncios de Meta** de la competencia: campañas, creatividades, mensajes clave.
- Insights para tu paid media: posicionamientos que destaquen tus diferenciales y ocupen espacios donde la competencia no comunica bien.

---

## 7. Metodología de trabajo

| Fase              | Actividad                                                                 |
|-------------------|---------------------------------------------------------------------------|
| **Setup (1ª–2ª semana)** | Definición de palabras clave, perfiles y hashtags; configuración de extracción de datos (followers + posts); diseño de dashboards. |
| **Operación mensual**   | Captura y actualización de datos; análisis de comentarios; benchmark con competencia. |
| **Seguimiento**         | Informe mensual + reunión online para ajustar estrategia.                 |

---

## 8. Entregables

- **Dashboards / reportes**: panel de reputación (sentimiento, volumen, tópicos críticos); panel de competencia (seguidores, posts, temas ganadores).
- **Documento de estrategia**: propuesta de contenidos mensuales; mejoras en producto/servicio para diferenciarse.
- **Guías operativas**: manual de respuestas a comentarios; lineamientos éticos/legales para community management.

---

## 9. Inversión (referencial)

| Concepto              | Descripción                                      | Monto        |
|-----------------------|--------------------------------------------------|--------------|
| **Setup inicial**     | Configuración scrapers, dashboards, protocolos   | A definir    |
| **Operación mensual** | Monitoreo + análisis + informes + reunión       | A definir/mes |

---

## 10. Resumen de capacidades demostradas

- **`followers.json`**: extracción y análisis de seguidores de la competencia (ej. @institutoalmaviva) para segmentación y oportunidades.
- **`post.json`**: extracción y análisis de publicaciones para benchmarking de contenido, engagement y calendario.

Ambos archivos de ejemplo forman parte de esta propuesta y confirman la capacidad técnica para entregar social listening e inteligencia competitiva de forma operativa.

---

*Documento generado para la propuesta de Social Listening e Inteligencia Competitiva. Febrero 2026.*
