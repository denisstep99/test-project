import {useTranslation} from "react-i18next";

export function useTranslate() {
    return useTranslation()[0];
}