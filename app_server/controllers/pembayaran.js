const mongoose = require('mongoose');
const pembayaran = mongoose.model('Pembayaran');

const index = (req, res, next) => {
  pembayaran
    .find({}, { __v: 0 })
    .then((item) => {
      const responseMessage = {
        code: 200,
        message: 'Success',
        data: item,
      };
      res.status(200).json(responseMessage);
    })
    .catch((e) => {
      const responseMessage = {
        code: 400,
        message: 'Failed',
      };
      res.status(400).json(responseMessage);
    });
};

const insert = (req, res, next) => {
  const item = new pembayaran({
    id: new mongoose.Types.ObjectId(),
    metode_pembayaran: req.body.metode_pembayaran,
    jumlah_pembayaran: req.body.jumlah_pembayaran,
    tanggal_pembayaran: req.body.tanggal_pembayaran,
    status: 'Pending',
  });

  item
    .save()
    .then((result) => {
      const responseMessage = {
        code: 200,
        message: 'Success',
        data: result,
      };
      res.status(200).json(responseMessage);
    })
    .catch((e) => {
      const responseMessage = {
        code: 400,
        message: 'Failed',
      };
      res.status(400).json(responseMessage);
    });
};

module.exports = {
  index,
  insert,
};
