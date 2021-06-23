import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            addButtonText: "Add",
            rowNameInputPlaceholder: "Name",
            rowDescriptionPlaceholder: "Description",
            editButtonText: "Edit",
        },
    },
    ru: {
        translation: {
            addButtonText: "Добавить",
            rowNameInputPlaceholder: "Название",
            rowDescriptionPlaceholder: "Описание",
            editButtonText: "Отредактирвать",
        },
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;