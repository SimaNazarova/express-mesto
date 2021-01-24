const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        const regex = /^https?:\/{2}(w{3}\.)?([\w.-\W]{1,})(\.)([a-z]{2,6})(\/?)([\w-.\W]*)/gi;
        return regex.test(v);
      },
      message: 'Некорректная ссылка',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
