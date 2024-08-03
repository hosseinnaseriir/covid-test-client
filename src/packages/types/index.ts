import React, { ReactNode } from "react";

interface WithChildren {
    children: ReactNode
}

export type LocalesType = { locales: { [key: string]: string; } }

export type WithChildrenComponent<T = {}> = React.FC<WithChildren & T>