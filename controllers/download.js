const fs = require('fs');

// Функция для удаления кавычек из строки
const removeQuotes = (str) => {
  return str.replace(/"/g, '');
};

module.exports.downloadOne = (req, res) => {
  const { fileName, dataArray } = req.body;

  if (!fileName || !dataArray || !Array.isArray(dataArray)) {
    return res.status(400).send('Неверный формат данных');
  }

  const fileContent = dataArray
    .map((item) => removeQuotes(JSON.stringify(item)))
    .join('\n');

  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.error('Ошибка при создании файла:', err);
      res.status(500).send('Ошибка сервера');
    } else {
      console.log('Файл успешно создан.\n');
      res.set({
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Type': 'text/plain',
      });

      const fileStream = fs.createReadStream(fileName);
      fileStream.pipe(res);

      fileStream.on('close', () => {
        fs.unlink(fileName, (err) => {
          if (err) console.error('Ошибка при удалении файла:', err);
          else console.log('Файл успешно удален.\n');
        });
      });
    }
  });
};
