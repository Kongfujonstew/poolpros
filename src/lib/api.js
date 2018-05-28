export default {
  asyncFetch: (postalCode) => {
    return new Promise((resolve) => {
      const results = 'results';
      setTimeout(resolve, 250, results);
    });
  }
};

