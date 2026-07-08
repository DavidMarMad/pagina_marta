# Guía de tratamiento — dibujos infantiles como capa decorativa

## Objetivo

Integrar los dibujos infantiles (cerezas, la isla, las gafas, las casitas,
la cuadrícula roja/azul, la figura humana) como una capa decorativa de
fondo, sin que compitan con el contenido ni rompan el tono clínico,
elegante y sobrio del resto del sitio. El resultado debe leerse casi como
una marca de agua: presente si se busca, invisible si no.

Principio rector: **nunca deben competir con el texto**. Si al mirar la
pantalla el ojo va antes al dibujo que al contenido, la opacidad o el
tamaño están mal calibrados.

## Principio técnico general

1. **Fuera del flujo del documento.** Cada motivo se posiciona con
   `position: absolute` dentro de un contenedor padre con
   `position: relative` (normalmente la `<section>`), nunca `fixed`
   (evita interferir con scroll/layout en móvil).
2. **Detrás del contenido.** `z-index: 0` o negativo, con el contenido de
   la sección en `z-index: 1` o superior. El contenedor de la sección debe
   tener `overflow: hidden` para que el motivo nunca se salga y rompa el
   layout en viewports pequeños.
3. **No interactivo.** Siempre `pointer-events: none` y
   `aria-hidden="true"` — son decoración pura, nunca deben capturar clics
   ni ser leídos por lectores de pantalla.
4. **Nunca en el flujo del Hero principal ni en el formulario de
   contacto.** Son las dos zonas de máxima seriedad/conversión del sitio;
   el ruido decorativo se reserva para transiciones entre secciones
   (bordes, esquinas, márgenes de `About` y `GeneralCatalog`).

## Opacidad

Valor base: **`opacity: 0.06`**.

Rango aceptable según tamaño del motivo:

| Tamaño del motivo | Opacidad |
|---|---|
| Grande (>200px, ej. la isla) | 0.04 – 0.05 |
| Medio (100–200px, ej. casitas, figura humana) | 0.05 – 0.07 |
| Pequeño (<100px, ej. cerezas, gafas) | 0.06 – 0.09 |

Los motivos pequeños toleran algo más de opacidad porque ocupan menos
superficie visual; los grandes deben ser casi imperceptibles porque su
masa atrae el ojo aunque estén muy tenues.

## Filtros

Los dibujos infantiles suelen tener colores primarios saturados (rojo,
azul, amarillo) que chocan frontalmente con la paleta crema/tiza del
sitio. El filtro es lo que realmente hace el trabajo de "domesticar" el
motivo — la opacidad sola no basta.

Filtro base para la mayoría de motivos:

```css
filter: grayscale(1) sepia(0.15) contrast(0.9);
```

- `grayscale(1)` — elimina el color, convierte el trazo en escala de
  grises. Imprescindible siempre.
- `sepia(0.15)` — reintroduce un matiz cálido muy leve, para que el
  motivo en gris no se sienta "frío" o desconectado del fondo crema.
  No subir de 0.2: por encima empieza a leerse como manchado/envejecido.
- `contrast(0.9)` — suaviza el trazo, evita que las líneas negras del
  dibujo infantil se vean duras sobre un fondo tan claro.

### Caso especial: cuadrícula roja/azul

Este motivo tiene el mayor contraste cromático de todos (rojo/azul
saturado sobre blanco de cuaderno) y es el que más "grita" si no se trata
a fondo. Filtro reforzado:

```css
filter: grayscale(1) sepia(0.1) contrast(0.85) blur(0.3px);
```

El `blur(0.3px)` adicional suaviza el reticulado para que no compita en
nitidez con la tipografía Playfair/Inter, que es muy limpia. Mantener la
opacidad de este motivo en el extremo bajo del rango (0.04 – 0.05) incluso
si es de tamaño pequeño — el patrón repetitivo de una cuadrícula pesa
visualmente más que una silueta suelta.

## Posicionamiento

Los motivos van en esquinas o márgenes, nunca centrados ni superpuestos al
bloque de texto principal de una sección. Coordenadas orientativas
(ajustar por motivo y sección real):

```css
.art-motif {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  filter: grayscale(1) sepia(0.15) contrast(0.9);
  opacity: 0.06;
}

/* Ejemplo: cerezas, esquina superior derecha de About */
.art-motif--cerezas {
  top: 24px;
  right: 32px;
  width: 72px;
  opacity: 0.08;
}

/* Ejemplo: la isla, esquina inferior izquierda, sección grande */
.art-motif--isla {
  bottom: -40px;
  left: -30px;
  width: 260px;
  opacity: 0.045;
}

/* Ejemplo: gafas, junto al título de una sección */
.art-motif--gafas {
  top: 8px;
  left: 16px;
  width: 56px;
  opacity: 0.07;
}

/* Ejemplo: casitas, margen entre About y Contact */
.art-motif--casitas {
  bottom: 0;
  right: 40px;
  width: 140px;
  opacity: 0.06;
}

/* Ejemplo: cuadrícula roja/azul, fondo de FeaturedTalks */
.art-motif--cuadricula {
  top: 20px;
  right: -20px;
  width: 180px;
  opacity: 0.045;
  filter: grayscale(1) sepia(0.1) contrast(0.85) blur(0.3px);
}

/* Ejemplo: figura humana, margen de Contact (fuera del formulario) */
.art-motif--figura {
  top: 40px;
  left: -20px;
  width: 110px;
  opacity: 0.06;
}
```

El contenedor de la sección necesita el `relative` + `overflow: hidden`
que ancla estas posiciones:

```css
.section-con-motivo {
  position: relative;
  overflow: hidden;
}
```

## Responsive

Por debajo de `768px` el espacio es escaso y cualquier elemento
decorativo compite directamente con el contenido plegado a una columna.
Regla general: **ocultar los motivos grandes y medianos en móvil**,
dejar como mucho uno pequeño por sección.

```css
@media (max-width: 768px) {
  .art-motif--isla,
  .art-motif--casitas,
  .art-motif--figura,
  .art-motif--cuadricula {
    display: none;
  }
}
```

## Marcado HTML/JSX

```jsx
<span
  className="art-motif art-motif--cerezas"
  aria-hidden="true"
  style={{ backgroundImage: `url(${cerezasSvg})` }}
/>
```

O, si son SVG inline, aplicar las mismas clases directamente al `<svg>`
con `aria-hidden="true"` y sin `role="img"`.

## Resumen de valores por motivo

| Motivo | Opacidad | Filtro | Tamaño orientativo |
|---|---|---|---|
| Cerezas | 0.06 – 0.09 | base | 60–80px |
| La isla | 0.04 – 0.05 | base | 220–280px |
| Gafas | 0.06 – 0.08 | base | 50–70px |
| Casitas | 0.05 – 0.07 | base | 120–160px |
| Cuadrícula roja/azul | 0.04 – 0.05 | reforzado (+ `blur(0.3px)`) | 150–200px |
| Figura humana | 0.05 – 0.07 | base | 90–120px |

Filtro "base": `grayscale(1) sepia(0.15) contrast(0.9)`.
Filtro "reforzado": `grayscale(1) sepia(0.1) contrast(0.85) blur(0.3px)`.
