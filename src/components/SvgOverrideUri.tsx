import React, { useEffect, useMemo, useState } from 'react';
import { parse, SvgAst, UriProps, XmlProps } from 'react-native-svg';
import { fetchText, JsxAST } from 'react-native-svg/src/xml';

export const SvgOverride = (props: XmlProps) => {
  const { xml, override } = props;
  const ast = useMemo<JsxAST | null>(() => (xml !== null ? parse(xml) : null), [xml]);
  return <SvgAst ast={ast} override={override || props} />;
};

export const SvgOverrideUri = (props: UriProps) => {
  const { uri } = props;
  const [xml, setXml] = useState<string | null>(null);
  useEffect(() => {
    uri
      ? fetchText(uri)
          .then((result: string) => {
            setXml(result.split('fill="currentColor"').join(''));
          })
          .catch()
      : setXml(null);
  }, [uri]);
  return <SvgOverride xml={xml} override={props} />;
};
