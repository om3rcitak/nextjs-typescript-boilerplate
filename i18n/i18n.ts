import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
    defaultLanguage: 'tr',
    otherLanguages: ['en'],
    localeSubpaths: 'all',
});
export const nextI18Next = NextI18NextInstance;
NextI18NextInstance.i18n.languages = ['tr','en'];

export const {
    appWithTranslation,
    i18n,
    Router,
    Link
} = NextI18NextInstance;

export const withTranslation = nextI18Next.withTranslation();