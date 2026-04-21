export function errorHandler(err, req, res, next) {
  console.error(err.stack || err);
  const status = err.status || err.statusCode || 500;
  res.status(status).json({
    success: false,
    error: err.message || 'Internal server error',
  });
}

export function notFoundHandler(req, res) {
  res.status(404).json({ success: false, error: 'Not found' });
}
