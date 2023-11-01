import router from ".";
export const locationPath = "location";
export function GetPageNameFromComponment(component: any) {
  const name = component.__name?.toLowerCase() ?? "";
  if (name === "homepage") return undefined;
  //trimend 'page'
  if (name.endsWith("page")) return name.substring(0, name.length - 4);
  return name;
}
export async function ionNavDidChange(el: HTMLIonNavElement) {
  const active = await el.getActive();
  if (!active) return;
  const file = GetPageNameFromComponment(active.component);
  const originalQuery = router.currentRoute.value.query;
  if (file === "homepage") {
    router.push({
      query: {
        [locationPath]: undefined,
        ...originalQuery,
      },
    });
  } else {
    router.push({
      query: {
        [locationPath]: file,
        ...originalQuery,
      },
    });
  }
}
export async function ionNavWillChange(el: any) {}
