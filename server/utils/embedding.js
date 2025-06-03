const { exec } = require('child_process');

exports.getEmbedding = (text) => {
  return new Promise((resolve, reject) => {
    // Use "python" instead of "python3" for Windows
    exec(`python utils/embed.py "${text}"`, (err, stdout, stderr) => {
      if (err) {
        return reject(new Error(stderr || err.message));
      }
      try {
        const vector = JSON.parse(stdout);
        resolve(vector);
      } catch (parseErr) {
        reject(new Error(`Embedding parse error: ${parseErr.message}`));
      }
    });
  });
};
