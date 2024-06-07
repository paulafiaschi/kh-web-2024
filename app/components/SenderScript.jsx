"use client";

import { useEffect } from "react";
import Head from "next/head";

const SenderScript = () => {
  useEffect(() => {
    (function (s, e, n, d, er) {
      s["Sender"] = er;
      s[er] =
        s[er] ||
        function () {
          (s[er].q = s[er].q || []).push(arguments);
        };
      s[er].l = 1 * new Date();
      var a = e.createElement(n),
        m = e.getElementsByTagName(n)[0];
      a.async = 1;
      a.src = d;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "https://cdn.sender.net/accounts_resources/universal.js",
      "sender"
    );

    sender("6e4dc208183559");
  }, []);

  return (
    <Head>
      <script
        async
        src="https://cdn.sender.net/accounts_resources/universal.js"
      ></script>
    </Head>
  );
};

export default SenderScript;
