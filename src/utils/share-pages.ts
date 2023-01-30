/**
 * Search DOM tree for a class name and trigger callback when found.
 *
 * @param element Node to start search from.
 * @param callback Function to call when class is found.
 * @param className class to search for.
 */
export function searchDomForClass<T extends (bool: boolean) => void>(
  element: Element,
  callback: T,
  className = "act-now-component-loaded"
) {
  Array.from(element.children).forEach((child) => {
    searchDomForClass(child, callback);
  });
  if (element.classList.contains(className)) {
    callback(true);
  }
}
