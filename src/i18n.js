import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import React from "react";


const resources = {
    en: {
        translation: {
            "Charts": "Charts",
            "Debit per Sender": "Debit per Sender",
            "Credit per Sender": "Credit per Sender",
            "Data Grid": "Data Grid",
            "1 day": "1 day",
            '1 week': "1 week",
            "1 month": "1 month",
            "6 months": "6 months",
            "1 year": "1 year",
            "Transaction ID":"Transaction ID",
            "Date":"Date",
            "Debit, $":"Debit, $",
            "Credit, $":"Credit, $",
            "Sender ID":"Sender ID",
            "Receiver ID":"Receiver ID",
        }
    },
    he: {
        translation: {
            "Charts": "תרשימים",
            "Debit per Sender": "חיוב לשולח",
            "Credit per Sender": "אשראי לשולח",
            "Data Grid": "רשת נתונים",
            "1 day": "יום 1",
            '1 week': "שבוע 1",
            "1 month": "חודש 1",
            "6 months": "6 חודשים",
            "1 year": "1 שנה",
            "Transaction ID":"מזהה עסקה",
            "Date":"תַאֲרִיך",
            "Debit, $":"חיוב, $",
            "Credit, $":"אשראי, $",
            "Sender ID":"מספר זהות השולח",
            "Receiver ID":"תעודת מקלט",

        }
    }
};


i18n.use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;
