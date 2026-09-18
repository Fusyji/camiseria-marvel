export async function convertSvgToPngBase64(svgElement: SVGElement): Promise<string> {
  return new Promise((resolve) => {
    try {
      const clonedSvg = svgElement.cloneNode(true) as SVGElement;
      clonedSvg.setAttribute('width', '640');
      clonedSvg.setAttribute('height', '800');
      clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

      // Fondo oscuro de atelier para la identidad visual
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('width', '100%');
      rect.setAttribute('height', '100%');
      rect.setAttribute('fill', '#0A0A0A');
      clonedSvg.insertBefore(rect, clonedSvg.firstChild);

      const xml = new XMLSerializer().serializeToString(clonedSvg);
      const svg64 = window.btoa(unescape(encodeURIComponent(xml)));
      const image64 = 'data:image/svg+xml;base64,' + svg64;

      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = 640;
          canvas.height = 800;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve('');
            return;
          }
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL('image/png', 0.95));
        } catch {
          resolve('');
        }
      };
      img.onerror = () => resolve('');
      img.src = image64;
    } catch {
      resolve('');
    }
  });
}
