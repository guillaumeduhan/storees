import ReactDOM from "react-dom/client";
import Avatar, { AvatarProps } from "./Avatar";

export const normalizeAttribute = (attribute: string) => {
  return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

class AvatarWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes<AvatarProps>();
    const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
    root.render(<Avatar {...props} />);
  }

  private getPropsFromAttributes<T>(): T {
    const props: Record<string, string> = {};

    for (let index = 0; index < this.attributes.length; index++) {
      const attribute = this.attributes[index];
      props[normalizeAttribute(attribute.name)] = attribute.value;
    }

    return props as T;
  }
}

export default AvatarWebComponent;