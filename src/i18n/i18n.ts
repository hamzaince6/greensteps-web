import { getRequestConfig, GetRequestConfigParams, RequestConfig } from "next-intl/server";
import { i18n, Locale } from "../../i18n.config";

export default getRequestConfig(async ({ locale }: GetRequestConfigParams): Promise<RequestConfig> => {
  const validLocale = (locale || i18n.defaultLocale) as Locale;
  return {
    locale: validLocale,
    messages: (await import(`../../messages/${validLocale}.json`)).default,
  };
});
