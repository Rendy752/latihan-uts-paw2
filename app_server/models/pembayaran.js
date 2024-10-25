const mongoose = require('mongoose');
const { Schema } = mongoose;

const pembayaranSchema = new Schema({
  id: { type: Schema.Types.ObjectId, required: true },
  metode_pembayaran: { type: String, required: true },
  jumlah_pembayaran: { type: Number, required: true },
  tanggal_pembayaran: { type: Date, required: true },
  status: { type: String, required: true },
});

mongoose.model('Pembayaran', pembayaranSchema);
