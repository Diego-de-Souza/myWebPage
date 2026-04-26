// Vercel Serverless Function (same-origin) to avoid browser CORS.
// Route: /api/qod
module.exports = async function handler(req, res) {
  try {
    const upstream = await fetch('https://quotes.rest/qod', {
      headers: {
        accept: 'application/json'
      }
    });

    // quotes.rest may return non-2xx or HTML when rate-limited; pass through status + best-effort JSON
    const contentType = upstream.headers.get('content-type') || '';
    const text = await upstream.text();

    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=86400');
    res.status(upstream.status);

    if (contentType.includes('application/json')) {
      try {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        return res.send(text);
      } catch {
        // fallthrough to wrapping
      }
    }

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.send(
      JSON.stringify({
        contents: { quotes: [] },
        error: { message: 'Upstream did not return JSON', status: upstream.status }
      })
    );
  } catch (error) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(502).send(
      JSON.stringify({
        contents: { quotes: [] },
        error: { message: error?.message || 'Upstream fetch failed' }
      })
    );
  }
}

