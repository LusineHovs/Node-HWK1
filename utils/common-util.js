module.exports = {
  removeUndefinedKeys: function (obj) {
    const newObj = {};

    Object.keys(obj).forEach((key) => {
      if (obj[key]) {
        newObj[key] = obj[key];
      }
    });

    return newObj;
  }
};

const obj = {
  field: 'test'
}

const a = obj.field;
const b = obj['field'];
