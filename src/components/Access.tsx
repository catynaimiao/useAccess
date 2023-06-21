import type { ReactElement, ComponentPropsWithoutRef } from "react";

interface AccessProps extends ComponentPropsWithoutRef<any> {
  accessiable: boolean;
  failcallback?: React.ReactElement;
  children?: ReactElement;
}

export default function Access(props: AccessProps): ReactElement<AccessProps> {
  const accessiable = props.accessiable;
  const failcallback = props.failcallback;
  const children = props.children || null;

  if (!accessiable && failcallback) {
    return failcallback;
  }
  
  if (!accessiable) {
    return null;
  }

  return children;
}
