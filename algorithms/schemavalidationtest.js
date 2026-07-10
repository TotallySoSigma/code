function isValidSchema(obj) {
  if (typeof obj.username !== 'string') {
    return false;
  }
  if (typeof obj.posts !== 'number') {
    return false;
  }
  if (typeof obj.verified !== 'boolean') {
    return false;
  }
  if (obj.role !== 'user' && obj.role !== 'creator' && obj.role !== 'moderator' && obj.role !== 'staff' && obj.role !== 'admin') {
    return false;
  }
  if (typeof obj.supporter !== 'boolean' && obj.supporter !== undefined && obj.supporter !== null) {
    return false;
  }
  return true;
}
console.log(isValidSchema({ username: "felix", posts: 40, verified: "yes", role: "staff", supporter: false }));