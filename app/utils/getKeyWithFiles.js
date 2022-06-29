export async function getKeyWithFiles(files, apiKey) {
  await fetch("https://send-anywhere.com/web/v1/key", {
    method: "GET",
    headers: {
      "X-API-KEY": apiKey,
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  }).then((res) => {
    return res;
  });
}
