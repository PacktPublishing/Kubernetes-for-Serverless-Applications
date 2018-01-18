module.exports = function(context, callback) {
  var name = context.request.query.name || context.request.body || "World";
  callback(200, "Hello " + name + "!!");
};