const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isRequired(value, fieldName = 'Field') {
  const v = value != null ? String(value).trim() : '';
  return v.length > 0 ? null : `${fieldName} is required`;
}

export function isEmail(value) {
  const v = value != null ? String(value).trim() : '';
  if (!v) return 'Email is required';
  return EMAIL_REGEX.test(v) ? null : 'Valid email is required';
}

export function validate(body, rules) {
  for (const [field, fn] of Object.entries(rules)) {
    const err = fn(body[field], field);
    if (err) return err;
  }
  return null;
}
