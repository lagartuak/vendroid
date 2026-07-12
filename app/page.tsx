import ContactForm from './ContactForm';
import RevealObserver from './RevealObserver';

const topHtml = `
<header>
  <div class="nvm-badge">NEW VENDING MACHINES · NVM</div>

  <!-- VENDROID LOGO INLINE SVG -->
  <div class="logo-wrap">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 520">
      <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2e"/><stop offset="100%" style="stop-color:#16213e"/></linearGradient>
        <linearGradient id="androidGreen" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#78C257"/><stop offset="100%" style="stop-color:#4CAF50"/></linearGradient>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#0d47a1"/><stop offset="60%" style="stop-color:#1565c0"/><stop offset="100%" style="stop-color:#0a2d6e"/></linearGradient>
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#90caf9;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#42a5f5;stop-opacity:0.1"/></linearGradient>
        <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#37474f"/><stop offset="50%" style="stop-color:#607d8b"/><stop offset="100%" style="stop-color:#37474f"/></linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="dotGlow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="limeGlow"><feGaussianBlur stdDeviation="3.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="softShadow"><feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.4"/></filter>
        <pattern id="bgDots" x="0" y="0" width="7" height="8" patternUnits="userSpaceOnUse"><circle cx="0" cy="0" r="2.2" fill="#1a3a0a" opacity="0.85"/></pattern>
      </defs>
      <rect width="400" height="520" fill="#0d0d1a"/>
      <g opacity="0.07">
        <line x1="0" y1="50" x2="400" y2="50" stroke="#78C257" stroke-width="0.5"/><line x1="0" y1="100" x2="400" y2="100" stroke="#78C257" stroke-width="0.5"/><line x1="0" y1="150" x2="400" y2="150" stroke="#78C257" stroke-width="0.5"/><line x1="0" y1="200" x2="400" y2="200" stroke="#78C257" stroke-width="0.5"/><line x1="0" y1="250" x2="400" y2="250" stroke="#78C257" stroke-width="0.5"/><line x1="0" y1="300" x2="400" y2="300" stroke="#78C257" stroke-width="0.5"/><line x1="0" y1="350" x2="400" y2="350" stroke="#78C257" stroke-width="0.5"/><line x1="0" y1="400" x2="400" y2="400" stroke="#78C257" stroke-width="0.5"/><line x1="0" y1="450" x2="400" y2="450" stroke="#78C257" stroke-width="0.5"/><line x1="0" y1="500" x2="400" y2="500" stroke="#78C257" stroke-width="0.5"/><line x1="50" y1="0" x2="50" y2="520" stroke="#78C257" stroke-width="0.5"/><line x1="100" y1="0" x2="100" y2="520" stroke="#78C257" stroke-width="0.5"/><line x1="150" y1="0" x2="150" y2="520" stroke="#78C257" stroke-width="0.5"/><line x1="200" y1="0" x2="200" y2="520" stroke="#78C257" stroke-width="0.5"/><line x1="250" y1="0" x2="250" y2="520" stroke="#78C257" stroke-width="0.5"/><line x1="300" y1="0" x2="300" y2="520" stroke="#78C257" stroke-width="0.5"/><line x1="350" y1="0" x2="350" y2="520" stroke="#78C257" stroke-width="0.5"/>
      </g>
      <!-- Android mascot -->
      <line x1="170" y1="65" x2="152" y2="38" stroke="#78C257" stroke-width="4" stroke-linecap="round"/><circle cx="150" cy="35" r="6" fill="#78C257" filter="url(#glow)"/><line x1="230" y1="65" x2="248" y2="38" stroke="#78C257" stroke-width="4" stroke-linecap="round"/><circle cx="250" cy="35" r="6" fill="#78C257" filter="url(#glow)"/>
      <path d="M155 110 L155 72 Q155 58 200 58 Q245 58 245 72 L245 110 Z" fill="url(#androidGreen)" filter="url(#softShadow)"/><ellipse cx="200" cy="72" rx="45" ry="14" fill="#78C257"/><circle cx="181" cy="82" r="6" fill="#0d0d1a"/><circle cx="219" cy="82" r="6" fill="#0d0d1a"/><circle cx="183" cy="80" r="2" fill="white" opacity="0.6"/><circle cx="221" cy="80" r="2" fill="white" opacity="0.6"/><rect x="155" y="100" width="90" height="12" rx="3" fill="#5cb85c"/>
      <rect x="188" y="112" width="24" height="14" rx="4" fill="#37474f"/>
      <rect x="110" y="126" width="180" height="220" rx="12" fill="url(#metalGrad)" filter="url(#softShadow)"/><rect x="118" y="132" width="164" height="208" rx="9" fill="url(#bodyGrad)"/>
      <rect x="118" y="132" width="164" height="22" rx="9" fill="#78C257"/><rect x="118" y="144" width="164" height="10" fill="#78C257"/><text x="200" y="148" font-family="'Courier New', monospace" font-size="11" font-weight="bold" fill="#0d0d1a" text-anchor="middle" letter-spacing="3">NVM</text>
      <rect x="128" y="162" width="144" height="110" rx="6" fill="url(#screenGrad)" stroke="#1565c0" stroke-width="1"/><rect x="128" y="162" width="144" height="110" rx="6" fill="url(#glassGrad)"/><line x1="135" y1="168" x2="135" y2="266" stroke="white" stroke-width="1" opacity="0.15"/>
      <rect x="136" y="170" width="30" height="20" rx="3" fill="#e53935" opacity="0.85"/><rect x="171" y="170" width="30" height="20" rx="3" fill="#1e88e5" opacity="0.85"/><rect x="206" y="170" width="30" height="20" rx="3" fill="#fdd835" opacity="0.85"/><rect x="241" y="170" width="25" height="20" rx="3" fill="#43a047" opacity="0.85"/>
      <rect x="136" y="196" width="30" height="20" rx="3" fill="#8e24aa" opacity="0.85"/><rect x="171" y="196" width="30" height="20" rx="3" fill="#e53935" opacity="0.85"/><rect x="206" y="196" width="30" height="20" rx="3" fill="#1e88e5" opacity="0.85"/><rect x="241" y="196" width="25" height="20" rx="3" fill="#ff7043" opacity="0.85"/>
      <rect x="136" y="222" width="30" height="20" rx="3" fill="#fdd835" opacity="0.85"/><rect x="171" y="222" width="30" height="20" rx="3" fill="#43a047" opacity="0.85"/><rect x="206" y="222" width="30" height="20" rx="3" fill="#8e24aa" opacity="0.85"/><rect x="241" y="222" width="25" height="20" rx="3" fill="#e53935" opacity="0.85"/>
      <rect x="136" y="248" width="30" height="18" rx="3" fill="#1e88e5" opacity="0.85"/><rect x="171" y="248" width="30" height="18" rx="3" fill="#ff7043" opacity="0.85"/><rect x="206" y="248" width="30" height="18" rx="3" fill="#fdd835" opacity="0.85"/><rect x="241" y="248" width="25" height="18" rx="3" fill="#43a047" opacity="0.85"/>
      <rect x="128" y="274" width="144" height="6" rx="3" fill="#1a237e" stroke="#0d47a1" stroke-width="1"/>
      <rect x="128" y="283" width="144" height="50" rx="5" fill="#1c1c2e" stroke="#37474f" stroke-width="1"/><rect x="138" y="293" width="40" height="6" rx="3" fill="#37474f"/><rect x="138" y="293" width="40" height="6" rx="3" fill="none" stroke="#78C257" stroke-width="1" opacity="0.5"/><text x="158" y="314" font-family="'Courier New', monospace" font-size="7" fill="#78C257" text-anchor="middle" opacity="0.7">MONEDAS</text><rect x="188" y="290" width="24" height="16" rx="3" fill="#0d47a1" stroke="#42a5f5" stroke-width="1"/><line x1="192" y1="298" x2="208" y2="298" stroke="#42a5f5" stroke-width="1.5"/><line x1="192" y1="301" x2="205" y2="301" stroke="#42a5f5" stroke-width="1"/><text x="200" y="314" font-family="'Courier New', monospace" font-size="7" fill="#42a5f5" text-anchor="middle" opacity="0.7">TARJETA</text><circle cx="248" cy="298" r="5" fill="#78C257" filter="url(#glow)"/><text x="248" y="314" font-family="'Courier New', monospace" font-size="7" fill="#78C257" text-anchor="middle" opacity="0.7">ON</text>
      <rect x="118" y="335" width="164" height="5" rx="2" fill="#263238"/><rect x="128" y="340" width="144" height="16" rx="4" fill="#1a1a2e" stroke="#37474f" stroke-width="1"/>
      <rect x="82" y="130" width="28" height="80" rx="14" fill="url(#androidGreen)" filter="url(#softShadow)"/><circle cx="96" cy="130" r="10" fill="#5cb85c"/><ellipse cx="96" cy="212" rx="12" ry="10" fill="#5cb85c"/>
      <rect x="290" y="130" width="28" height="80" rx="14" fill="url(#androidGreen)" filter="url(#softShadow)"/><circle cx="304" cy="130" r="10" fill="#5cb85c"/><ellipse cx="304" cy="212" rx="12" ry="10" fill="#5cb85c"/>
      <!-- Peana -->
      <rect x="118" y="346" width="164" height="12" rx="3" fill="#5cb85c" filter="url(#softShadow)"/>
      <rect x="110" y="356" width="180" height="28" rx="4" fill="url(#androidGreen)" filter="url(#softShadow)"/>
      <rect x="110" y="368" width="180" height="2" rx="1" fill="#3a8a3a" opacity="0.45"/>
      <rect x="98" y="382" width="204" height="14" rx="5" fill="#5cb85c" filter="url(#softShadow)"/>
      <rect x="84" y="394" width="232" height="12" rx="5" fill="#4CAF50" filter="url(#softShadow)"/>
      <rect x="84" y="403" width="232" height="3" rx="2" fill="#3a8a3a" opacity="0.4"/>
      <rect x="90" y="395" width="22" height="9" rx="3" fill="#2d6e2d" opacity="0.65"/>
      <rect x="288" y="395" width="22" height="9" rx="3" fill="#2d6e2d" opacity="0.65"/>
      <!-- dot text panel -->
      <rect x="4" y="418" width="392" height="74" rx="8" fill="#030d03"/><rect x="4" y="418" width="392" height="74" rx="8" fill="url(#bgDots)"/><rect x="4" y="418" width="392" height="74" rx="8" fill="none" stroke="#1a4a0a" stroke-width="1.5" opacity="0.8"/>
      <!-- V -->
      <circle cx="42" cy="432" r="3" fill="#1a5a0a"/><circle cx="84" cy="432" r="3" fill="#1a5a0a"/><circle cx="42" cy="440" r="3" fill="#1a5a0a"/><circle cx="84" cy="440" r="3" fill="#1a5a0a"/><circle cx="49" cy="448" r="3" fill="#2e9b1a"/><circle cx="77" cy="448" r="3" fill="#2e9b1a"/><circle cx="49" cy="456" r="3" fill="#2e9b1a"/><circle cx="77" cy="456" r="3" fill="#2e9b1a"/><circle cx="56" cy="464" r="3" fill="#3dcc18" filter="url(#dotGlow)"/><circle cx="70" cy="464" r="3" fill="#3dcc18" filter="url(#dotGlow)"/><circle cx="56" cy="472" r="3" fill="#3dcc18" filter="url(#dotGlow)"/><circle cx="70" cy="472" r="3" fill="#3dcc18" filter="url(#dotGlow)"/><circle cx="63" cy="480" r="3.5" fill="#5aff2a" filter="url(#limeGlow)"/>
      <!-- E -->
      <circle cx="98" cy="432" r="3" fill="white"/><circle cx="105" cy="432" r="3" fill="white"/><circle cx="112" cy="432" r="3" fill="white"/><circle cx="119" cy="432" r="3" fill="white"/><circle cx="126" cy="432" r="3" fill="white"/><circle cx="98" cy="440" r="3" fill="white"/><circle cx="98" cy="448" r="3" fill="white"/><circle cx="98" cy="456" r="3" fill="white"/><circle cx="105" cy="456" r="3" fill="white"/><circle cx="112" cy="456" r="3" fill="white"/><circle cx="119" cy="456" r="3" fill="white"/><circle cx="98" cy="464" r="3" fill="white"/><circle cx="98" cy="472" r="3" fill="white"/><circle cx="98" cy="480" r="3" fill="white"/><circle cx="105" cy="480" r="3" fill="white"/><circle cx="112" cy="480" r="3" fill="white"/><circle cx="119" cy="480" r="3" fill="white"/><circle cx="126" cy="480" r="3" fill="white"/>
      <!-- N -->
      <circle cx="140" cy="432" r="3" fill="white"/><circle cx="168" cy="432" r="3" fill="white"/><circle cx="140" cy="440" r="3" fill="white"/><circle cx="147" cy="440" r="3" fill="white"/><circle cx="168" cy="440" r="3" fill="white"/><circle cx="140" cy="448" r="3" fill="white"/><circle cx="147" cy="448" r="3" fill="white"/><circle cx="168" cy="448" r="3" fill="white"/><circle cx="140" cy="456" r="3" fill="white"/><circle cx="154" cy="456" r="3" fill="white"/><circle cx="168" cy="456" r="3" fill="white"/><circle cx="140" cy="464" r="3" fill="white"/><circle cx="161" cy="464" r="3" fill="white"/><circle cx="168" cy="464" r="3" fill="white"/><circle cx="140" cy="472" r="3" fill="white"/><circle cx="161" cy="472" r="3" fill="white"/><circle cx="168" cy="472" r="3" fill="white"/><circle cx="140" cy="480" r="3" fill="white"/><circle cx="168" cy="480" r="3" fill="white"/>
      <!-- D -->
      <circle cx="182" cy="432" r="3" fill="white"/><circle cx="189" cy="432" r="3" fill="white"/><circle cx="196" cy="432" r="3" fill="white"/><circle cx="203" cy="432" r="3" fill="white"/><circle cx="182" cy="440" r="3" fill="white"/><circle cx="210" cy="440" r="3" fill="white"/><circle cx="182" cy="448" r="3" fill="white"/><circle cx="210" cy="448" r="3" fill="white"/><circle cx="182" cy="456" r="3" fill="white"/><circle cx="210" cy="456" r="3" fill="white"/><circle cx="182" cy="464" r="3" fill="white"/><circle cx="210" cy="464" r="3" fill="white"/><circle cx="182" cy="472" r="3" fill="white"/><circle cx="210" cy="472" r="3" fill="white"/><circle cx="182" cy="480" r="3" fill="white"/><circle cx="189" cy="480" r="3" fill="white"/><circle cx="196" cy="480" r="3" fill="white"/><circle cx="203" cy="480" r="3" fill="white"/>
      <!-- R -->
      <circle cx="224" cy="432" r="3" fill="white"/><circle cx="231" cy="432" r="3" fill="white"/><circle cx="238" cy="432" r="3" fill="white"/><circle cx="245" cy="432" r="3" fill="white"/><circle cx="224" cy="440" r="3" fill="white"/><circle cx="252" cy="440" r="3" fill="white"/><circle cx="224" cy="448" r="3" fill="white"/><circle cx="252" cy="448" r="3" fill="white"/><circle cx="224" cy="456" r="3" fill="white"/><circle cx="231" cy="456" r="3" fill="white"/><circle cx="238" cy="456" r="3" fill="white"/><circle cx="245" cy="456" r="3" fill="white"/><circle cx="224" cy="464" r="3" fill="white"/><circle cx="238" cy="464" r="3" fill="white"/><circle cx="224" cy="472" r="3" fill="white"/><circle cx="245" cy="472" r="3" fill="white"/><circle cx="224" cy="480" r="3" fill="white"/><circle cx="252" cy="480" r="3" fill="white"/>
      <!-- O -->
      <circle cx="273" cy="432" r="3" fill="white"/><circle cx="280" cy="432" r="3" fill="white"/><circle cx="287" cy="432" r="3" fill="white"/><circle cx="266" cy="440" r="3" fill="white"/><circle cx="294" cy="440" r="3" fill="white"/><circle cx="266" cy="448" r="3" fill="white"/><circle cx="294" cy="448" r="3" fill="white"/><circle cx="266" cy="456" r="3" fill="white"/><circle cx="294" cy="456" r="3" fill="white"/><circle cx="266" cy="464" r="3" fill="white"/><circle cx="294" cy="464" r="3" fill="white"/><circle cx="266" cy="472" r="3" fill="white"/><circle cx="294" cy="472" r="3" fill="white"/><circle cx="273" cy="480" r="3" fill="white"/><circle cx="280" cy="480" r="3" fill="white"/><circle cx="287" cy="480" r="3" fill="white"/>
      <!-- I -->
      <circle cx="308" cy="432" r="3" fill="white"/><circle cx="315" cy="432" r="3" fill="white"/><circle cx="322" cy="432" r="3" fill="white"/><circle cx="315" cy="440" r="3" fill="white"/><circle cx="315" cy="448" r="3" fill="white"/><circle cx="315" cy="456" r="3" fill="white"/><circle cx="315" cy="464" r="3" fill="white"/><circle cx="315" cy="472" r="3" fill="white"/><circle cx="308" cy="480" r="3" fill="white"/><circle cx="315" cy="480" r="3" fill="white"/><circle cx="322" cy="480" r="3" fill="white"/>
      <!-- D2 -->
      <circle cx="336" cy="432" r="3" fill="white"/><circle cx="343" cy="432" r="3" fill="white"/><circle cx="350" cy="432" r="3" fill="white"/><circle cx="357" cy="432" r="3" fill="white"/><circle cx="336" cy="440" r="3" fill="white"/><circle cx="364" cy="440" r="3" fill="white"/><circle cx="336" cy="448" r="3" fill="white"/><circle cx="364" cy="448" r="3" fill="white"/><circle cx="336" cy="456" r="3" fill="white"/><circle cx="364" cy="456" r="3" fill="white"/><circle cx="336" cy="464" r="3" fill="white"/><circle cx="364" cy="464" r="3" fill="white"/><circle cx="336" cy="472" r="3" fill="white"/><circle cx="364" cy="472" r="3" fill="white"/><circle cx="336" cy="480" r="3" fill="white"/><circle cx="343" cy="480" r="3" fill="white"/><circle cx="350" cy="480" r="3" fill="white"/><circle cx="357" cy="480" r="3" fill="white"/>
      <!-- tagline -->
      <circle cx="55" cy="506" r="2.5" fill="#78C257" opacity="0.5"/><circle cx="48" cy="506" r="1.5" fill="#78C257" opacity="0.3"/><circle cx="345" cy="506" r="2.5" fill="#78C257" opacity="0.5"/><circle cx="352" cy="506" r="1.5" fill="#78C257" opacity="0.3"/>
      <text x="200" y="510" font-family="'Courier New', monospace" font-size="10" fill="#607d8b" text-anchor="middle" letter-spacing="3">by NVM · NEW VENDING MACHINES</text>
    </svg>
  </div>

  <p class="hero-tagline">TECNOLOGÍA ANDROID · PROTOCOLO MDB · PCB PROPIA</p>
  <p class="hero-sub">
    <strong>Nueva electrónica. Mismo mueble.</strong><br/>
    Moderniza tu máquina expendedora de tabaco conservando la estructura y los motores originales. La conversión más inteligente del mercado.
  </p>
  <div class="coming-soon">
    <span class="dot"></span>
    PRÓXIMAMENTE EN MAQUINASDETABACO.COM
  </div>

  <div class="scroll-hint">
    <span>DESCUBRE MÁS</span>
    <div class="arrow"></div>
  </div>
</header>

<div class="divider"></div>

<!-- ══════════ PROBLEMA / SOLUCIÓN ══════════ -->
<section class="section reveal">
  <p class="section-label">// El reto</p>
  <h2 class="section-title">¿Tu máquina está obsoleta,<br/><span>pero funciona perfectamente?</span></h2>
  <p class="section-text">
    Miles de máquinas expendedoras en España tienen la mecánica en perfecto estado pero una electrónica que ya no se puede actualizar, reparar ni integrar con sistemas de pago modernos. Hasta ahora.
  </p>

  <div class="problem-solution">
    <div class="ps-card problem">
      <div class="ps-icon">⚠️</div>
      <h3>// EL PROBLEMA</h3>
      <p>Electrónica propietaria cerrada. Piezas descatalogadas. Sin soporte para pagos con tarjeta o móvil. Software que no se puede actualizar. Una máquina mecánicamente perfecta que se convierte en chatarra por culpa de un circuito obsoleto.</p>
    </div>
    <div class="ps-card solution">
      <div class="ps-icon">⚡</div>
      <h3>// LA SOLUCIÓN</h3>
      <p>VENDROID sustituye toda la electrónica por una plataforma Android moderna con PCB propia para los motores y conversor MDB para pagos. La máquina de siempre, con la tecnología de hoy. Sin tocar el mueble. Sin cambiar los motores.</p>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══════════ VENTAJAS NUMÉRICAS ══════════ -->
<section class="section reveal">
  <div class="ventajas">
    <div class="ventaja">
      <div class="big-num">-80%</div>
      <div class="big-unit">COSTE VS. NUEVA</div>
      <p>Frente a comprar una máquina nueva con tecnología equivalente</p>
    </div>
    <div class="ventaja">
      <div class="big-num">3</div>
      <div class="big-unit">FABRICANTES</div>
      <p>Compatible con GMV, Azkoyen y Jofemar — las marcas más extendidas en España</p>
    </div>
    <div class="ventaja">
      <div class="big-num">100%</div>
      <div class="big-unit">ANDROID</div>
      <p>Sistema abierto, actualizable y con soporte para apps, pagos y telemetría</p>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══════════ CÓMO FUNCIONA ══════════ -->
<section class="how-section">
  <div class="how-inner reveal">
    <p class="section-label">// Arquitectura del sistema</p>
    <h2 class="section-title">¿Cómo funciona <span>VENDROID</span>?</h2>
    <p class="section-text">
      Tres capas de tecnología perfectamente integradas para que tu máquina funcione mejor que el primer día.
    </p>

    <div class="steps">
      <div class="step">
        <div class="step-num">01</div>
        <div class="step-icon">📱</div>
        <h4>Placa Android</h4>
        <p>Tarjeta Android industrial (RK3288 o similar) que ejecuta el software de vending con pantalla táctil, gestión de stock y conectividad.</p>
      </div>
      <div class="step">
        <div class="step-num">02</div>
        <div class="step-icon">💳</div>
        <h4>Conversor MDB</h4>
        <p>Protocolo MDB estándar para integrar validadores de billetes, monederos, TPV y sistemas de pago sin contacto.</p>
      </div>
      <div class="step">
        <div class="step-num">03</div>
        <div class="step-icon">⚙️</div>
        <h4>PCB de Motores</h4>
        <p>Placa electrónica diseñada a medida para conectar los motores originales de cada fabricante sin modificaciones mecánicas.</p>
      </div>
      <div class="step">
        <div class="step-num">04</div>
        <div class="step-icon">🔧</div>
        <h4>Instalación</h4>
        <p>La electrónica original se retira y se sustituye por el kit VENDROID. El mueble y los motores no se tocan.</p>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══════════ ESPECIFICACIONES ══════════ -->
<section class="section reveal">
  <p class="section-label">// Especificaciones técnicas</p>
  <h2 class="section-title">Lo que incluye <span>el kit</span></h2>

  <div class="specs-grid">
    <div class="spec-item">
      <div class="spec-dot"></div>
      <div>
        <h4>Sistema Operativo</h4>
        <p>Android industrial. Software de vending con planograma, gestión de stock, errores de dispensado y estadísticas.</p>
      </div>
    </div>
    <div class="spec-item">
      <div class="spec-dot"></div>
      <div>
        <h4>Pagos MDB</h4>
        <p>Compatible con monederos, validadores de billetes, lectores de tarjetas bancarias y pago NFC/móvil.</p>
      </div>
    </div>
    <div class="spec-item">
      <div class="spec-dot"></div>
      <div>
        <h4>PCB propia NVM</h4>
        <p>Placa de motores diseñada específicamente para cada modelo de máquina. Conexión directa sin adaptadores.</p>
      </div>
    </div>
    <div class="spec-item">
      <div class="spec-dot"></div>
      <div>
        <h4>Pantalla táctil</h4>
        <p>Interfaz moderna con pantalla táctil para el cliente. Personalizable con publicidad, precios y productos.</p>
      </div>
    </div>
    <div class="spec-item">
      <div class="spec-dot"></div>
      <div>
        <h4>Conectividad</h4>
        <p>WiFi, Ethernet y 4G opcional para telemetría remota, actualizaciones de precios y control de stock en tiempo real.</p>
      </div>
    </div>
    <div class="spec-item">
      <div class="spec-dot"></div>
      <div>
        <h4>Soporte técnico NVM</h4>
        <p>Instalación, configuración y soporte técnico incluidos. Servicio disponible en toda España.</p>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══════════ COMPATIBILIDAD ══════════ -->
<section class="compat-section reveal">
  <div class="compat-inner">
    <p class="section-label">// Compatibilidad</p>
    <h2 class="section-title">Fabricantes y modelos <span>compatibles</span></h2>
    <p class="section-text">
      Empezamos con los modelos más extendidos en el mercado español. El catálogo de compatibilidades se amplía continuamente.
    </p>

    <div class="brands">
      <span class="brand-chip">GM VENDING · ELITE</span>
      <span class="brand-chip">GM VENDING · PREMIUM</span>
      <span class="brand-chip">GM VENDING · CRYSTAL</span>
      <span class="brand-chip">GM VENDING · LC</span>
      <span class="brand-chip">AZKOYEN · SERIE N</span>
      <span class="brand-chip">AZKOYEN · TEIDE MAX</span>
      <span class="brand-chip">AZKOYEN · ARGENTA</span>
      <span class="brand-chip">AZKOYEN · STEP</span>
      <span class="brand-chip">JOFEMAR · VISION</span>
      <span class="brand-chip">JOFEMAR · COLUMBO</span>
      <span class="brand-chip">+ PRÓXIMAMENTE</span>
    </div>
  </div>
</section>
`;

const footerHtml = `
<footer>
  <p>
    VENDROID · by <a href="https://www.maquinasdetabaco.com" target="_blank">NVM – NEW VENDING MACHINES</a>
    &nbsp;·&nbsp; <span style="color:var(--text-dim)">© 2026</span>
  </p>
</footer>
`;

export default function Page() {
  return (
    <>
      <RevealObserver />
      <div dangerouslySetInnerHTML={{ __html: topHtml }} />

      <section className="cta-section reveal" id="contacto">
        <div className="cta-inner">
          <p className="section-label">// Contacto</p>
          <h2 className="section-title">
            ¿Quieres <span>más información</span>?
          </h2>
          <p className="section-text">
            Cuéntanos tu caso y te contactamos sin compromiso. También puedes escribirnos
            directamente a{' '}
            <a href="mailto:info@vendroid.es" style={{ color: 'var(--green-lime)' }}>
              info@vendroid.es
            </a>
            .
          </p>
          <ContactForm />
        </div>
      </section>

      <div dangerouslySetInnerHTML={{ __html: footerHtml }} />
    </>
  );
}
