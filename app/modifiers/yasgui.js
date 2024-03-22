import { modifier } from "ember-modifier";
import Yasgui from "@triply/yasgui";
import "@triply/yasgui/build/yasgui.min.css";
import env from "../config/environment";

const defaultQuery =
  env.yasgui.defaultQuery !== "{{EMBER_YASGUI_DEFAULT_QUERY}}"
    ? env.yasgui.defaultQuery
    : `PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>
PREFIX mandaat: <http://data.vlaanderen.be/ns/mandaat#>
PREFIX lblodlg: <http://data.lblod.info/vocabularies/leidinggevenden/>

SELECT DISTINCT ?type WHERE {
  ?s a ?type .
} LIMIT 10
`;

export default modifier(
  function yasgui(element /*, params, hash*/) {
    const yasgui = new Yasgui(element, {
      requestConfig: { endpoint: "/sparql" },
      autofocus: true,
    });
    yasgui.config.yasqe.value = defaultQuery;
    if (env.yasgui.extraPrefixes !== "{{YASGUI_EXTRA_PREFIXES}}")
      yasgui.config.yasqe.addPrefixes(JSON.parse(env.yasgui.extraPrefixes));

    element.addEventListener("click", function (event) {
      const link = event.target.closest("a"); // Table collapses long uri's. This makes only hyperlinks clickable
      const baseUrl = env.metis.baseUrl;
      if (link) {
        let linkText = link.innerText;
        let redirectUrl = "";
        if (linkText?.startsWith(baseUrl)) {
          redirectUrl = linkText.replace(baseUrl, "");
          window.open(redirectUrl);
        } else {
          redirectUrl = `/external/?resourceUri=${linkText}`;
          window.open(redirectUrl);
        }
      }
    });
  },
  { eager: false }
);
