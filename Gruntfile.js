module.exports = function(grunt) {

  var paths = [
    'Entity.js',
    'TileSpriteGroup.js',
    'Animal.js',
    'Carrot.js',
    'BulletPool.js',
    'RangedEnemy.js',
    'MeleeEnemy.js',
    'World.js',
    'Tofu.js',
    'Trash.js',
    'Player.js',
    'Game.js',
  ].map(function(it) {
    return 'src/client/at/game/' + it;
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: paths,
        dest: 'src/client/at/meatpocalypse.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};
