export function magnify(imgID: string, zoom: number): void {
  const img = document.getElementById(imgID) as HTMLImageElement | null;
  if (!img) {
      console.error(`Image with ID ${imgID} not found`);
      return;
  }

  const glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  img.parentElement?.insertBefore(glass, img);

  glass.style.backgroundImage = `url('${img.src}')`;
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;

  const bw = 3;
  const w = glass.offsetWidth / 2;
  const h = glass.offsetHeight / 2;

  glass.style.display = "none"; // Initially hide the magnifier glass

  img.addEventListener("mousemove", moveMagnifier);
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  glass.addEventListener("touchmove", moveMagnifier);

  img.addEventListener("mouseenter", showMagnifier);
  img.addEventListener("mouseleave", hideMagnifier);

  function showMagnifier(): void {
      glass.style.display = "block";
  }

  function hideMagnifier(): void {
      glass.style.display = "none";
  }

  function moveMagnifier(e: MouseEvent | TouchEvent): void {
      e.preventDefault();
      const pos = getCursorPos(e);
      let x = pos.x;
      let y = pos.y;

      if (x > img!.width - w / zoom) { x = img!.width - w / zoom; }
      if (x < w / zoom) { x = w / zoom; }
      if (y > img!.height - h / zoom) { y = img!.height - h / zoom; }
      if (y < h / zoom) { y = h / zoom; }

      glass.style.left = `${x - w}px`;
      glass.style.top = `${y - h}px`;
      glass.style.backgroundPosition = `-${x * zoom - w + bw}px -${y * zoom - h + bw}px`;
  }

  function getCursorPos(e: MouseEvent | TouchEvent): { x: number; y: number } {
      const a = img!.getBoundingClientRect();
      let x = 0, y = 0;
      if (e instanceof MouseEvent) {
          x = e.pageX - a.left - window.pageXOffset;
          y = e.pageY - a.top - window.pageYOffset;
      } else if (e instanceof TouchEvent) {
          x = e.touches[0].pageX - a.left - window.pageXOffset;
          y = e.touches[0].pageY - a.top - window.pageYOffset;
      }
      return { x: x, y: y };
  }
}