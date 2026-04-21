export function apiSuccess(res, data, message = 'Success', status = 200) {
  return res.status(status).json({ success: true, data, message });
}

export function apiError(res, error, status = 400) {
  return res.status(status).json({ success: false, error: error || 'Something went wrong' });
}

export function paginate(array, page = 1, limit = 20) {
  const p = Math.max(1, parseInt(page, 10) || 1);
  const l = Math.min(100, Math.max(1, parseInt(limit, 10) || 20));
  const start = (p - 1) * l;
  const items = array.slice(start, start + l);
  return {
    items,
    pagination: {
      page: p,
      limit: l,
      total: array.length,
      totalPages: Math.ceil(array.length / l),
    },
  };
}
