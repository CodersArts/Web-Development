export function getErrorMessage (error) {
    const msg =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString ();
    return msg;
  }
  