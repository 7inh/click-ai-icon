declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
