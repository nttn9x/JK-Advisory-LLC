export function lazyLoadBG(eleId: string, imgBg: any) {
  // @ts-ignore
  const image = new Image();
  image.onload = function () {
    // @ts-ignore
    const node: any = document.getElementById(eleId);
    if (node) {
      node.setAttribute("style", `background-image: url('${imgBg}')`);
    }
  };
  image.src = imgBg;
}
