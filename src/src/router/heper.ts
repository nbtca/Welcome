import router from ".";

export async function ionNavDidChange(el: HTMLIonNavElement) {
  const active = await el.getActive();
  if (!active) return;
  const file = (active.component.__name as string).toLowerCase();
  if (file === "homepage") {
    router.push({
      query: {},
    });
  } else {
    router.push({
      query: {
        location: file,
      },
    });
  }
}
export async function ionNavWillChange(el: any) {}
