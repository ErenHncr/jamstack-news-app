module.exports = function(config) {

  config.setBrowserSyncConfig({
    https: {
      key: 'C:/Windows/System32/client.local.key',
      cert: 'C:/Windows/System32/client.local.crt'
    }
  });
  config.addPassthroughCopy('src/img');
  config.addPassthroughCopy('src/css');
  config.addPassthroughCopy('src/js');
  return {
   dir: {
     input: 'src',
     output: 'dist',
     data: "_data",
   }
 };
}
