import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { startMockServer } from "./mocks/mock-server";
import { getCssText } from "./stitches.config";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  if (process.env.START_MOCK_SERVER === "true") {
    startMockServer();
  }

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  ).replace(/<\/head>/, `<style id="stitches">${getCssText()}</style></head>`);

  responseHeaders.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
