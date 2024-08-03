import { useContext } from "react";
import { mainContext } from "@packages/contexts";

export const useLocales = () => {
    const { locales } = useContext(mainContext)
    return locales;
}
