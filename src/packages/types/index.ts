import React, { ReactNode } from "react";

interface WithChildren {
    children: ReactNode
}

export type WithChildrenComponent = React.FC<WithChildren>